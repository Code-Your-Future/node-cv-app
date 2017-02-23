

module.exports.catch404Error = (req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
};

module.exports.handleError = (err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {
    status: err.status,
    message: err.message,
  });
};
