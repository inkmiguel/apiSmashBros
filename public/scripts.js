function abrirPersonaje() {
    const nombre = document.getElementById('personajeInput').value.trim();
    if (nombre) {
        window.open(`/Personajes/${encodeURIComponent(nombre)}`, '_blank');
    }
}
function abrirPersonajeDirecto() {
    const nombre = document.getElementById('personajeDirectInput').value.trim();
    if (nombre) {
        window.open(`http://localhost:3000/Personajes/${encodeURIComponent(nombre)}`, '_blank');
    }
}