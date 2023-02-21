const createError = require("http-errors")
// 404 error 

const notFoundError= (req,res,next) => {
  next(createError(404,"page not found"))
}


// default error handler 
const errorHandler = (error, req, res, next) => {
  // console.log(error.status)
  res.locals.error =process.env.NODE_ENV === "development" ? error : { message: error.message };
  res.status(error.status || 500)
  if (!res.locals.html) {
    res.render("error", {
      title: "Error page",
    })
  } else {
    res.json(res.locals.error)
  }
};

module.exports = {
  errorHandler,
  notFoundError
};
