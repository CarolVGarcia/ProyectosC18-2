function hacerpeticion(){
    const http = new XMLHttpRequest;
    const url = "https://jsonplaceholder.typicode.com/albums";

    //Validar la respuesta

    http.onreadystatechange = function(){
        if(this.status ==200 && this.readyState ==4){
            //aqui se dibuja la pagina
            let res = document.getElementById("lista");
            const json = JSON.parse(this.responseText);

            //CICLO PARA IR TOMANDO CADA UNO DE LOS REGISTROS

            for(const datos of json){
                res.innerHTML +='<tr> <td class="columna1">'+ datos.userId + '</td>'
                 +'<td class="columna2">'+ datos.id + '</td>'
                 +'<td class="columna3">'+ datos.title + '</td> </tr>'
            }

            res.innerHTML += "</tbody>"


        }
    }

    http.open('GET',url,true);
    http.send();

}
function buscarDatos() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const http = new XMLHttpRequest();
    const url = "https://jsonplaceholder.typicode.com/albums";

    http.onreadystatechange = function () {
        if (this.status == 200 && this.readyState == 4) {
            let res = document.getElementById("lista");
            const json = JSON.parse(this.responseText);

            res.innerHTML = "<tbody>"; // Limpiar tabla antes de mostrar los resultados filtrados

            for (const datos of json) {
                if (datos.title.toLowerCase().includes(searchTerm)) {
                    res.innerHTML += '<tr> <td class="columna1">' + datos.userId + '</td>' +
                        '<td class="columna2">' + datos.id + '</td>' +
                        '<td class="columna3">' + datos.title + '</td> </tr>';
                }
            }

            res.innerHTML += "</tbody>";
        }
    };

    http.open('GET', url, true);
    http.send();
}
//LIMPIAR
document.getElementById('btnLimpiar').addEventListener("click", function(){
    let res = document.getElementById("respuesta");
    res.innerHTML="";
});