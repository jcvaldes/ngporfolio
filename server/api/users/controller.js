import db from '../../models'

class UsersController {
  static Fetch(req, res) {
    db.User.findAndCountAll().then((users) => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(400).json({message: 'Problemas al intentar conectarse a la base de datos' + err})
    })
  }
}

export default UsersController;