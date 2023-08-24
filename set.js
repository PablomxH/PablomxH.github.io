// Constantes de elementos de la pagina
const title = document.getElementById('title2');
const about = document.getElementById('about2');
const stack = document.getElementById('stack2');
const education = document.getElementById('education2');
const projects = document.getElementById('projects2');

// Agrega una verificación para el ancho de la pantalla antes de asignar los eventos
if (window.innerWidth > 767) {
    //Botones de la pagina
    const mystack = document.getElementById("Pablostack")
    const aboutit = document.getElementById("PabloAbout")
    const profeedu = document.getElementById("PabloEdu")
    const proyects = document.getElementById("PabloPro")

    window.addEventListener('load', iniciarPortafolio);

    mystack.addEventListener("click", techstack);
    aboutit.addEventListener("click", iniciarPortafolio);
    profeedu.addEventListener("click", edu);
    proyects.addEventListener("click", proj);
}

function iniciarPortafolio() {
    stack.style.display = "none";
    education.style.display = "none";
    projects.style.display = "none";
    title.style.display = "block";
    about.style.display = "block";
}

function techstack(){
    about.style.display = "none";
    education.style.display = "none";
    projects.style.display = "none";
    title.style.display = "none";
    stack.style.display = "block"; // Mostrar la sección "Tech Stack"
}

function edu(){
    about.style.display = "none";
    stack.style.display = "none";
    projects.style.display = "none";
    title.style.display = "none";
    education.style.display = "block";
}

function proj(){
    about.style.display = "none";
    education.style.display = "none";
    stack.style.display = "none";
    title.style.display = "none";
    projects.style.display = "block";
}

const projectLinks = {
    project1: 'https://github.com/PablomxH/COVID19-Data-Analysis-Using-Python/blob/main/covid19%20data%20analysis%20notebook.ipynb',
    project2: 'https://www.youtube.com/watch?v=CGp1Erx5beU',
    project3: 'https://github.com/PablomxH/opencv',
    project4: 'https://www.link4.com'
};

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.main_projects img');
    
    images.forEach(image => {
        image.addEventListener('click', () => {
            const imageId = image.getAttribute('id');
            const link = projectLinks[imageId];
            if (link) {
                window.open(link, '_blank');
            }
        });
    });
});