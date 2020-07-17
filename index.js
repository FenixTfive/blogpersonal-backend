//AQUI HAREMOS LA CONEXION DE LA BASE DE DATOS
const mongoose = require("mongoose");
const app = require("./app");
const port = process.env.PORT || 3977;
const { API_VERSION, PORT_DB, IP_SERVER } = require("./config");
//solucion globar de error al usar peticiones con findOneAndUpdate o findOneAndDelete
mongoose.set("useFindAndModify", false);
//conexion a mondoBD con mongoose
mongoose
  .connect(`mongodb://${IP_SERVER}:${PORT_DB}/blogpersonal`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("conexion exitosa "))

  .catch((err) => {
    console.log("error en la app", err.stack);
    process.exit(1);
  });

//escucha del port del server
app.listen(port);
console.log(`listening on http://${IP_SERVER}:${port}/api/${API_VERSION}/`);
