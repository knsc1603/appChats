    // Referencias a elementos del formulario
    let emailInput = document.getElementById("email");
    let passwordInput = document.getElementById("password");
    let btnIniciar = document.getElementById("enviar");
    let btnRegistrar = document.getElementById("login");
    let togglePassword = document.getElementById("togglePassword");

  // Función para mostrar u ocultar la contraseña al hacer clic en el ícono del ojo
    togglePassword.addEventListener("click", function () {
        let isHidden = passwordInput.type === "password";
        passwordInput.type = isHidden ? "text" : "password";
        togglePassword.classList.toggle("fa-eye");
        togglePassword.classList.toggle("fa-eye-slash");
    });

  // Validación de formato del correo (estructura básica con arroba y punto)
    function validarEmail(correo) {
        let expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return expresion.test(correo);
    }

  // Validación de fortaleza de contraseña
    function validarPassword(password) {
        let minimoOcho = /.{8,}/;
        let contieneMayuscula = /[A-Z]/;
        let contieneNumero = /[0-9]/;
        return minimoOcho.test(password) && contieneMayuscula.test(password) && contieneNumero.test(password);
    }

  // Registro de nuevo usuario
    btnRegistrar.addEventListener("click", function (e) {
        e.preventDefault();

        let email = emailInput.value.trim();
        let password = passwordInput.value;

        // Validar campos vacíos
        if (!email || !password) {
            alert("Por favor completá ambos campos para registrarte.");
            return;
        }

    // Validar formato de correo
        if (!validarEmail(email)) {
            alert("Ingresá un correo electrónico válido.");
            return;
        }

        // Validar requisitos de contraseña
        if (!validarPassword(password)) {
            alert("La contraseña debe tener al menos 8 caracteres, una letra mayúscula y un número.");
            return;
        }

        // Guardar el usuario en localStorage
        let usuario = { email: email, password: password };
        localStorage.setItem("usuario", JSON.stringify(usuario));
        alert("Cuenta registrada con éxito. Ahora podés iniciar sesión.");
    });

    // Inicio de sesión
    btnIniciar.addEventListener("click", function (e) {
        e.preventDefault();

        let email = emailInput.value.trim();
        let password = passwordInput.value;
        let datosGuardados = JSON.parse(localStorage.getItem("usuario"));

        // Verificar si existe usuario registrado
        if (!datosGuardados) {
            alert("No hay ninguna cuenta registrada. Registrate primero.");
            return;
        }

        // Comparar credenciales
        if (email === datosGuardados.email && password === datosGuardados.password) {
            alert("Inicio de sesión exitoso. Redirigiendo a HablApp...");
            window.location.href = "chat.html";
        } else {
            alert("Correo o contraseña incorrectos. Intentá nuevamente.");
        }
    });

  // Autocompletar el campo de correo si ya fue almacenado anteriormente
    let savedData = JSON.parse(localStorage.getItem("usuario"));
    if (savedData && savedData.email) {
        emailInput.value = savedData.email;
    }