// Práctica 02 uso del objeto fetch
// manjando promesas
// manejando await

llamandoFetch = ()=>{
    const url = "https://jsonplaceholder.typicode.com/todos"
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(data => mostrarTodos(data))
    .catch((reject)=> {
        console.log("surgio un error " + reject)
    });
}

const mostrarTodos=(data)=>{
    console.log(data)
    const res = document.getElementById('respuesta');
    res.innerHTML = "";

    for(let item of data){
        res.innerHTML+=item.userId + " ," + item.id + " ," + item.title + " " + item.completed + "<br>";

    }
}

//USANDO AWAIT

const llamandoAwait = async()=>{
    try{
        const url = "https://jsonplaceholder.typicode.com/todos"
        const respuesta = await fetch(url)
        const data = await respuesta.json()
        mostrarTodos(data);

    }
    catch(error){
        console.log("surgio un error"+error)
    }
}

//CONFIGURAR BOTONES BOTONES
document.getElementById('btnCargarA').addEventListener("click", function(){
   llamandoFetch();
});
document.getElementById("btnCargarP").addEventListener('click', function(){
    llamandoFetch();
})
document.getElementById('btnLimpiar').addEventListener("click", function(){
    let res = document.getElementById("respuesta");
    res.innerHTML="";
});