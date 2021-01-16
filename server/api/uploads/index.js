/* eslint-disable indent */
/* eslint-disable no-use-before-define */
const express = require('express');
const expressFileUpload = require('express-fileupload');
const fs = require('fs');
const cors = require('cors');
const path = require('path');
const app = express();
app.use(cors());
app.use(expressFileUpload());
app.put('/:type/:id', (req, res) => {
  const { type } = req.params;
  const id = +req.params.id;
  const validTypes = ['testimonials'];

  if (validTypes.indexOf(type) < 0) {
    return res.status(400).json({
      ok: false,
      message: 'Tipo de colección no es válida',
      errors: {
        message: 'Tipo de colección no es válida',
      },
    });
  }

  if (!req.files) {
    return res.status(400).json({
      ok: false,
      message: 'No selecciono nada',
      errors: {
        message: 'debe seleccionar una imagen',
      },
    });
  }
  let file;
  file = req.files.image; //|| req.files.file;

  const extFile = path.extname(file.name);
  const validExtensions = ['.jpg'];

  if (validExtensions.indexOf(extFile) < 0) {
    return res.status(400).json({
      ok: false,
      message: 'Extensión no válida',
      errors: { message: `Las extensiones válidas son ${validExtensions.join(', ')}` },
    });
  }

  // Nombre de archivo personalizado
  const fileName = `${id}-${new Date().getMilliseconds()}${extFile}`;
  // Mover el archivo del temporal a un path
  let newPath = path.join(__dirname, '../../', `uploads/${type}/${fileName}`);

  if (!fs.existsSync(path.join(__dirname, '../../', `uploads/${type}`))) {
    fs.mkdirSync(path.join(__dirname, '../../', `uploads/${type}`));
  }
  // if (type == "vessels" || type == "lineForVoyages") {
  //   if (!fs.existsSync(path.join(__dirname, '../', `uploads/${type}/${id}`))) fs.mkdirSync(path.join(__dirname, '../', `uploads/${type}/${id}`));
  //   newPath = path.join(__dirname, '../', `uploads/${type}/${id}/${file.name}`);
  // }

  file.mv(newPath, (err) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        message: 'Error al mover archivo',
        errors: err,
      });
    }
      return res.status(200).json({
        ok: true,
        message: 'Archivo subido exitosamente',
      });
      // uploadByType(type, id, fileName, res);
  });
});


module.exports = app;