// Primeiro passo é iniciar o server
import express from "npm:express";

const app = express();
app.get ("/", (req,res) => { // Get é uma parte do protocolo HTTP, assim como POST, DELETE e PUT. Porém, como "(req,res)" são parâmetros de callback, eles devem ser devidamente referenciados nas linhas abaixo.
  res.send("Bem-vindo ao servidor");
});

app.listen(8000, function callback(){ //Normalmente se declara a função de callback para verificar o que está havendo no servidor (escutar). Ele é uma função anônima (sem nome), que pode armazenar vários dados e serem manipulados.
  console.log('Servidor online');
});