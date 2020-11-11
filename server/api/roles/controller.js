import db from '../../models'
import { Sequelize } from '../../models'
class RolesController {
  static Fetch(req, res) {
    db.Role.findAndCountAll().then((roles) => {
      res.status(200).json(roles);
    })
    .catch(err => {
      res.status(400).json({message: 'Problemas al intentar conectarse a la base de datos' + err})
    })
  }
  static Create(req, res) {
    db.Role.create(req.body)
      .then((role) => {
        res.status(200).json({
          ok: true,
          role,
        })
      })
      .catch(Sequelize.ValidationError, (msg) => {
        res.status(422).json({ message: msg.original.message })
      })
      .catch((err) => {
        res.status(400).json({ message: 'RESPONSESDB_CONNECTION_ERROR.message' })
      })
  }
}

export default RolesController;