const formularioAsignacion = document.getElementById('formulario-asignacion');
const asignacionesDiv = document.getElementById('asignaciones');

formularioAsignacion.addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const parte = document.getElementById('parte').value;
    agregarAsignacion(nombre, parte);
    formularioAsignacion.reset();
});

function agregarAsignacion(nombre, parte) {
    const asignacion = document.createElement('p');
    asignacion.textContent = `${nombre} - ${parte}`;
    asignacionesDiv.appendChild(asignacion);
}
