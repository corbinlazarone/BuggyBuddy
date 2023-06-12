
// error if url is not found
const notFound = (request, response, next) => {
    const error = new Error(`Not Found - ${request.originalURL}`);
    response.status(400);
    next(error)
}

const errorHandler = (err, request, response, next) => {
    let statusCode = response.statusCode == 200 ? 500 : response.statusCode;
    let message = err.message;

    // Checking Mongoose specfic error
    if (err.name === 'CastError' && err.kind === 'ObjectId') {
        statusCode = 400;
        message = 'Resource not found';
    }

    response.status(statusCode).json({
        message: message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    })
}

module.exports = { notFound, errorHandler };