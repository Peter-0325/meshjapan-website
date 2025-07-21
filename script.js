document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav ul li a[href^="#"]');
    const menuToggle = document.querySelector('.menu-toggle');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerOffset = document.querySelector('header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }

            // 모바일 메뉴 닫기
            document.body.classList.remove('menu-open');
        });
    });

    if (menuToggle) {
        menuToggle.addEventListener('click', function () {
            document.body.classList.toggle('menu-open');
        });
    }
});
