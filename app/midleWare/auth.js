const authMiddleware = (req, res, next) => {
    if(req.isAuthenticated()) { // ログインしてるかチェック
  
      next();
  
    } else {
  
      res.redirect(302, '/login');
  
    }
  };
  module.exports = authMiddleware