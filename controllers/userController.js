var Api = require('../src/services/incidentServices');

module.exports.login = (req, res) => {
  req.session.user = user
  let currentUser = req.session.user
}

module.exports.logout= function (req,res) {
    req.session.destroy(function(err) {
      // cannot access session here
      if(err){
        console.log(err);
        return res.sendStatus(503)
      }
      return res.sendStatus(200)
    })
}
