function hacerpeticion(albumId) {
    const http = new XMLHttpRequest();
    const url = `https://jsonplaceholder.typicode.com/albums/${albumId}`;

    http.onreadystatechange = function() {
        if (this.status == 200 && this.readyState == 4) {
            let res = document.getElementById("lista");
            res.innerHTML = ""; 
            const datos = JSON.parse(this.responseText);

            res.innerHTML += `<tr>
                <td class="columna1">${datos.userId}</td>
                <td class="columna2">${datos.id}</td>
                <td class="columna3">${datos.title}</td>
            </tr>`;
        }
    }

    http.open('GET', url, true);
    http.send();
}

document.getElementById('btnBuscar').addEventListener("click", function() {
    const albumId = document.getElementById("albumId").value;
    if (albumId.trim() !== "") {
        hacerpeticion(albumId);
    }
});

document.getElementById('btnLimpiar').addEventListener("click", function() {
    let res = document.getElementById("lista");
    res.innerHTML = "";
});
