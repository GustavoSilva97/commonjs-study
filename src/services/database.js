//export default

//to an default export with the async property we have to write async between = and ()
exports.connectToDataBase = async (dataName) =>{
    console.log("Connecting to bank: " + dataName);
}

exports.disconnectDataBase = async () =>{
    //lógica
    console.log("desconectando...");
}
