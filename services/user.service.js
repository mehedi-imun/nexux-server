const User = require("../models/User.model");

/**
 * 
 * @param {data from auth controller} userData 
 * @returns create user data
 */
exports.createUserService = async (user) => {
    const result =User.create(user);
    return result
}

/**
 * 
 * @param {data from auth controller} userData 
 * @returns get a user data by email
 */
exports.findUserByEmailService = async (email) => {
    const result = await User.findOne({ email: email });
    return result
  
}