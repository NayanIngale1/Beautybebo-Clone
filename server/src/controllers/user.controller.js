

 

 




const express = require("express")
const {body,validationResult} =require("express-validator")
const User = require("../models/user.model.js");
const router = express.Router ()
router.post(
    "/",
    body("first_name")
    .trim()
    .not()
    .isEmpty()
    .bail()
    .withMessage("First Name cannot be empty")
    // .isLength({ min: 4 })
    // .withMessage("First Name must be at least 4 characters"),
    .isLength({min:4})
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

  
  async (req, res) => {
    try {
      console.log(body("first_name"));
     
      
 
 
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
} 
     
 const user = await User.create(req.body);

      return res.status(201).send(user);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  }
);

router.get("/", async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).send(user);
  }
  catch (err) {
    res.status(500).send({ message: err.message });
  }
})
module.exports = router;


