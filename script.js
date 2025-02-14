window.onload = function() {
    const sobre = document.getElementById('sobre');

    // Detener la sacudida y activar la lluvia de corazones al hacer clic en el sobre
    sobre.addEventListener('click', function() {
        // Detener la animación de sacudida
        sobre.style.animation = 'none';

        // Ocultar el sobre con una animación
        sobre.style.opacity = '0';
        setTimeout(() => {
            sobre.style.display = 'none';
        }, 300);

        // Iniciar la lluvia de corazones y el beso volador
        startHeartRain();
    });
};

function startHeartRain() {
    const heartRainContainer = document.getElementById('heart-rain');

    // Crear 20 corazones que caen
    for (let i = 0; i < 20; i++) {
        let heart = document.createElement('div');
        heart.textContent = '❤️';  // Corazón
        heart.classList.add('heart');

        // Posición aleatoria en el eje X
        heart.style.left = Math.random() * window.innerWidth + 'px';

        // Duración aleatoria entre 3s y 5s para que los corazones caigan a diferente velocidad
        heart.style.animationDuration = (Math.random() * 2 + 1) + 's';

        // Añadir el corazón al contenedor
        heartRainContainer.appendChild(heart);
    }

    // Después de la lluvia de corazones, añadir el beso volador
    setTimeout(() => {
        addFlyingKiss();
    }, 5000);  // Espera a que termine la lluvia para añadir el beso volador
}

function addFlyingKiss() {
    const heartRainContainer = document.getElementById('heart-rain');

    // Crear el corazón para el beso volador
    let kissHeart = document.createElement('div');
    kissHeart.textContent = '💋';  // Corazón con beso
    kissHeart.classList.add('kiss');

    // Posicionarlo en el centro de la pantalla inicialmente
    kissHeart.style.left = window.innerWidth / 2 - 25 + 'px';
    kissHeart.style.top = window.innerHeight / 2 - 25 + 'px';

    // Añadir el beso volador al contenedor
    heartRainContainer.appendChild(kissHeart);

    // Eliminar el beso volador después de la animación
    setTimeout(() => {
        kissHeart.remove();
    }, 2000);  // Eliminar después de 2 segundos
}