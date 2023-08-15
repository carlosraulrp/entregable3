

const noteForm = document.getElementById("noteForm")
const title = document.getElementById("title")
const description = document.getElementById("description")

noteForm.addEventListener("submit", e=>{
    e.preventDefault()
    saveProduct(title.value, description.value)

})


