const express = require('express')
const http = require('http')
const socketIo = require('socket.io')
const path = require('path')
const handlebars = require('express-handlebars')
const {Server} = require('socket.io')
const { v4: uuidv4 } = require('uuid')
const PORT = 8080

let products = []

const app = express()
const server = http.createServer(app)
const io = new Server(server)



app.use(express.static(__dirname + '/public'))

io.on('connection', (socket) =>{
    console.log("nueva conexion",socket.id)
    socket.emit("server:loadProducts", products)
    socket.on("cliente: nueva tarea", (newProduct) =>{
       const product = {...newProduct, id: uuidv4()}
       products.push(product)
       socket.emit("server: newProduct", product)

    })

    socket.on("cliente:deleteProduct", id =>{
       products= products.filter((p) => p.id !== id)
       console.log(products)
       socket.emit("server:loadProducts", products)
    })

    

    
}) 






server.listen(PORT, ()=>{
    console.log(`server running on port: ${PORT}`)
})