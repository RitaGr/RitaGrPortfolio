// JavaScript code to generate items
document.addEventListener("DOMContentLoaded", function() {
    var container = document.getElementById("container");
  
    for (var i = 1; i <= 60; i++) {
      var item = document.createElement("div");
      item.className = "item";
      container.appendChild(item);
    }
  });

  var currentActiveLink = null;

        // Set the home link as initially active
        window.onload = function () {
            var homeLink = document.getElementById('home');
            updateText(homeLink);
        };

        function updateText(link) {
            // If there's a previously clicked link, restore its text
            if (currentActiveLink) {
                currentActiveLink.textContent = currentActiveLink.dataset.originalText;
            }

            // Store the original text content in a data attribute
            link.dataset.originalText = link.textContent;

            // Create a span element with a class of "dot"
            var dotElement = document.createElement('span');
            dotElement.className = 'dot';

            // Replace the link text with the created dot element
            link.textContent = '';
            link.appendChild(dotElement);

            // Update the currentActiveLink to the currently clicked link
            currentActiveLink = link;
        }

        // smooth transition to the content on the page

        document.addEventListener('DOMContentLoaded', function() {
            const links = document.querySelectorAll('.menu a');
        
            links.forEach(link => {
                link.addEventListener('click', smoothScroll);
            });
        
            function smoothScroll(e) {
                e.preventDefault();
        
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
        
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });

        // scrolling animation hide-reveal
        document.addEventListener('DOMContentLoaded', function() {
            const revealSection = document.querySelector('.reveal-section');
            const hiddenContent = document.querySelector('.hidden-content');
        
            window.addEventListener('scroll', revealOnScroll);
        
            function revealOnScroll() {
                const revealPosition = revealSection.getBoundingClientRect().top;
        
                // Adjust the value below to control when the content is revealed
                const revealThreshold = window.innerHeight * 0.8;
        
                if (revealPosition < revealThreshold) {
                    revealSection.style.opacity = 1;
                    hiddenContent.style.opacity = 1;
                    window.removeEventListener('scroll', revealOnScroll); // Optional: Remove the event listener after revealing
                }
            }
        });