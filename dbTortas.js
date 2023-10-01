const dotenv = require('dotenv')
dotenv.config();
//mongodb librería por defecto de la base de datos de Mongo
// npm i mongodb
const MongoClient = require('mongodb').MongoClient;

//url: es la ruto de la conexión a la base de datos
const MONGO_URL_LOCAL = process.env.MONGO_LOCAL;

console.log(MONGO_URL_LOCAL);

//Mongo Atlas
const MONGO_URL_ATLAS = process.env.MONGO_ATLAS;
console.log(MONGO_URL_ATLAS);




MongoClient.connect(MONGO_URL_ATLAS, async (err, db) => {

    if(err) throw err;

    let dbo = db.db('tortadb')

    // let coleccion = 'productos';
    // let coleccion = 'usuarios';
    // let coleccion='administradores';
    // let coleccion = 'pedidos';
    // await console.log(`Base de datos conectada a ${dbo}`);

    //creamos la colección
    // dbo.createCollection(coleccion, (err, colection) => {
    //     if(err) throw err;
    //     console.log(`Colección ${coleccion } creada en la Base de datos: ${dbo}`);
    //     db.close();
    // });
});