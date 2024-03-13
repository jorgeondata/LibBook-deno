import { Application, Router } from "https://deno.land/x/oak/mod.ts"; //Foi retirado o uso do npm para evitar erros entre o Node e Deno. Considere o Deno como um compilador.
import { booksModel } from "./booksModel.ts";

let fakeDB: booksModel[] = []; // Banco de dados vazio para armazenar as operações CRUD, isso implica dizer que o servidor armazena os dados nele mesmo, ou seja, quando o servidor é finalizado, os dados vão junto.
const app = new Application();
const router = new Router();

router
.get("/read", (context) => {

})
.get("/read/:id", (context) => {

})
.post("/create", async (context) => {

})
.put("/update/:id", async (context) => {

})
.delete("/delete/:id", (context) => {

})

app.use(async (ctx ,next) => { // Logando o middleware

})

app.use(async (ctx ,next) => { // Temporizando o middleware
  
})

app.use(router.routes());
app.use(router.allowMethods());

await app.listen({ port: 8000});
console.log ("O servidor está on-line naquela porta lá.");

//app.get("/read", (req,res) => { // Get é uma parte do protocolo HTTP, assim como POST, DELETE e PUT. Porém, como "(req,res)" são parâmetros de callback, eles devem ser devidamente referenciados nas linhas abaixo.
//  res.json({ code: "Success", message: 'Sucesso na leitura do banco de dados', result: fakeDB});
//});

//app.post("/create", (req: Request,res: Response) => {
//  const body = req.body as booksModel;
//  const newBook: booksModel = {
//    ...body,
//    _id: fakeDB.length+1
//  }
//fakeDB.push(newBook);

//  return res.status(201).json(newBook);
//});

//app.put("/update", (req,res) => {
//  const {_id} = req.params;
//  const index = fakeDB.findIndex(book => book._id === parseInt(id));

//  if (index === -1) {
//    return res.status(404).send("Livro não adicionado.");
//  }

 // const updatedBook: booksModel = {
  //    ...fakeDB[index],
   //   ...req.body,
   //   _id: parseInt(id),
 // };

 // fakeDB[index] = updatedBook;
 // return res.status (200).json(updatedBook);
//});

//app.delete ("/delete", (req: Request, res: Response) => {
//  const {id} = req.params;
 // const initialLength = fakeDB.length;
 // fakeDB = fakeDB.filter (book => book._id !== parseInt(id));

  //if (fakeDB.length === initialLength) {
    //return res.status(404).send("Livro não encontrado.");
  //}

  //return res.status (204).send();
//})

app.listen(8000, () => { //Normalmente se declara a função de callback para verificar o que está havendo no servidor (escutar). Ele é uma função anônima (sem nome), que pode armazenar vários dados e serem manipulados.
  console.log('Servidor online na porta {aquela lá}.');
});

// Tá faltando a rota de busca via id
// Falta uma rota de update via id
// Falta um delete geral (delete-all)
// Falta uma conexão entre o código e o banco de dados MongoDB
// Pesquisar sobre o ".gitignore"
