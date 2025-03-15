// Script to change the website color scheme
document.addEventListener('DOMContentLoaded', function() {
    // Variables to manage the state
    let isAlternateTheme = false;
    
    // DOM Elements
    const colorButton = document.querySelector('.color-button');
    
    // Create the progress bar element
    const loaderBar = document.createElement('div');
    loaderBar.classList.add('loader-bar');
    document.body.prepend(loaderBar);

    function startLoader() {
        // Initialize the loader bar
        loaderBar.style.width = '0%';
        loaderBar.style.left = '0%';
        loaderBar.style.display = 'block';
        loaderBar.style.opacity = '1';
    
        // First phase: Expand from left to right
        loaderBar.style.transition = 'width 1.5s ease-in-out';
        loaderBar.style.width = '100%';
    
        setTimeout(() => {
            // Second phase: Shrink while moving to the right
            loaderBar.style.transition = 'width 1.5s ease-in-out, left 1.5s ease-in-out';
            loaderBar.style.width = '0%';
            loaderBar.style.left = '100%';
    
            setTimeout(() => {
                // Smoothly fade out
                loaderBar.style.opacity = '0';
                setTimeout(() => {
                    loaderBar.remove(); // Remove from the DOM
                }, 500);
            }, 1500); // Wait for the shrinking animation to finish
        }, 1500); // Wait for the expanding animation to finish
    }
    
    

    // Function to show the confirmation dialog
    function showConfirmDialog() {
        // Use the browser's native dialog
        const userConfirmed = confirm("Do you want to change the color scheme?");
        
        if (userConfirmed) {
            toggleTheme();
        }
    }
    
    // Function to toggle between color themes
    function toggleTheme() {
        const body = document.body;
        const header = document.querySelector('.header');
        const footer = document.querySelector('.footer');
        const logo = document.querySelector('.logo');
        const navItems = document.querySelectorAll('.nav-item');
        const heroText = document.querySelector('.hero p');
        const heroHeadings = document.querySelectorAll('.hero h1, .hero h3');
        const socialLinks = document.querySelectorAll('.social-link');
        
        if (isAlternateTheme) {
            // Return to default theme (beige with white header)
            body.style.backgroundColor = '#e8dcd1';
            header.style.backgroundColor = 'white';
            header.style.color = 'black';
            footer.style.backgroundColor = 'white';
            footer.style.color = 'black';
            logo.style.color = 'black';
            heroText.style.color = '#555';
            
            // Restore navigation elements color
            navItems.forEach(item => {
                item.style.color = 'black';
            });
            
            // Restore headings color
            heroHeadings.forEach(heading => {
                heading.style.color = 'black';
            });
            
            // Restore social links color
            socialLinks.forEach(link => {
                link.style.color = 'black';
            });
            
            // Restore button color
            colorButton.style.backgroundColor = '#555';
            
            // Reset hover color for social links
            document.documentElement.style.setProperty('--hover-color', '#30ac43');
            
            isAlternateTheme = false;
        } else {
            // Change to blue and gray theme
            body.style.backgroundColor = '#d1e1e8';
            header.style.backgroundColor = '#3a5a78';
            header.style.color = 'white';
            footer.style.backgroundColor = '#3a5a78';
            footer.style.color = 'white';
            logo.style.color = 'white';
            heroText.style.color = '#444a4f';
            
            // Change navigation elements color
            navItems.forEach(item => {
                item.style.color = '#e8f1f8';
            });
            
            // Change headings color
            heroHeadings.forEach(heading => {
                heading.style.color = '#3a5a78';
            });
            
            // Change social links color
            socialLinks.forEach(link => {
                link.style.color = 'white';
            });
            
            // Change button color
            colorButton.style.backgroundColor = '#3a5a78';
            
            // Change hover color for social links
            document.documentElement.style.setProperty('--hover-color', '#87ceeb');
            
            isAlternateTheme = true;
        }
    }
    
    // Add CSS variable for hover color
    document.documentElement.style.setProperty('--hover-color', '#30ac43');
    
    // Override the social icons hover color
    const style = document.createElement('style');
    style.textContent = `
      .social-icons a:hover {
        color: var(--hover-color);
      }
    `;
    document.head.append(style);
    
    // Event listener for the color change button
    colorButton.addEventListener('click', showConfirmDialog);

    // Start loader animation
    startLoader();
});