document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.triangles-container');
    const numTriangles = 30;
    const colors = ['#FFD700', '#00BFFF', '#FF8C00'];

    // Crear el fondo dinámico de luz
    const lightEffect = document.createElement('div');
    lightEffect.classList.add('cursor-light');
    document.body.appendChild(lightEffect);

    // Generar los triángulos en el fondo
    for (let i = 0; i < numTriangles; i++) {
        const triangle = document.createElement('div');
        triangle.classList.add('triangle');

        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        triangle.style.borderBottomColor = randomColor;

        container.appendChild(triangle);

        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        triangle.style.transform = `translate(${x}px, ${y}px)`;

        triangle.setAttribute('data-x', x);
        triangle.setAttribute('data-y', y);
    }

    // Movimiento de triángulos basado en el mouse
    document.addEventListener('mousemove', (e) => {
        const { clientX: mouseX, clientY: mouseY } = e;

        // Posicionar el gradiente de luz en la ubicación del cursor
        lightEffect.style.background = `radial-gradient(circle at ${mouseX}px ${mouseY}px, rgba(16, 43, 73, 0.5) 10%, rgba(8, 21, 40, 0) 50%)`;

        // Movimiento de los triángulos
        document.querySelectorAll('.triangle').forEach((triangle) => {
            const initialX = parseFloat(triangle.getAttribute('data-x'));
            const initialY = parseFloat(triangle.getAttribute('data-y'));

            const moveX = (mouseX - window.innerWidth / 2) * 0.08;
            const moveY = (-mouseY - window.innerHeight / 2) * 0.13;

            triangle.style.transform = `translate(${initialX + moveX}px, ${initialY + moveY}px)`;
        });
    });
});