const GoogleStrategy = require('passport-google-oauth20').Strategy;
const req = require('express/lib/request');
const passport = require("passport");
const User = require('../models/user.model');
const { v4: uuidv4 } = require('uuid');
require("dotenv").config;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "https://beautibebo.herokuapp.com/auth/google/callback"
},
    async function (accessToken, refreshToken, profile, cb) {
        console.log(profile)
        let user = await User.findOne({ email: profile?._json?.email }).lean().exec();
        
        if (!user) {
            user = {
                first_name: profile?._json?.given_name,
                second_name: profile?._json?.family_name,
                email: profile?._json?.email,
                phone: 9876543210,
                password: uuidv4(),
                image: profile?._json?.picture
            }
            User.create(user)
        }
        return cb(null, user);
    }
));

module.exports = passport;