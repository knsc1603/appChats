// Espera a que todo el contenido del DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    // Botón para guardar los cambios del perfil
    const btnGuardar = document.getElementById("btnGuardarPerfil");

    // Inputs del formulario de edición
    const inputNombre = document.getElementById("inputNombre");
    const inputTelefono = document.getElementById("inputTelefono");
    const inputCorreo = document.getElementById("inputCorreo");
    const inputBiografia = document.getElementById("inputBiografia");

    // Elementos donde se muestra la información del perfil
    const nombrePerfil = document.getElementById("nombrePerfil");
    const telefonoPerfil = document.getElementById("telefonoPerfil");
    const correoPerfil = document.getElementById("correoPerfil");
    const bioPerfil = document.getElementById("bioPerfil");

    // Elementos relacionados con la foto de perfil
    const inputFoto = document.getElementById("inputFoto");
    const btnEditarFoto = document.getElementById("btnEditarFoto");
    const fotoPerfil = document.getElementById("fotoPerfil");

    // Carga los datos del perfil desde localStorage y los muestra en pantalla
    function cargarPerfil() {
        const datos = JSON.parse(localStorage.getItem("perfilUsuario"));
        if (datos) {
            // Mostrar los datos en la vista de perfil
            nombrePerfil.textContent = datos.nombre || "";
            telefonoPerfil.innerHTML = `<i class="bi bi-telephone"></i> ${datos.telefono || ""}`;
            correoPerfil.innerHTML = `<i class="bi bi-envelope"></i> ${datos.correo || ""}`;
            bioPerfil.innerHTML = `<i class="bi bi-info-circle"></i> ${datos.biografia || ""}`;
            fotoPerfil.src = datos.foto || "https://via.placeholder.com/100";

            // Rellenar los inputs del formulario de edición
            inputNombre.value = datos.nombre || "";
            inputTelefono.value = datos.telefono || "";
            inputCorreo.value = datos.correo || "";
            inputBiografia.value = datos.biografia || "";
        }
    }

    // Al hacer clic en "Guardar cambios", guarda la info en localStorage y actualiza el perfil
    btnGuardar.addEventListener("click", function () {
        const datos = {
            nombre: inputNombre.value,
            telefono: inputTelefono.value,
            correo: inputCorreo.value,
            biografia: inputBiografia.value,
            foto: fotoPerfil.src // usa la imagen actual mostrada
        };

        // Guarda los datos en el almacenamiento local
        localStorage.setItem("perfilUsuario", JSON.stringify(datos));
        cargarPerfil(); // Refresca los datos mostrados

        // Cierra el modal después de guardar
        const modal = bootstrap.Modal.getInstance(document.getElementById("modalEditarPerfil"));
        modal.hide();
    });

    // Al hacer clic en el botón del lápiz, simula clic en el input de archivo
    btnEditarFoto.addEventListener("click", () => inputFoto.click());

    // Cuando el usuario selecciona una nueva foto
    inputFoto.addEventListener("change", function () {
        const archivo = inputFoto.files[0];
        if (archivo) {
            const lector = new FileReader();
            lector.onload = function (e) {
                // Muestra la imagen seleccionada
                fotoPerfil.src = e.target.result;

                // Guarda la imagen en localStorage
                const datos = JSON.parse(localStorage.getItem("perfilUsuario")) || {};
                datos.foto = e.target.result;
                localStorage.setItem("perfilUsuario", JSON.stringify(datos));
            };
            lector.readAsDataURL(archivo); // Convierte la imagen a base64
        }
    });

    // Carga automáticamente el perfil cuando se abre la página
    cargarPerfil();
});
