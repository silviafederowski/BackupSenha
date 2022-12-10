const mysql = require("mysql");
const express = require("express");
const bodyparser = require("body-parser");
var app = express();
//Configuring express server
app.use(bodyparser.json());
const path = require("path");

//MySQL details
var mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "nbuser",
  database: "silsys",
  multipleStatements: true,
});

mysqlConnection.connect((err) => {
  if (!err) console.log("Conexão estabelecida com sucesso");
  else
    console.log("Conexão Falhou ! Erro : " + JSON.stringify(err, undefined, 2));
});

//Creating GET Router to fetch all the learner details from the MySQL Database
app.get("/silsys", (req, res) => {
  console.log(req.params);

  mysqlConnection.query(
    "SELECT codigo,ativo FROM usuarios where codigo = 'Rosana152'",
    /* + req.params.codigo */ (err, rows, fields) => {
      /* console.log(res); */
      console.log("fiz o get=====");
      if (!err) {
        console.log(rows);
        res.send(rows);
      } else console.log("Erro no get " + err);
    }
  );
});
/* app.get("/silsys/:codigo", (req, res) => {
  mysqlConnection.query(
    "SELECT * FROM usuarios WHERE codigo = ?",
    [req.params.id],
    (err, rows, fields) => {
      if (!err) res.send(rows);
      else console.log("Erro no servidor " + err);
    }
  );
}); */

//Establish the server connection
//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 1901;
app.listen(port, () => console.log(`Rodando na porta ${port}..`));
