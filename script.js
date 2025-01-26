// Selección de elementos
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

// Evento de clic para mostrar/ocultar el menú móvil
menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden'); 
    mobileMenu.classList.toggle('flex');  
});