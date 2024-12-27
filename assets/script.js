// Waitlist Button Click Event
document.getElementById('waitlist-btn').addEventListener('click', () => {
    alert('Thank you for your interest! We’ll notify you when early access is available.');
});

// Smooth Scroll for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar Toggle Icon Animation
const navbarToggler = document.querySelector('.navbar-toggler');
navbarToggler.addEventListener('click', () => {
    const togglerIcon = navbarToggler.querySelector('span');
    togglerIcon.classList.toggle('open');
});

// Add "Sticky" Class to Navbar on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

// Feature Section Hover Animation (Optional)
document.querySelectorAll('.features img').forEach(img => {
    img.addEventListener('mouseenter', () => {
        img.style.transform = 'rotate(3deg)';
    });
    img.addEventListener('mouseleave', () => {
        img.style.transform = 'rotate(0)';
    });
});

// Intersection Observer for Lazy Loading Images
const lazyImages = document.querySelectorAll('img');
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            const src = img.getAttribute('data-src');
            if (src) {
                img.src = src;
                img.removeAttribute('data-src');
            }
            observer.unobserve(img);
        }
    });
}, {
    rootMargin: '50px 0px',
    threshold: 0.01
});

lazyImages.forEach(image => {
    observer.observe(image);
});

// Dark Mode Toggle (Optional)
const darkModeToggle = document.createElement('button');
darkModeToggle.textContent = 'Dark Mode';
darkModeToggle.style.position = 'fixed';
darkModeToggle.style.bottom = '20px';
darkModeToggle.style.right = '20px';
darkModeToggle.style.padding = '10px 15px';
darkModeToggle.style.backgroundColor = '#E38E49';
darkModeToggle.style.color = 'white';
darkModeToggle.style.border = 'none';
darkModeToggle.style.borderRadius = '5px';
darkModeToggle.style.cursor = 'pointer';
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = 'Light Mode';
    } else {
        darkModeToggle.textContent = 'Dark Mode';
    }
});

/* Dark Mode CSS (Added via JavaScript) */
const darkModeStyle = document.createElement('style');
darkModeStyle.innerHTML = `
    body.dark-mode {
        background-color: #121212;
        color: #F9F9F9;
    }
    body.dark-mode a {
        color: #E38E49;
    }
    body.dark-mode .navbar {
        background-color: #1E509A;
    }
    body.dark-mode footer {
        background-color: #1E509A;
    }
`;
document.head.appendChild(darkModeStyle);
