//importing an module with require

//destructuring export
const {getFullName, getProductLabel } = require("./services/product");

//const products = require("./services/product");
const config = require("./services/config");
const database = require("./services/database");

async function main(){
    console.log("Carrinho de compras");

    // p.getFullName("408", "mousepad");
    // p.getProductLabel("mousepad");

   getFullName("1", "teclado");
   // console.log(config.devArea.production);
   // console.log(config.client);
   // database.connectToDataBase;
}

main();

