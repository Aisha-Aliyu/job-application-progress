document.addEventListener("DOMContentLoaded", function() {
    const steps = document.querySelectorAll('.step');
    const stepContents = document.querySelectorAll('.step-content');
    const nextBtns = document.querySelectorAll('.next-btn');
    const prevBtns = document.querySelectorAll('.prev-btn');
    let currentStep = 0;
  
    function updateSteps() {
      steps.forEach((step, index) => {
        if (index === currentStep) {
          step.classList.add('active');
        } else {
          step.classList.remove('active');
        }
      });
  
      stepContents.forEach((stepContent, index) => {
        if (index === currentStep) {
          stepContent.classList.add('active');
        } else {
          stepContent.classList.remove('active');
        }
      });
    }
  
    updateSteps();
  
    nextBtns.forEach(nextBtn => {
      nextBtn.addEventListener('click', () => {
        currentStep++;
        if (currentStep >= steps.length) {
          currentStep = steps.length - 1;
        }
        updateSteps();
      });
    });
  
    prevBtns.forEach(prevBtn => {
      prevBtn.addEventListener('click', () => {
        currentStep--;
        if (currentStep < 0) {
          currentStep = 0;
        }
        updateSteps();
      });
    });
  });
  