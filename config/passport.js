const passport = require("passport");
const bcrypt = require("bcryptjs");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/users");

passport.use(
  new LocalStrategy((username, password, done) => {
    User.findOne({
      where: {
        username: username
      }
    })
   .then(user => {
     if (!user) {
       const newUser=new User( {username, password});
       bcrypt.genSalt(10, (err,salt) => {
         bcrypt.hash(newUser.password, salt, (err, hash) => {
           if (err) throw err;
           newUser.password = hash;
           newUser
            .save()
            .then(user => {
              return done(null, user);
            })
            .catch(err => {
              return done(null, false, {message: err});
            });
         });
       });
     } else {
       bcrypt.compare(password, user.password, (err, isMatch) => {
         if (err) throw (err);
         if(isMatch) {
           return done(null, user);
         } else{
           return done(null, false, {message: "wrong password"});
         }
       });
     }
   })
    .catch(err => {
      return done(null, false, {message:err });
    });
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err,user);
  });
});

module.exports = passport;
