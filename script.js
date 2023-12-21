document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.getElementById('navbar');
  const body = document.querySelector('body main');
  const foodMenuSection = document.querySelector('body main section');

  // Change background color of body on hover over navigation buttons
  const menuItems = document.querySelectorAll('body main');
  const bgNava = document.querySelectorAll('header nav ul li a');

  bgNava.forEach(tab=>{
    tab.addEventListener('mouseenter', function() {
    body.style.backgroundColor ='#00ff0f';
    
  });
   tab.addEventListener('mouseleave', function() {
    body.style.backgroundColor = 'initial';   // Reset background color on mouse leave
  });
});

  menuItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      body.style.backgroundColor = '#ffff47';  // Change background color on hover
      
    });

    item.addEventListener('mouseleave', function() {
      body.style.backgroundColor = 'initial';   // Reset background color on mouse leave
    });
  });

  // Change background color of food-menu section based on scroll position
  foodMenuSection.addEventListener('scroll', function() {
    const scrollPercentage = foodMenuSection.scrollTop / (foodMenuSection.scrollHeight - foodMenuSection.clientHeight);
    
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
    } else if (scrollPercentage >= 0.9) {
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