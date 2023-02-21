const User = require("../models/User.model");

/**
 * 
 * @param {data from auth controller} userData 
 * @returns create user data
 */
exports.createUserService = async (filter, updatedDoc, options) => {
    return await User.create(filter, updatedDoc, options);
  
}