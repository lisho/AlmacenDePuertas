const { use } = require("../routes/api");

function applyExtraSetup(sequelize) {
    console.log(sequelize.models)
	const { perfil_profesional, 
            perfil_usuario,
            user,
            apoyo,
            tipo_apoyo,
            ciudadano,
            participacion,
            cita,
            estado_cita,
            sesion,
            punto_atencion
         } = sequelize.models;

    perfil_profesional.hasMany(user);

    perfil_usuario.hasMany(user);

    user.belongsTo(perfil_profesional);
    user.belongsTo(perfil_usuario);
    user.hasMany(apoyo);

    apoyo.belongsTo(sesion);
    apoyo.belongsTo(user);
    apoyo.belongsTo(participacion);
    apoyo.belongsTo(tipo_apoyo);

    tipo_apoyo.hasMany(apoyo);

    participacion.hasMany(apoyo);
    participacion.belongsTo(sesion);
    participacion.belongsTo(ciudadano);

    ciudadano.hasMany(participacion);
    ciudadano.hasMany(cita);

    sesion.hasMany(participacion);
    sesion.hasMany(apoyo);
    sesion.hasMany(cita); // revisar 1&1  sesion.hasOne(cita);

    cita.belongsTo(ciudadano);
    cita.belongsTo(sesion); // revisar 1&1
    cita.belongsTo(punto_atencion);
    cita.belongsTo(estado_cita);

    punto_atencion.hasMany(cita);

    estado_cita.hasMany(cita);

}

module.exports = { applyExtraSetup };