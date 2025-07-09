   // VARIABLES DE PERFIL
    const btnGuardar = document.getElementById("btnGuardarPerfil"); // Botón para guardar los cambios del perfi
    // Inputs del formulario de edición
    const inputNombre = document.getElementById("inputNombre");
    const inputTelefono = document.getElementById("inputTelefono");
    const inputCorreo = document.getElementById("inputCorreo");
    const inputBiografia = document.getElementById("inputBiografia");
    const inputFoto = document.getElementById("inputFoto");
    const btnEditarFoto = document.getElementById("btnEditarFoto");
    const fotoPerfil = document.getElementById("fotoPerfil");
    const nombrePerfil = document.getElementById("nombrePerfil");
    const telefonoPerfil = document.getElementById("telefonoPerfil");
    const correoPerfil = document.getElementById("correoPerfil");
    const bioPerfil = document.getElementById("bioPerfil");

    // VARIABLES DE CHAT
    const inputMensaje = document.getElementById("inputMensaje");
    const btnEnviar = document.getElementById("btnEnviar");
    const contenedorMensajes = document.getElementById("chatMensajes");
    const respuestasAutomaticas = [
        "¡Recibido! En breve te contesto.",
        "Gracias por escribir 😊",
        "Estoy procesando tu mensaje...",
        "¡Qué interesante! Ahora lo leo.",
        "Déjame un momento y te doy una respuesta.",
        "¡Ahí voy con mi respuesta!",
        "Voy a pensarlo bien antes de responder 💭",
        "¡Genial lo que me compartiste!",
        "¡Mensaje recibido con éxito!",
        "Estoy en eso, gracias por tu paciencia 🙌"
    ];

    // LISTA DE CONTACTOS
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

    let contactoActivo = null;

    // PERFIL - Carga los datos del perfil desde localStorage y los muestra en pantalla
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
        cargarPerfil();
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
                fotoPerfil.src = e.target.result; // Muestra la imagen seleccionada
                const datos = JSON.parse(localStorage.getItem("perfilUsuario")) || {}; // Guarda la imagen en localStorage
                datos.foto = e.target.result;
                localStorage.setItem("perfilUsuario", JSON.stringify(datos));
            };
            lector.readAsDataURL(archivo); // Convierte la imagen a base64
        }
    });

    // LOGICA DE CONTACTOS 
    function crearListaDeContactos(contactos) {
        const contenedor = document.querySelector("#contactoScroll .d-grid");
        contenedor.innerHTML = ""; // Limpiar contenido previo

        contactos.forEach(contacto => {
            // Crear el botón principal
            const botonChat = document.createElement("button");
            botonChat.classList.add("btn", "btn-dark", "rounded-3", "d-flex", "align-items-center", "gap-2");

            // Crear el div del contacto
            const globito = document.createElement("div");
            globito.classList.add("globito", "overflow-hidden", "flex-shrink-0", "border", "border-secondary-subtle", "bg-white", "rounded-circle", "d-flex", "justify-content-center", "align-items-center");
            
            const img = document.createElement("img");
            img.setAttribute("src", contacto.imagen);
            img.setAttribute("alt", "perfil");
            img.classList.add("img-fluid", "globito-img", "w-100", "h-100", "object-fit-cover", "rounded-5");

            globito.appendChild(img);
            botonChat.appendChild(globito);
            botonChat.appendChild(document.createTextNode(contacto.nombre));
            contenedor.appendChild(botonChat);

            botonChat.addEventListener("click", () => mostrarInfoContacto(contacto));
        });
    }

    // LÓGICA DEL CHAT
    // Guardar mensaje en localStorage por contacto
    function guardarMensajeContacto(correo, tipo, texto) {
        const clave = `chat_${correo}`; // Cada contacto tiene una clave única con su correo
        const historial = JSON.parse(localStorage.getItem(clave)) || []; // Carga mensajes anteriores
        historial.push({ tipo, texto }); // Agrega el nuevo mensaje (del usuario o respuesta)
        localStorage.setItem(clave, JSON.stringify(historial)); // Guarda actualizado en localStorage
    }

    // Renderiza (muestra) un mensaje en el DOM, sin guardarlo
    function renderizarMensaje(tipo, texto) {
        if (!contactoActivo) return;  // Crea el contenedor del mensaje

        // Aplica estilos según si es mensaje del usuario o respuesta
        const div = document.createElement("div");
        div.classList.add(
            tipo === "usuario" ? "bg-light" : "bg-secondary",
            tipo === "usuario" ? "text-dark" : "text-white", "rounded-pill", "px-3", "py-2",
            tipo === "usuario" ? "align-self-end" : "align-self-start"
        );
        div.textContent = texto; // Añade el texto al mensaje
        contenedorMensajes.appendChild(div); // Lo agrega al área de mensajes
        contenedorMensajes.scrollTop = contenedorMensajes.scrollHeight; // Auto scroll al final
    }

    // Agrega un mensaje al DOM Y lo guarda en localStorage (solo para mensajes nuevos)
    function agregarMensajeAlChat(tipo, texto) {
        renderizarMensaje(tipo, texto); // Lo muestra en pantalla
        guardarMensajeContacto(contactoActivo.correo, tipo, texto); // Lo guarda en localStorage
    }

    //Cargar el historial de chat del contacto actual
    function cargarChatContacto(correo) {
        contenedorMensajes.innerHTML = ""; // Limpia los mensajes actuales
        const clave = `chat_${correo}`; // Obtiene la clave única del contacto
        const historial = JSON.parse(localStorage.getItem(clave)) || [];  // Obtiene historial de mensajes
        historial.forEach(m => renderizarMensaje(m.tipo, m.texto)); // Muestra cada mensaje en pantalla SIN VOLVER A GUARDARLO
    }

    // Cargar la información de un contacto y su chat
    function mostrarInfoContacto(contacto) {
        contactoActivo = contacto; // contacto como contacto activo

        // Actualiza la cabecera del chat - variable agrupando los get
        document.getElementById("fotoContacto-Header").src = contacto.imagen || "";
        document.getElementById("nombreContacto-Header").textContent = contacto.nombre;

        // Actualiza el panel lateral derecho con info detallada
        document.getElementById("fotoContacto").src = contacto.imagen || "";
        document.getElementById("nombreContacto").textContent = contacto.nombre || "Sin nombre";
        document.getElementById("telefonoContacto").innerHTML = `<i class="bi bi-telephone"></i> ${contacto.telefono || ""}`;
        document.getElementById("correoContacto").innerHTML = `<i class="bi bi-envelope"></i> ${contacto.correo || ""}`;
        document.getElementById("descripcionContacto").innerHTML = `<i class="bi bi-info-circle"></i> ${contacto.descripcion || ""}`;

        cargarChatContacto(contacto.correo); // Carga los mensajes del contacto
    }

    //Enviar mensaje y actualizar lista de contactos
    function enviarMensaje() {
        const mensaje = inputMensaje.value.trim(); // Obtiene el mensaje escrito
        if (!mensaje || !contactoActivo) return; // Si está vacío o no hay contacto, no hace nada

        agregarMensajeAlChat("usuario", mensaje); // Muestra el mensaje en el chat
        inputMensaje.value = ""; // Limpia el input

        // Mover el contacto al principio y actualizar la lista
        const index = contactos.findIndex(c => c.correo === contactoActivo.correo);
        if (index > 0) {
            const [movido] = contactos.splice(index, 1); // Remueve el contacto del medio
            contactos.unshift(movido); // Lo pone al principio
            crearListaDeContactos(contactos); // Vuelve a renderizar los botones
        }

        // Simula una respuesta automática con delay de 1 segundo
        setTimeout(() => {
            const respuesta = respuestasAutomaticas[Math.floor(Math.random() * respuestasAutomaticas.length)];
            agregarMensajeAlChat("respuesta", respuesta);
        }, 1000);
    }

    //Eventos de botón e input
    btnEnviar.addEventListener("click", enviarMensaje);
    inputMensaje.addEventListener("keydown", function (e) {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            enviarMensaje();
        }
    });

    // INICIALIZACIÓN - Carga automáticamente el perfil cuando se abre la página
    cargarPerfil();
    crearListaDeContactos(contactos);

    // Mostrar el chat del primer contacto al iniciar
    if (contactos.length > 0) {
        mostrarInfoContacto(contactos[0]);
    }


    // BÚSQUEDA DE CONTACTOS 
    document.getElementById("inputBuscar").addEventListener("input", function () {
        const texto = this.value.toLowerCase();

        const contactosFiltrados = contactos.filter(c =>
            c.nombre.toLowerCase().includes(texto)
        );

        crearListaDeContactos(contactosFiltrados);
    });