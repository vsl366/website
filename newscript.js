document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const carouselItems = Array.from(carousel.children);
    
    carouselItems.forEach(item => {
        const clone = item.cloneNode(true);
        carousel.appendChild(clone);
    });
    const skillsCarousel = document.querySelector('.skills-carousel');
    skillsCarousel.addEventListener('mouseenter', () => {
        carousel.style.animationPlayState = 'paused';
    });
    skillsCarousel.addEventListener('mouseleave', () => {
        carousel.style.animationPlayState = 'running';
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    // Apply the saved theme or default to dark mode
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        themeToggle.checked = currentTheme === 'light';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.checked = false; // Default to dark mode
    }

    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    });
});
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const form = event.target;
    const formData = new FormData(form);
    const formAction = form.action; // Use the action attribute from the form

    fetch(formAction, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            document.getElementById('responseMessage').textContent = 'Thank you for your message!';
            form.reset();
        } else {
            throw new Error('Network response was not ok.');
        }
    })
    .catch(error => {
        document.getElementById('responseMessage').textContent = 'Oops! There was a problem submitting the form.';
        console.error('Error:', error);
    });
});
