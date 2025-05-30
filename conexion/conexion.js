let mysql = require('mysql');

let conexion = mysql.createConnection({
    host: 'localhost',
    database: 'gestormanicuria',
    user: "root",
    password: ""
});  


conexion.connect(function(err){
    if (err) {
        console.error('Error de conexión a la base de datos:', err);
        return;
    }else {
    console.log('Conexión exitosa a la base de datos MySQL');
    }
});

conexion.end();