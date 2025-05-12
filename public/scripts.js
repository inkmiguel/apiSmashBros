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
                document.getElementById('modalJson').innerHTML =
                    `<strong>JSON:</strong> <a href="/Personajes/${encodeURIComponent(nombre)}" target="_blank">/Personajes/${encodeURIComponent(nombre)}</a>`;
                document.getElementById('modalNombre').innerHTML =
                    `${data.name}`;
                document.getElementById('modalImagen').innerHTML =
                    `<img src="${data.image || ''}" alt="${data.name}">`;
                document.getElementById('modalFranquicia').innerHTML =
                    `<strong>Juego:</strong> ${data.franchise || 'N/A'}`;
                document.getElementById('modalDescripcion').innerHTML =
                    `<strong>Descripción:</strong> ${data.description || 'N/A'}`;
                document.getElementById('modal').style.display = 'block';
            })
            .catch(() => {
                document.getElementById('modalJson').innerHTML = '';
                document.getElementById('modalNombre').innerHTML = '';
                document.getElementById('modalImagen').innerHTML = '';
                document.getElementById('modalFranquicia').innerHTML = '';
                document.getElementById('modalDescripcion').innerHTML = 'Personaje no encontrado';
                document.getElementById('modal').style.display = 'block';
            });
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