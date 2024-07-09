document.addEventListener("DOMContentLoaded", function() {
    var container = document.getElementById("container");
  
    for (var i = 1; i <= 60; i++) {
        var item = document.createElement("div");
        item.className = "item";
        container.appendChild(item);
    }

    var currentActiveLink = null;

    function updateText(link) {
        if (currentActiveLink) {
            currentActiveLink.textContent = currentActiveLink.dataset.originalText;
        }

        link.dataset.originalText = link.textContent;

        var dotElement = document.createElement('span');
        dotElement.className = 'dot';

        link.textContent = '';
        link.appendChild(dotElement);

        currentActiveLink = link;
    }

    function smoothScroll(targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    }

    function handleNavigation() {
        const links = document.querySelectorAll('.menu a');
        const sections = Array.from(links).map(link => document.getElementById(link.getAttribute('href').substring(1)));

        let currentSectionIndex = -1;

        function updateActiveLink() {
            let newSectionIndex = sections.findIndex(section => section.getBoundingClientRect().top < window.innerHeight * 0.5);

            if (newSectionIndex !== -1 && newSectionIndex !== currentSectionIndex) {
                updateText(links[newSectionIndex]);
                currentSectionIndex = newSectionIndex;
            }
        }

        links.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                smoothScroll(targetElement);
                updateText(this);
            });
        });

        window.addEventListener('scroll', updateActiveLink);
        window.addEventListener('load', updateActiveLink);
    }

    handleNavigation();

    // Scrolling animation hide-reveal
    const revealSection = document.querySelector('.reveal-section');
    const hiddenContent = document.querySelector('.hidden-content');

    function revealOnScroll() {
        const revealPosition = revealSection.getBoundingClientRect().top;
        const revealThreshold = window.innerHeight * 0.8;

        if (revealPosition < revealThreshold) {
            revealSection.style.opacity = 1;
            hiddenContent.style.opacity = 1;
            window.removeEventListener('scroll', revealOnScroll);
        }
    }

    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('load', revealOnScroll);

    // Dark mode toggle
    const toggleBtn = document.getElementById('moon');
    const body = document.body;
    const root = document.documentElement;

    toggleBtn.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        toggleBtn.classList.toggle('disabled');
        root.classList.toggle('dark-mode');
    });

    toggleBtn.addEventListener('mousedown', function() {
        toggleBtn.classList.add('active');
    });

    toggleBtn.addEventListener('mouseup', function() {
        toggleBtn.classList.remove('active');
    });

    // Smooth scrolling for navigation icons
    window.scrollToSection = function(sectionId) {
        const targetElement = document.getElementById(sectionId);
        if (targetElement) {
            smoothScroll(targetElement);
        }
    };
});


document.addEventListener('DOMContentLoaded', function() {
    const emailElement = document.querySelector('#contact-email');
    const modal = document.getElementById('email-modal');
    
    emailElement.addEventListener('click', function() {
        const rect = emailElement.getBoundingClientRect();
        modal.style.top = `${rect.top - modal.offsetHeight}px`;
        modal.style.left = `${rect.left + rect.width / 2}px`;
        modal.style.transform = 'translate(-50%, -10px)'; // Adjust the position above the email
        openModal();
    });
});

function openModal() {
    document.getElementById('email-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('email-modal').style.display = 'none';
}

function redirectToEmail() {
    const subject = encodeURIComponent('Contact Regarding Portfolio');
    const body = encodeURIComponent('Hello Margarita,\n\nI would like to discuss...');
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=ritagrushovets2002@gmail.com&su=${subject}&body=${body}`;
    window.open(mailtoLink, '_blank');
    closeModal();
}

// Close the modal when the user clicks outside of it
window.onclick = function(event) {
    const modal = document.getElementById('email-modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
