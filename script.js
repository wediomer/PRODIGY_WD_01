document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.getElementById('navbar');
  const body = document.querySelector('body main');

  // Change background color of body on hover over navigation buttons
  const menuItems = document.querySelectorAll('header nav ul li a');
  
  menuItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      body.style.backgroundColor = '#ffff47';  // Change background color on hover
      
      
    });
    

    item.addEventListener('mouseleave', function() {
      body.style.backgroundColor = 'initial';   // Reset background color on mouse leave
    });
  });

 
  const mainSection = document.querySelector('body main');
    // Change background color of menu items based on scroll position of the main section
    mainSection.addEventListener('scroll', function() {
      const scrollPercentage = mainSection.scrollTop / (mainSection.scrollHeight - mainSection.clientHeight);
      
      
      if (scrollPercentage >= 0.2 && scrollPercentage < 0.5) {
        menuItems.forEach(item => {
          item.style.backgroundColor = 'blue';  // Change background color to blue
        });
      } else if (scrollPercentage >= 0.5 && scrollPercentage < 0.8) {
        menuItems.forEach(item => {
          item.style.backgroundColor = 'yellow';  // Change background color to yellow
        });
      } else if (scrollPercentage >= 0.8 && scrollPercentage < 1) {
        menuItems.forEach(item => {
          item.style.backgroundColor = 'green';  // Change background color to green
        });
      } else if (scrollPercentage >= 1) {
        menuItems.forEach(item => {
          item.style.backgroundColor = 'red';  // Change background color to red
        });
      } else {
        menuItems.forEach(item => {
          item.style.backgroundColor = 'transparent';  // Reset background color
        });
      }
    });
  });
  
