const socket = io()
const saveProduct = (title, description) =>{
    socket.emit("cliente: nueva tarea", {
        title,
        description
    })
}

socket.on("server: newProduct", appendProduct)

socket.on("server:loadProducts", renderProducts)