// O Primeiro passo é iniciar o servidor
// O segundo é importar os módulos
// Antes do terceiro, criar as operações CRUD em um fake-DB
// O terceiro é configurar as variáveis ENV
// A seguir, configurar a aplicação e rotas
// Depois, criar um router
// Então, passar o router como um middleware para a aplicação
// Por sétimo, configurar o logger e o timer
// Por fim, insira o comando "denom run --allow-env --allow-net main.ts"

import express from "npm:express";
import { booksModel } from "./booksModel.ts";

let fakeDB: booksModel[] = []; // Banco de dados vazio para armazenar as operações CRUD, isso implica dizer que o servidor armazena os dados nele mesmo, ou seja, quando o servidor é finalizado, os dados vão junto.

const app = express();

app.use(express.json());

app.get("/read", (req,res) => { // Get é uma parte do protocolo HTTP, assim como POST, DELETE e PUT. Porém, como "(req,res)" são parâmetros de callback, eles devem ser devidamente referenciados nas linhas abaixo.
  res.json({ code: "Success", message: 'Sucesso na leitura do banco de dados', result: fakeDB});
});

app.post("/create", (req,res) => {
  const body = req.body;
  const newBook: booksModel = {
    title: body.title,
    author: body.author,
    summ: body.summ,
    yrpubl: body.yrpubl,
    ed: body.ed,
    _id: fakeDB.length+1
  }
fakeDB.push(newBook);

  return res.send(body);
});

app.put("/update", (req,res) => {

})

app.delete ("/delete", (req,res) => {

})

app.listen(8000, function callback(){ //Normalmente se declara a função de callback para verificar o que está havendo no servidor (escutar). Ele é uma função anônima (sem nome), que pode armazenar vários dados e serem manipulados.
  console.log('Servidor online');
});