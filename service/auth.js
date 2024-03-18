//this is to save the logged in info. 


const jwt = require('jsonwebtoken');
const secret = "Shagun@123@$"

//this function will create tokens.
function setUser(user) {
 return jwt.sign({id: user.id, email: user.email, role: user.role,}, secret);
}

function getUser(token) {
  if(!token) return null;
  try {
    return jwt.verify(token, secret);         //verifying web token.
  } catch (error) {
    return null;
  }
  
}

module.exports = {
  setUser,
  getUser,
};