const botonAgregar = document.getElementById('agregar')
const lista = document.getElementById('listaTareas')
    
botonAgregar.addEventListener('click', function(event) {
    event.preventDefault()
    let inputIngreso = document.getElementById('inputIngreso')

    if (inputIngreso.value !== '') {
        let li = document.createElement('li')
        li.innerHTML = inputIngreso.value
        let botonEliminar = document.createElement('button')
        botonEliminar.className = 'eliminar'
        botonEliminar.innerHTML = 'Eliminar'
        
        li.appendChild(botonEliminar)
        lista.appendChild(li)
        inputIngreso.value = ''

        li.addEventListener('click', function() {
            li.classList.toggle('tareaTachada')
        })
    
        botonEliminar.addEventListener('click', function() {
            li.classList.add('dnone')
        })
    }

   
})



