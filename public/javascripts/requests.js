const editFunc = (id) => {
    document.getElementById("editModalInput").value = id
}

const deleteFunc = (id) => {
    document.getElementById("deleteModalInput").value = id
}


document.getElementById("addModal").addEventListener("submit", (e) => {
    e.preventDefault()

    const formData = new FormData()

    const full_name = document.getElementById("full_name_add").value
    const direction = document.getElementById("direction_add").value
    const level = document.getElementById("level_add").value
    const status = document.getElementById("status_add").value
    const image = document.getElementById("image_add")

    formData.append('full_name', full_name)
    formData.append('direction', direction)
    formData.append('level', level)
    formData.append('status', status)
    formData.append('image', image.files[0])

    fetch("/create", {
        method: "POST",
        body: formData
    }).then(res => {
        return res.json()
    }).then(res => {
        window.location.replace("/")
    }).catch(error => {
        console.log(error)
    })
})


document.getElementById("editModal").addEventListener("submit", (e) => {
    e.preventDefault()

    const formData = new FormData()

    const id = document.getElementById("editModalInput").value 
    const full_name = document.getElementById("full_name_edit").value
    const direction = document.getElementById("direction_edit").value
    const level = document.getElementById("level_edit").value
    const status = document.getElementById("status_edit").value
    const image = document.getElementById("image_edit")

    formData.append('full_name', full_name)
    formData.append('direction', direction)
    formData.append('level', level)
    formData.append('status', status)
    formData.append('image', image.files[0])


    fetch(`/update/${id}`, {
        method: "PUT",
        body: formData
    }).then(res => {
        return res.json()
    }).then(res => {
        window.location.replace("/")
    }).catch(res => {
        console.log(error)
    })
})


document.getElementById("deleteModal").addEventListener("submit", (e) => {
    e.preventDefault()
    const id = document.getElementById("deleteModalInput").value
    
    fetch(`/delete/${id}`, {
        method: "DELETE"
    }).then(res => {
        return res.json()
    }).then(res => {
        window.location.replace("/")
    })
})