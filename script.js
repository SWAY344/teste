document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Efeito de Revelação (Animação ao fazer Scroll)
    const reveal = () => {
        const reveals = document.querySelectorAll('.reveal');
        reveals.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) {
                el.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', reveal);
    reveal(); // Ativa os elementos que já estão no topo ao carregar

    // 2. Navbar Muda de Cor
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = '#0b0b0b';
            navbar.style.padding = '15px 8%';
        } else {
            navbar.style.background = 'transparent';
            navbar.style.padding = '20px 8%';
        }
    });

    // 3. Scroll Suave para botões
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});