// Script to change the website color scheme
document.addEventListener('DOMContentLoaded', function() {
    // Variables to manage the state
    let isAlternateTheme = false;
    
    // DOM Elements
    const colorButton = document.querySelector('.color-button');
    
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
        const logo = document.querySelector('.logo');
        const navItems = document.querySelectorAll('.nav-item');
        const heroText = document.querySelector('.hero p');
        const heroHeadings = document.querySelectorAll('.hero h1, .hero h3');
        
        if (isAlternateTheme) {
            // Return to default theme (beige with white header)
            body.style.backgroundColor = '#e8dcd1';
            header.style.backgroundColor = 'white';
            header.style.color = 'black';
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
            
            // Restore button color
            colorButton.style.backgroundColor = '#555';
            
            isAlternateTheme = false;
        } else {
            // Change to blue and gray theme
            body.style.backgroundColor = '#d1e1e8';
            header.style.backgroundColor = '#3a5a78';
            header.style.color = 'white';
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
            
            // Change button color
            colorButton.style.backgroundColor = '#3a5a78';
            
            isAlternateTheme = true;
        }
    }
    
    // Event listener for the color change button
    colorButton.addEventListener('click', showConfirmDialog);
});