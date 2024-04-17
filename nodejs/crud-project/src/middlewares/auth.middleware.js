import HttpStatus from 'http-status-codes';
import jwt from 'jsonwebtoken';
const secret = "Pgxhhwi%e1z$bJ#";

/**
 * Middleware to authenticate if user has a valid Authorization token
 * Authorization: Bearer <token>
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
// export const userAuth = async (req, res, next) => {
//   try {
//     let bearerToken = req.header('Authorization');
//     if (!bearerToken)
//       throw {
//         code: HttpStatus.BAD_REQUEST,
//         message: 'Authorization token is required'
//       };
//     bearerToken = bearerToken.split(' ')[1];

//     const { user } = await jwt.verify(bearerToken, 'your-secret-key');
//     res.locals.user = user;
//     res.locals.token = bearerToken;
//     next();
//   } catch (error) {
//     next(error);
//   }
// };

// const sessionIdToUserMap = new Map();

// export function setUser(id,user){
//   sessionIdToUserMap.set(id,user);
// }

// export function getUser(id){
//   return sessionIdToUserMap.get(id);
// }



export function setUser(user){
  return jwt.sign({
    _id:user._id,
    email:user.email
  },secret);
}

export function getUser(token){
  if(!token) return null;

  try{
    return jwt.verify(token,secret);
  }catch(error){
    return null;
  }
}
