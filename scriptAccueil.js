document.addEventListener('DOMContentLoaded', function() {
    const lignes = document.querySelectorAll('.jaune, .rouge, .espace2, .assurons, .coherent, .reciproque, .respect, .quoiFaire');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('ligne-visible');
            } else {
                entry.target.classList.remove('ligne-visible'); // Supprime la classe pour rejouer l'animation
            }
        });
    });

    lignes.forEach((ligne) => observer.observe(ligne));
    l
});


