let options = {
    root: null,
    rootMargin: "0px",
    threshold: null,
  };

  function buildThresholdList() {
    let thresholds = [];
    let numSteps = 20;
  
    for (let i = 1.0; i <= numSteps; i++) {
      let ratio = i / numSteps;
      thresholds.push(ratio);
    }
  
    thresholds.push(0);
    return thresholds;
  };

const observer = new IntersectionObserver( (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visa');
        } else {
            entry.target.classList.remove('visa');
        }
    });
},options);

const hiddenElements = document.querySelectorAll('.dold');
hiddenElements.forEach((el) => observer.observe(el));