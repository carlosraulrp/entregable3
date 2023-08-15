const notesList = document.getElementById("notes")

const vistaProducto = product =>{
    const div = document.createElement('div')
    div.innerHTML += `
    <div class = "card card-body rounded-0 mb-2">
        <div class = "d-flex justify-content-between">
            <h1 class = "h3 card-title">${product.title}</h1>
            <div>
                <button class = "btn btn-danger delete rounded-0" data-id="${product.id}">borrar</button>
                
            
            </div>
        </div>
        <p>
            ${product.description}
        </p>
    </div>

    `
    const btnDelete = div.querySelector('.delete')
    btnDelete.addEventListener("click", () =>{
        deleteProduct(btnDelete.dataset.id)
    })
    return div
}

const renderProducts = products =>{
    notesList.innerHTML = ""
    products.map(producto => {
        notesList.append(vistaProducto(producto))
    })

 
}

const appendProduct = product =>{
    notesList.append(vistaProducto(product))
}