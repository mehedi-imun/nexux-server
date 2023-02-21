const { createUserService, findUserByEmailService } = require("../services/user.service");
const jwt = require("jsonwebtoken");
/**
 *
 * @param {data from from front end} req
 * @param {send status front end} res
 * @param {handle error} next
 */
module.exports.createUser = async (req, res, next) => {
    try {
        const email = req.body.email;
        const user = req.body;
        const existUser = await findUserByEmailService(email);
        if (existUser) {
            const token =   jwt.sign({ email: email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '2 days' });
           return res.send({ existUser, token })
        } else {
            const result = await createUserService(user);
            const token =  jwt.sign({ email: email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '2 days' });
            return res.send({ result, token })
        }

    } catch (error) {
        next(error);
    }
};

