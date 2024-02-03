document.getElementById("buscarBtn").addEventListener("click", buscarUsuario);

function buscarUsuario() {
    var userId = document.getElementById("userId").value;
    var url = `https://jsonplaceholder.typicode.com/users/${userId}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo obtener la información del usuario.');
            }
            return response.json();
        })
        .then(data => {
            mostrarDatosUsuario(data);
        })
        .catch(error => {
            console.error('Error:', error);
            alert("Error: " + error.message);
        });
}

function mostrarDatosUsuario(usuario) {
    document.getElementById("nombre").value = usuario.name;
    document.getElementById("nombreUsuario").value = usuario.username;
    document.getElementById("calle").value = usuario.address.street;
    document.getElementById("numero").value = usuario.address.suite;
    document.getElementById("ciudad").value = usuario.address.city;
}
