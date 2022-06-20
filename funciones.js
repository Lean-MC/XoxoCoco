const guardarContacto = (db, contacto) => {
    db.setItem(contacto.id, JSON.stringify(contacto))
    window.location.href = '/'

}



const cargarContactos = (db, parentNode) => {
    let claves = Object.keys(db)
    console.log(claves)
    for (claves of claves) {
        let contacto = JSON.parse(db.getItem(claves))
        crearContacto(parentNode, contacto, db)

    }
}

const crearContacto = (parentNode, contacto, db) => {
    let divContacto = document.createElement('div')
    let nombreContacto = document.createElement('h3')
    let entregaContacto = document.createElement('p')
    let direccionContacto = document.createElement('p')
    let pedidoContacto = document.createElement('p')
    let señaContacto = document.createElement('p')
    let iconoBorrar = document.createElement('span')
    
    
    nombreContacto.innerHTML = contacto.nombre
    entregaContacto.innerHTML = contacto.entrega
    direccionContacto.innerHTML = contacto.direccion
    pedidoContacto.innerHTML = contacto.pedido
    señaContacto.innerHTML = contacto.seña
    iconoBorrar.innerHTML = ' delete_forever'
    
    

    divContacto.classList.add('Tarea')
    iconoBorrar.classList.add('material-icons', 'icono')
    
    iconoBorrar.onclick = () => {
        db.removeItem(contacto.id)
        window.location.href = '/'

    }


    divContacto.appendChild(nombreContacto)
    divContacto.appendChild(entregaContacto)
    divContacto.appendChild(direccionContacto)
    divContacto.appendChild(pedidoContacto)
    divContacto.appendChild(señaContacto)
    divContacto.appendChild(iconoBorrar)
   

    parentNode.appendChild(divContacto)


}
