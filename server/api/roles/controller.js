import db from '../../models'

class RolesController {
  static Fetch(req, res) {
    db.Role.findAndCountAll().then((roles) => {
      res.status(200).json(roles);
    })
    .catch(err => {
      res.status(400).json({message: 'Problemas al intentar conectarse a la base de datos' + err})
    })
  }
}

export default RolesController;