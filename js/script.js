document.addEventListener('DOMContentLoaded', () => {
    // Espera a que el contenido del DOM se haya cargado completamente

    const form = document.getElementById('profile-form'); 
    // Obtiene el formulario de edición de perfil

    const editProfileLink = document.getElementById('editar-perfil-link'); 
    // Obtiene el enlace "Editar Perfil"

    const editProfileSection = document.getElementById('editar-perfil'); 
    // Obtiene la sección de edición de perfil

    form.addEventListener('submit', (event) => { 
        // Agrega un evento de escucha al formulario para cuando se envíe

        event.preventDefault(); 
        // Evita que el formulario se envíe de forma predeterminada y recargue la página

        const nombre = document.getElementById('nombre').value; 
        // Obtiene el valor del campo "nombre"

        const email = document.getElementById('email').value; 
        // Obtiene el valor del campo "email"

        const fechaNacimiento = document.getElementById('fecha-nacimiento').value; 
        // Obtiene el valor del campo "fecha de nacimiento"

        const ciudad = document.getElementById('ciudad').value; 
        // Obtiene el valor del campo "ciudad"

        const biografia = document.getElementById('biografia').value; 
        // Obtiene el valor del campo "biografía"

        if (!nombre || !email || !fechaNacimiento || !ciudad || !biografia) { 
            // Comprueba si alguno de los campos requeridos está vacío

            alert('Por favor, complete todos los campos requeridos.'); 
            // Muestra una alerta si hay campos vacíos

            return; 
            // Sale de la función sin continuar
        }

        if (!validateEmail(email)) { 
            // Comprueba si el email no tiene un formato válido

            alert('Por favor, introduzca un correo electrónico válido.'); 
            // Muestra una alerta si el email no es válido

            return; 
            // Sale de la función sin continuar
        }

        // Actualiza los elementos del perfil con los nuevos valores
        document.getElementById('display-nombre').innerText = nombre; 
        // Actualiza el campo "nombre" en la sección "Datos Básicos"

        document.getElementById('display-email').innerText = email; 
        // Actualiza el campo "email" en la sección "Datos Básicos"

        document.getElementById('display-fecha-nacimiento').innerText = fechaNacimiento; 
        // Actualiza el campo "fecha de nacimiento" en la sección "Datos Básicos"

        document.getElementById('display-ciudad').innerText = ciudad; 
        // Actualiza el campo "ciudad" en la sección "Datos Básicos"

        document.getElementById('display-biografia').innerText = biografia; 
        // Actualiza el campo "biografía" en la sección "Biografía"

        alert('Información guardada exitosamente!'); 
        // Muestra una alerta de éxito

        form.reset(); 
        // Resetea el formulario a su estado inicial

        editProfileSection.style.display = 'none'; 
        // Oculta la sección de edición de perfil
    });

    function validateEmail(email) { 
        // Define una función para validar el email

        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        // Expresión regular para validar el formato del email

        return re.test(String(email).toLowerCase()); 
        // Devuelve true si el email es válido, false si no lo es
    }

    editProfileLink.addEventListener('click', (event) => { 
        // Agrega un evento de escucha al enlace "Editar Perfil" para cuando se haga clic

        event.preventDefault(); 
        // Previene el comportamiento por defecto del enlace (navegar a otra página)

        editProfileSection.style.display = (editProfileSection.style.display === 'none' || editProfileSection.style.display === '') ? 'block' : 'none'; 
        // Alterna la visibilidad de la sección de edición de perfil entre 'none' y 'block'
    });

    // Código añadido para hacer que la barra de navegación se vuelva fija cuando se haga scroll
    const nav = document.querySelector('nav');
    const header = document.querySelector('header');
    const stickyOffset = header.offsetHeight;

    window.addEventListener('scroll', () => {
        if (window.scrollY >= stickyOffset) {
            nav.classList.add('sticky');
        } else {
            nav.classList.remove('sticky');
        }
    });
});
