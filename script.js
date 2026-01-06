 // Function to smoothly scroll to a section when navigation link is clicked
        function scrollToSection(sectionId) {
            // Get the section element by its ID
            const section = document.getElementById(sectionId);
            
            // Scroll to the section smoothly
            section.scrollIntoView({ 
                behavior: 'smooth',  // Smooth scrolling animation
                block: 'start'       // Align to the top of the section
            });
        }

        // Optional: Add active state to navigation links based on scroll position
        window.addEventListener('scroll', function() {
            // Get all sections
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('nav a');
            
            // Get current scroll position
            let current = '';
            
            // Check which section is currently in view
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (window.pageYOffset >= sectionTop - 100) {
                    current = section.getAttribute('id');
                }
            });
            
            // Remove active class from all links and add to current
            navLinks.forEach(link => {
                link.style.color = '#333';
                if (link.getAttribute('onclick').includes(current)) {
                    link.style.color = '#d4a500';
                }
            });
        });