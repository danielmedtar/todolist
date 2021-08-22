const botonAgregar = document.getElementById('agregar')
const lista = document.getElementById('listaTareas')
const inputIngreso = document.getElementById('inputIngreso')
let contadorTareas = 0
    
botonAgregar.addEventListener('click', function(event) {
    event.preventDefault()
    
    const tareaIngresada = inputIngreso.value

    if(tareaIngresada.length >= 1) {
        let li = document.createElement('li')
        li.innerHTML = `
            <p id="tarea${contadorTareas}">${tareaIngresada}</p>
            <button id="eliminar${contadorTareas}">Eliminar</button>
        `
        lista.appendChild(li)
    }
        
    inputIngreso.value = ''

    let parrafoItem = document.getElementById(`tarea${contadorTareas}`)

    parrafoItem.addEventListener('click', function() {
        parrafoItem.classList.toggle('tareaTachada')
    })
        
    let botonEliminar = document.getElementById(`eliminar${contadorTareas}`)
        
    botonEliminar.addEventListener('click', function() {
        botonEliminar.parentElement.remove()
    })

    contadorTareas++    
})



