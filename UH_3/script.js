function changeBioText() {
    const bioParagraph = document.getElementById('bio-text');
    if (bioParagraph.textContent.includes('18 años')) {
        bioParagraph.innerHTML = 'Actualmente estoy enfocado en el desarrollo Full Stack y busco mi primer oportunidad laboral. ¡Echa un vistazo a mis proyectos!';
    } else {
        bioParagraph.innerHTML = 'Soy <b>Miguelangel Restrepo Grisales</b>, tengo 18 años y vivo en Medellín, Colombia. Estudio programación en <b>Riwi</b> y me apasiona la tecnología, el diseño limpio y aprender algo nuevo cada día. Me gusta crear proyectos simples, funcionales y con buen estilo.';
    }
}

alert("¡Hola! Bienvenido a mi portafolio."); 

function toggleProjects() {
    const moreProjects = document.getElementById('more-projects');
    if (moreProjects.style.display === 'none') {
        moreProjects.style.display = 'grid'; 
    } else {
        moreProjects.style.display = 'none';
    }
}
