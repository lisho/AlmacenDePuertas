const express =  require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

/** Importamos las rutas de la api */

const apiRouter = require('./routes/api')

/** Iniciamos el servidor de express */
const app = express();

const port = process.env.PORT || 3030;

/* sincronizamos la base de datos con los modelos */

require("./db/db")

/* Middlewares */

const allowlist = ['http://127.0.0.1:3000']

const corsOptionsDelegate = function (req, callback) {
    console.log("probando cors")
  var corsOptions;
  if (allowlist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}

app.use(cors(corsOptionsDelegate)); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
/* app.use(expresss.json());
app.use(expresss.urlencoded({ extended: true })); */

    /** Redireccionamos las rutas que vengan a api */

app.use('/api', apiRouter );


/** Arrancamos el servidor */
app.listen(port, () => {
    console.log("Server funcionando en el puerto", port)
})
