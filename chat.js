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

    //lista de contactos
    const contactos = [
    {
        nombre: "María Fernández",
        telefono: "+54 9 11 3456-7890",
        correo: "maria.fernandez@gmail.com",
        descripcion: "Diseñadora gráfica apasionada por el arte digital.",
        imagen: "https://randomuser.me/api/portraits/women/1.jpg "
    },
    {
        nombre: "Javier Morales",
        telefono: "+54 9 11 4567-8901",
        correo: "javier.morales@gmail.com",
        descripcion: "Ingeniero de software especializado en apps móviles.",
        imagen: "https://randomuser.me/api/portraits/men/2.jpg "
    },
    {
        nombre: "Laura Domínguez",
        telefono: "+54 9 11 5678-9012",
        correo: "laura.dominguez@gmail.com",
        descripcion: "Marketing digital, amante del café y viajes.",
        imagen: "https://randomuser.me/api/portraits/women/3.jpg "
    },
    {
        nombre: "Carlos Mendoza",
        telefono: "+54 9 11 6789-0123",
        correo: "carlos.mendoza@gmail.com",
        descripcion: "Emprendedor y consultor de startups tecnológicas.",
        imagen: "https://randomuser.me/api/portraits/men/4.jpg "
    },
    {
        nombre: "Sofía Torres",
        telefono: "+54 9 11 7890-1234",
        correo: "sofia.torres@gmail.com",
        descripcion: "Estudiante de UX/UI design y entusiasta de la tecnología.",
        imagen: "https://randomuser.me/api/portraits/women/5.jpg "
    },
    {
        nombre: "Daniel Rojas",
        telefono: "+54 9 11 8901-2345",
        correo: "daniel.rojas@gmail.com",
        descripcion: "Desarrollador backend con amor por los videojuegos.",
        imagen: "https://randomuser.me/api/portraits/men/6.jpg "
    },
    {
        nombre: "Andrea Ramírez",
        telefono: "+54 9 11 9012-3456",
        correo: "andrea.ramirez@gmail.com",
        descripcion: "Fotógrafa profesional y viajera empedernida.",
        imagen: "https://randomuser.me/api/portraits/women/7.jpg "
    },
    {
        nombre: "Alejandro Cruz",
        telefono: "+54 9 11 0123-4567",
        correo: "alejandro.cruz@gmail.com",
        descripcion: "Analista de datos con interés en inteligencia artificial.",
        imagen: "https://randomuser.me/api/portraits/men/8.jpg "
    },
    {
        nombre: "Valeria Gómez",
        telefono: "+54 9 11 1234-5678",
        correo: "valeria.gomez@gmail.com",
        descripcion: "Docente universitaria y escritora en sus tiempos libres.",
        imagen: "https://randomuser.me/api/portraits/women/9.jpg "
    },
    {
        nombre: "Miguel Sánchez",
        telefono: "+54 9 11 2345-6789",
        correo: "miguel.sanchez@gmail.com",
        descripcion: "Freelancer en desarrollo web full stack.",
        imagen: "https://randomuser.me/api/portraits/men/10.jpg "
    },
    {
        nombre: "Lucía Ortega",
        telefono: "+54 9 11 3456-7891",
        correo: "lucia.ortega@gmail.com",
        descripcion: "Nutrióloga comprometida con estilos de vida saludables.",
        imagen: "https://randomuser.me/api/portraits/women/11.jpg "
    },
    {
        nombre: "Germán Vargas",
        telefono: "+54 9 11 4567-8902",
        correo: "german.vargas@gmail.com",
        descripcion: "Product manager en una empresa de fintech.",
        imagen: "https://randomuser.me/api/portraits/men/12.jpg "
    },
    {
        nombre: "Daniela Medina",
        telefono: "+54 9 11 5678-9013",
        correo: "daniela.medina@gmail.com",
        descripcion: "Arquitecta y fanática del diseño sostenible.",
        imagen: "https://randomuser.me/api/portraits/women/13.jpg "
    },
    {
        nombre: "Sebastián Ríos",
        telefono: "+54 9 11 6789-0124",
        correo: "sebastian.rios@gmail.com",
        descripcion: "Músico independiente y productor de audio.",
        imagen: "https://randomuser.me/api/portraits/men/14.jpg "
    },
    {
        nombre: "Camila López",
        telefono: "+54 9 11 7890-1235",
        correo: "camila.lopez@gmail.com",
        descripcion: "Licenciada en psicología y terapeuta infantil.",
        imagen: "https://randomuser.me/api/portraits/women/15.jpg "
    },
    {
        nombre: "Martín Herrera",
        telefono: "+54 9 11 8901-2346",
        correo: "martin.herrera@gmail.com",
        descripcion: "Chef y dueño de un pequeño restaurante en Buenos Aires.",
        imagen: "https://randomuser.me/api/portraits/men/16.jpg "
    },
    {
        nombre: "Florencia Díaz",
        telefono: "+54 9 11 9012-3457",
        correo: "florencia.diaz@gmail.com",
        descripcion: "Bióloga marina y activista ambiental.",
        imagen: "https://randomuser.me/api/portraits/women/17.jpg "
    },
    {
        nombre: "Nicolás Silva",
        telefono: "+54 9 11 0123-4568",
        correo: "nicolas.silva@gmail.com",
        descripcion: "Redactor creativo y community manager freelance.",
        imagen: "https://randomuser.me/api/portraits/men/18.jpg "
    },
    {
        nombre: "Agustina Ponce",
        telefono: "+54 9 11 1234-5679",
        correo: "agustina.ponce@gmail.com",
        descripcion: "Abogada especializada en derecho digital y privacidad.",
        imagen: "https://randomuser.me/api/portraits/women/19.jpg "
    },
    {
        nombre: "Tomás Navarro",
        telefono: "+54 9 11 2345-6780",
        correo: "tomas.navarro@gmail.com",
        descripcion: "Investigador en energías renovables y medio ambiente.",
        imagen: "https://randomuser.me/api/portraits/men/20.jpg "
    }
    ];

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
    
    function crearListaDeContactos(contactos) {
    const contenedor = document.querySelector("#contactoScroll .d-grid");

    // Limpiar contenido previo
    contenedor.innerHTML = "";

    contactos.forEach(contacto => {
        // Crear el botón principal
        const botonChat = document.createElement("button");
        botonChat.classList.add("btn", "btn-dark", "rounded-3", "d-flex", "align-items-center", "gap-2");

        // Crear el div del contacto
        const globito = document.createElement("div");
        globito.classList.add(
            "globito",
            "overflow-hidden",
            "flex-shrink-0",
            "border",
            "border-secondary-subtle",
            "bg-white",
            "rounded-circle",
            "d-flex",
            "justify-content-center",
            "align-items-center"
        );

        // Crear la imagen
        const img = document.createElement("img");
        img.setAttribute("src", contacto.imagen);
        img.setAttribute("alt", "perfil");
        img.classList.add(
            "img-fluid",
            "globito-img",
            "w-100",
            "h-100",
            "object-fit-cover",
            "rounded-5"
        );

        // Añadir la imagen 
        globito.appendChild(img);

        // Añadir globito al botón
        botonChat.appendChild(globito);

        // Añadir el nombre del contacto como texto
        const nombre = document.createTextNode(contacto.nombre);
        botonChat.appendChild(nombre);

        // Añadir el botón completo al contenedor
        contenedor.appendChild(botonChat);

        botonChat.addEventListener("click", () => mostrarInfoContacto(contacto));
    });
}
    function mostrarInfoContacto(contacto) {
        //Informacion en el header
        document.getElementById("fotoContacto-Header").src = contacto.imagen || "";
        document.getElementById("nombreContacto-Header").textContent = contacto.nombre;
        //Informacion del contacto
        document.getElementById("fotoContacto").src = contacto.imagen || "";
        document.getElementById("nombreContacto").textContent = contacto.nombre || "Sin nombre";
        document.getElementById("telefonoContacto").innerHTML = `<i class="bi bi-telephone"></i> ${contacto.telefono || ""}`;
        document.getElementById("correoContacto").innerHTML = `<i class="bi bi-envelope"></i> ${contacto.correo || ""}`;
        document.getElementById("descripcionContacto").innerHTML = `<i class="bi bi-info-circle"></i> ${contacto.descripcion || ""}`;
    }
    // Carga automáticamente el perfil cuando se abre la página
    cargarPerfil();
    crearListaDeContactos(contactos);
});
