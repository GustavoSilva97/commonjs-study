//all functions here deal with products
async function getFullName(codeId, productName){
    console.log("product: " + codeId + "--" + productName);
}

async function getProductLabel(productName){
    console.log("Product " + productName);
    await doBreakLine();
}

//hidden function: it's not exported
async function doBreakLine(){
    console.log("\n");
}

//exporting modules for other files with module.exports
module.exports = {
    getFullName,
    getProductLabel
};