document.getElementById("searchButton").addEventListener("click", buscarPais);
        document.getElementById("clearButton").addEventListener("click", limpiarResultados); // Agregar evento para el botón de limpiar

        function buscarPais() {
            var countryName = document.getElementById("countryName").value;
            var url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true&fields=name,capital,languages&lang=es`;

            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('No se pudo obtener la información del país.');
                    }
                    return response.json();
                })
                .then(data => {
                    var country = data[0];
                    var capital = country.capital[0];
                    var languages = Object.values(country.languages).join(", "); // Obtener todos los idiomas

                    document.getElementById("capital").innerText = capital;
                    document.getElementById("language").innerText = languages;
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert("Error: " + error.message);
                });
        }

        function limpiarResultados() {
            // Limpiar los resultados
            document.getElementById("capital").innerText = "";
            document.getElementById("language").innerText = "";
            document.getElementById("countryName").value = ""; // Limpiar el campo de entrada del nombre del país
        }