const socket = io()
const saveProduct = (title, description) =>{
    socket.emit("cliente: nueva tarea", {
        title,
        description
    })
}

const deleteProduct = id =>{
    socket.emit("cliente:deleteProduct", id)
}

socket.on("server: newProduct", appendProduct)

socket.on("server:loadProducts", renderProducts)