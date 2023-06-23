const inputId = document.getElementById("inputId")
const tableBody = document.getElementById("tableBody")
const inputName = document.getElementById("inputName")
const inputEmail = document.getElementById("inputEmail")
const inputPass = document.getElementById("inputPass")
const inputAge = document.getElementById("inputAge")


const btnAgregar = document.getElementsByClassName("btn-agregar")
const btnEliminar = document.getElementsByClassName("btn-eliminar")
const btnActualizar = document.getElementsByClassName("btn-details-client")
const btnModalActualizar = document.getElementsByClassName("btn-actualizar")


function saveClient() {
    btnAgregar[0].style.display = 'block'
    btnAgregar[1].style.display = 'none'
    btnModalActualizar[0].style.display = 'none'
}

function detailsClient() {
    btnAgregar[0].style.display = 'none'
    btnEliminar[0].style.display = 'block'
    btnModalActualizar[0].style.display = 'block'
}


function create() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "name": "Agustin Parra",
        "email": "agustin@gmail.com",
        "password": "agustin123",
        "age": 18
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("localhost:80/api/Client/save", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

}

function getAll() {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("http://localhost:80/api/Client/all", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

function getById() {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("localhost:80/api/Client/"+inputId, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

}

function deleteById() {
    var requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
      };
      
      fetch("localhost:80/api/Client/1", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

function updateById() {

}


getAll()
