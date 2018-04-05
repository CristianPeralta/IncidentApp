import iServices from '../src/services/IncidentServices'

module.exports.login = (req, res) => {
  let data = req.body
  console.log('loggin');
  iServices.login(data).then((response) => {
    console.log('respon es api');
    req.session.user = response.data
    let currentUser = req.session.user
    return res.json(currentUser)
  })
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
