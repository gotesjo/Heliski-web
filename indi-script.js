let options = {
    root: null,
    rootMargin: "16px",
    threshold: 0,
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