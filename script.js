document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-button');
    const menuItems = document.querySelector('.menu-items');
    const navBar = document.querySelector('.nav-bar');

    // Função para controlar o estilo da navegação ao rolar
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navBar.style.padding = '15px';
            navBar.style.backgroundColor = 'rgba(21, 25, 42, 0.95)';
            navBar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navBar.style.padding = '40px';
            navBar.style.backgroundColor = 'var(--color1)';
            navBar.style.boxShadow = 'none';
        }
    });

    menuButton.addEventListener('click', function(e) {
        e.stopPropagation(); // Impede que o clique no botão propague para o documento
        menuButton.classList.toggle('active');
        menuItems.classList.toggle('active');
    });

    // Fechar o menu quando clicar em um link
    const menuLinks = document.querySelectorAll('.menu-items a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuButton.classList.remove('active');
            menuItems.classList.remove('active');
        });
    });

    // Fechar o menu quando clicar fora dele
    document.addEventListener('click', function(e) {
        // Verifica se o clique foi fora do menu e do botão
        if (!menuItems.contains(e.target) && !menuButton.contains(e.target)) {
            menuButton.classList.remove('active');
            menuItems.classList.remove('active');
        }
    });
}); 