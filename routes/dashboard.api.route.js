module.exports = function(app) {
  app.get('/api/v1/dashboard', function(req, res, next) {
    return res.json({
      success: true,
      message: 'Dashboard'
    });
  });
}
