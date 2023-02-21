const { createUserService } = require("../services/user.service");

/**
 *
 * @param {data from from front end} req
 * @param {send status front end} res
 * @param {handle error} next
 */
module.exports.createUser = async (req, res, next) => {
    try {
        const email = req.params.email;
        const user = req.body;
        const filter = { email: email }
        const options = { upsert: true };
        const updatedDoc = {
            $set: user,
        };
        const result = createUserService(filter, updatedDoc, options);
        const token = jwt.sign({ email: email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '2 days' });
        res.send({ result, token })
    } catch (error) {
        res.status(400).json({
            status: false,
            message: "user can't create",
            error: error,
        });
        next(error);
    }
};

