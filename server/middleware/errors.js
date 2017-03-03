module.exports.catch404Error = (req, res) => {
  const err = new Error('Not Found');
  err.status = 404;
  res.render('error');
};
