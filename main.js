const nombre = document.querySelector('.nombre')
const entrega = document.querySelector('.entrega')
const seña = document.querySelector('.seña')
const pedido = document.querySelector('.pedido')
const direccion = document.querySelector('.direccion')
const btnAgregarTarea = document.querySelector('.btn-agregar-tareas')
const ListadoTareas = document.querySelector('.Listado-Tareas')
const db = window.localStorage


btnAgregarTarea.onclick = () => {
    let contacto = {
        id: Math.random(1, 100),
        nombre: nombre.value,
        entrega: entrega.value,
        seña: seña.value,
        pedido: pedido.value,
        direccion: direccion.value,
       

    }
    guardarContacto(db, contacto)
}
cargarContactos(db, ListadoTareas)