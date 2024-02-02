document.getElementById("buscarBtn").addEventListener("click", buscarUsuario);

function buscarUsuario() {
    var userId = document.getElementById("userId").value.trim(); 
    if (!/^\d+$/.test(userId)) { 
        alert("Por favor, ingresa solo números para buscar.");
        return; 
    }
    
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
            document.getElementById("resultado").innerText = "Error: " + error.message;
        });
}

function mostrarDatosUsuario(usuario) {
    document.getElementById("nombre").innerText = usuario.name;
    document.getElementById("nombreUsuario").innerText = usuario.username;
    document.getElementById("calle").innerText = usuario.address.street;
    document.getElementById("numero").innerText = usuario.address.suite;
    document.getElementById("ciudad").innerText = usuario.address.city;
}
