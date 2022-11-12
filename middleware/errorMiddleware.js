const {CustomError} = require('../helpers/CustomError')

const errorHandler = async (req, res) =>{
  var message = "Unknown Error"
  if (req.ApiHasError) {

    message = req.ApiError
  }
  res.status(400).json({
    success : false,
    message
  })
}

const endpointNotFound = async (req, res, next) => {
  try{
    if (!req.ApiHasError) {
      throw new CustomError('endpoint-not-found', 'Endpoint Not Found')
    } 
  } catch(error) {
    req.ApiHasError = true
    req.ApiError = error.errorCode
  } finally {
    next();
  }
}

module.exports = {
  errorHandler,
  endpointNotFound
}