const express = require("express");
const connect = require("./configs/db");
const userController = require("./controllers/user.controller");
const { register, login, generateToken } = require("./controllers/auth.controller");
const { body, validationResult } = require("express-validator");
const User = require("./models/user.model");
const passport = require("./configs/google_auth");
const jwt = require('jsonwebtoken');

const app = express();

const productController = require("./controllers/product.controller");

app.use(express.json());
app.use("/products", productController);
app.use("/users", userController)

app.post("/register",
    body("first_name")
        .trim()
        .not()
        .isEmpty()
        .bail()
        .withMessage("First Name cannot be empty")
        // .isLength({ min: 4 })
        // .withMessage("First Name must be at least 4 characters"),
        .isLength({ min: 4 })
        .withMessage("First Name must be at least 4 characters"),
    body("email")
        .isEmail()
        .custom(async (value) => {
            const user = await User.findOne({ email: value });

            if (user) {
                throw new Error("Email is already taken");
            }
            return true;
        }),
    body("password")
        .not()
        .isEmpty()
        .withMessage("Password is required")
        .custom((value) => {
            const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9])(?!.*\s).{7,15}$/;
            if (!value.match(passw)) {
                throw new Error("Password must be strong");
            }
            return true;
        })
        .custom((value, { req }) => {
            if (value !== req.body.confirmPassword) {
                throw new Error("Password and confirm password should match");
            }
            return true;
        }),
    body("second_name").custom((value) => {
        if (value && value.length < 4) {
            throw new Error("Last Name if provided must be at least 4 characters");
        }
        return true;
    }),
    register)


app.post("/login",
    body("email")
        .isEmail()
        .custom(async (value) => {
            const user = await User.findOne({ email: value });

            if (user) {
                throw new Error("Email is already taken");
            }
            return true;
        }),
    body("password")
        .not()
        .isEmpty()
        .withMessage("Password is required"),
    login)


app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile','email'] }));

app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' ,session:false}),
    function (req, res) {
        // Successful authentication, redirect home.
        res.status(200).send({ user: req.user, token: generateToken(req.user)});
    });

module.exports = app;
