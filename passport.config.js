/*const localStrategy = require("passport-local").Strategy
const bcrypt = require("bcrypt")
debugger;
function initialize(passport, getUserByEmail, getUserById) {
    const authenticateUsers = async (email, password, done) => {
      try {
        const user = await getUserByEmail(email);
        if (!user) {
          return done(null, false, { message: "No User found" });
        }
  
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (passwordMatch) {
          return done(null, user);
        } else {
          return done(null, false, { message: "Password Incorrect" });
        }
      } catch (error) {
        console.log(error);
        return done(error);
      }
    }
  
    passport.use(new localStrategy({ usernameField: 'email' }, authenticateUsers));
  
    passport.serializeUser((user, done) => done(null, user.id));
    passport.deserializeUser((id, done) => {
      return done(null, getUserById(id));
    });
  }*/

  const localStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
debugger;

function initialize(passport, getUserByEmail, getUserByPhoneNumber) {
  const authenticateUsers = async (email, password, done) => {
    try {
      const user = await getUserByEmail(email);
      if (!user) {
        return done(null, false, { message: "No user found" });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);
      if (passwordMatch) {
        return done(null, user);
      } else {
        return done(null, false, { message: "Incorrect password" });
      }
    } catch (error) {
      console.log(error);
      return done(error);
    }
  };

  passport.use(
    new localStrategy({ usernameField: "email" }, authenticateUsers)
  );

  passport.serializeUser((user, done) => {
    // Use the user's email as the identifier for serialization
    done(null, user.email);
  });

  passport.deserializeUser(async (email, done) => {
    try {
      // Retrieve the user from the database using the phone number
      const user = await getUserByPhoneNumber(email);
      done(null, user);
    } catch (error) {
      done(error);
    }
  });
}

module.exports = initialize;

  //module.exports = initialize;
  