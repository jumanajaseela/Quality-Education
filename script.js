document.addEventListener('DOMContentLoaded', () => {
    // Select all elements with the class 'counter'
    const counters = document.querySelectorAll('.counter');
    
    // Loop over each counter element
    counters.forEach((counter) => {
      // Create a function to update the counter value
      const updateCounter = () => {
        // Get the target number from the data attribute
        const target = +counter.getAttribute('data-target');
        // Get the current displayed number
        const current = +counter.innerText;
        
        // Determine the increment value (you can adjust the speed by modifying the divisor)
        const increment = target / 200;
        
        // Check if the current value is less than the target
        if (current < target) {
          // Increment the current value and update the display
          counter.innerText = Math.ceil(current + increment);
          // Call updateCounter again after a short delay (10ms in this case)
          setTimeout(updateCounter, 10);
        } else {
          // Once the target is reached, set the counter to the exact target value
          counter.innerText = target;
        }
      };
  
      // Start the counter update for the element
      updateCounter();
    });
  });


  
  
  