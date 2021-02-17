import db from '../../models';
import { Sequelize } from '../../models';
class TeamsController {
  static Fetch(req, res) {
    console.log(db.Team)
    db.Team.findAndCountAll({
      order: [['id', 'ASC']],
    })
      .then((teams) => {
        res.status(200).json(teams);
      })
      .catch((err) => {
        res.status(400).json({
          message: 'Problemas al intentar conectarse a la base de datos' + err,
        });
      });
  }
  static FetchOne(req, res) {
    const id = +req.params.id;
    db.Team.findOne({
      where: { id },
    })
      .then((skill) => {
        if (skill === 0) {
          res.status(404).json({
            error: 'Not Found',
          });
        } else {
          res.status(200).json(skill);
        }
      })
      .catch((err) => {
        res.status(400).json({
          message: 'Problemas al intentar conectarse a la base de datos' + err,
        });
      });
  }
  static Create(req, res) {
    const { name, ParentId, active } = req.body;
    const UserId = req.user.id;
    db.Team.create({name, ParentId, UserId, active})
      .then((skill) => {
        res.status(200).json({
          ok: true,
          skill,
        });
      })
      .catch(Sequelize.ValidationError, (msg) => {
        res.status(422).json({ message: msg.original.message });
      })
      .catch((err) => {
        res
          .status(400)
          .json({ message: 'RESPONSESDB_CONNECTION_ERROR.message' });
      });
  }
  static Update(req, res) {
    db.Team.update(req.body, {
      where: { id: req.body.id },
    })
      .then((skill) => {
        res.status(201).json({
          ok: true,
        });
      })
      .catch((err) => {
        res.status(400).json({ message: 'Registro no actualizado' });
      });
  }
  static Delete(req, res) {
    const id = +req.params.id;
    db.Team.destroy({ where: { id } })
      .then((result) => {
        if (result === 0) {
          res.status(404).json({
            error: 'Registro no encontrado',
          });
        } else {
          res.status(200).json({
            message: 'Registro eliminado',
          });
        }
      })
      .catch(Sequelize.ValidationError, (msg) => {
        res.status(422).json({ message: msg.original.message });
      })
      .catch((err) => {
        res
          .status(400)
          .json({ message: 'RESPONSESDB_CONNECTION_ERROR.message' });
      });
  }
}
export default TeamsController;
