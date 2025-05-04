function abrirPersonaje() {
    const nombre = document.getElementById('personajeInput').value.trim();
    if (nombre) {
        window.open(`/Personajes/${encodeURIComponent(nombre)}`, '_blank');
    }
}
function abrirPersonajeDirecto() {
    const nombre = document.getElementById('personajeDirectInput').value.trim();
    if (nombre) {
        fetch(`/Personajes/${encodeURIComponent(nombre)}`)
            .then(res => {
                if (!res.ok) throw new Error("No encontrado");
                return res.json();
            })
            .then(data => {
                const url = `/Personajes/${encodeURIComponent(nombre)}`;
                mostrarModal(
                    `<strong>JSON:</strong> <a href="${url}" target="_blank">${url}</a><br>
                     <strong>Nombre:</strong> ${data.name}<br>
                     <strong>Imagen:</strong><br>
                     <img src="${data.image || ''}" alt="${data.name}" style="max-width:100%;height:auto;"><br>
                     <strong>Juego:</strong> ${data.franchise || 'N/A'}<br>
                     <strong>Descripción:</strong> ${data.description || 'N/A'}`
                );
            })
            .catch(() => mostrarModal("Personaje no encontrado"));
    }
}

function mostrarModal(html) {
    document.getElementById('modalBody').innerHTML = html;
    document.getElementById('modal').style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('closeModal').onclick = function() {
        document.getElementById('modal').style.display = 'none';
    };
    window.onclick = function(event) {
        if (event.target == document.getElementById('modal')) {
            document.getElementById('modal').style.display = 'none';
        }
    };
});