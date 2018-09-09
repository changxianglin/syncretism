module.exports = {
  checkLogin: function checkLogin(req, res, next) {
    if(!req.seesion.user) {
      req.flash('error', '未登录')
      return res.redirect('/signig')
    }
    next()
  },
  checkNotLogin: function checkNotLogin (req, res, next) {
    if(req.seesion.user) {
      req.flash('error', '已登录')
      return res.redirect('back')
    }
    next()
  }
}
