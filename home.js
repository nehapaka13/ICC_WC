document.addEventListener("DOMContentLoaded", function() {
  // Get all headings
  const headings = document.querySelectorAll('.home .heading');

  // Attach click event listener to each heading
  headings.forEach((heading, index) => {
      heading.addEventListener('click', function() {
          // Get the sibling content div
          const content = this.nextElementSibling;

          // Toggle 'expanded' class on the content div
          content.classList.toggle('expanded');

          // Apply unique animations based on the index of the heading
          switch (index) {
              case 0:
                  animateContent(content, 'slideInFromRight');
                  break;
              case 1:
                  animateContent(content, 'slideInFromRight');
                  break;
              case 2:
                  animateContent(content, 'slideInFromRight');
                  break;
              case 3:
                  animateContent(content, 'slideInFromRight');
                  break;
              case 4:
                  animateContent(content, 'slideInFromRight');
                  break;
              default:
                  break;
          }
      });
  });

  // Function to apply animations to content
  function animateContent(content, animation) {
      content.style.animation = `${animation} 0.5s forwards`;
  }
});
