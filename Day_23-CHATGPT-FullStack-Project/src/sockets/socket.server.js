const { Server, Socket } = require("socket.io");
function initSocketServer(httpserver){
    const io = new Server(httpserver,{})
    io.on("connection",(Socket)=>{
        console.log("new socket connection",Socket.id);
        
    })
}
module.exports = initSocketServer