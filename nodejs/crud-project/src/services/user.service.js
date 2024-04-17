import User from '../models/user.model';
// import { v4 as uuidv4 } from 'uuid';
import {setUser} from '../middlewares/auth.middleware'
//get all users
// export const getAllUsers = async () => {
//   const data = await User.find();
//   return data;
// };

//create new user
export const newUser = async (body) => {
  const data = await User.create(body);
  return data;
};

//update single user
// export const updateUser = async (_id, body) => {
//   const data = await User.findByIdAndUpdate(
//     {
//       _id
//     },
//     body,
//     {
//       new: true
//     }
//   );
//   return data;
// };

//delete single user
// export const deleteUser = async (id) => {
//   await User.findByIdAndDelete(id);
//   return '';
// };

//get single user
// export const getUser = async (id) => {
//   const data = await User.findById(id);
//   return data;
// };

//login user
// Example loginUser function without findByEmailAndPassword method
export const loginUser = async (body,res) => {
  try {
    // Assuming User is a model or database query module
    const user = await User.findOne({ email: body.email });
    // If a user with the provided email is found
    if (user) {
      // Verify the password
      if (user.password === body.password) {
        // Passwords match, return the user object
        const token = setUser(user);
        res.cookie("uid",token);
        console.log("token: "+token);
        return user;
      } else {
        // Passwords don't match, return null or handle accordingly
        return null;
      }
    } else {
      // If no user with the provided email is found, return null or handle accordingly
      return null;
    }
  } catch (error) {
    console.error('Error in loginUser:', error);
    throw error; // Rethrow the error for handling at a higher level
  }
};


