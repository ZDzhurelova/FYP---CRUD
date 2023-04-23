const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).send({
          message: "Auth failed",
          success: false,
        });
      } else {
        req.body.userId = decoded.id;
        next();
      }
    });
  } catch (error) {
    return res.status(401).send({
      message: "Auth failed",
      success: false,
    });
  }
};






// import jwt from 'jsonwebtoken';


// //Authorization
// // We will have 3 parameters - request, response and next
// const authorization = async(req, res, next) => {
//     try {
//                 //We have split because at the fron-end between Bearer and token we have teh space and after splitting the first will be bearer and the second one will be token and that's why we have array index = 1
//         const token = req.headers["authorization"].split("")[1];

//         //Verify if this token is valid or not
//         // to verify the first parameter will be token and the second parameter will be the secret key. Inside of decoded we will hold the user id
//         jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//             //If there is error
//             if(err){
//                 return res.status(401).send({
//                     message: "Auth failed",
//                     success: false
//                 });
//             } else{
//                 req.body.userId = decoded.id;
//                 //If the token is validated we will call next function
//                 next();
//             }
//         });
//     } catch (error) {
//         return res.status(401).send ({
//             message: "Authorization failed",
//             success: false
//         });
        
//     }
// };

// export default authorization