function geekshubs(index) {
    let respuesta = "";
    for (let i=1; i<=index; i++){
        if(i%3 && i%5) 
            respuesta += i+"\n";
        else if(i%3===0 && i%5!=0)
            respuesta += "Geeks\n";
        else if(i%5===0 && i%3!=0)
            respuesta += "Hubs\n";
        else if(i%5===0 && i%3===0)
            respuesta += "GeeksHubs\n";
    }
    console.log(respuesta);
    return respuesta;
}
module.exports = geekshubs;
