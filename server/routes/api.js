const router = require('express').Router();

/** Importamos los archivos de cada ruta */
const ciudadanosApiRouter = require('./api/ciudadanosApiRouter');
const usersApiRouter = require('./api/usersApiRouter');
const perfilesProfesionalApiRouter = require('./api/perfilesProfesionalApiRouter');

/** Redirigimos las rutas */

router.use('/ciudadanos', ciudadanosApiRouter);
router.use('/users', usersApiRouter);
router.use('/perfilesProfesional', perfilesProfesionalApiRouter);

module.exports = router;