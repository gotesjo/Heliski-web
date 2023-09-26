let options = {
    root: null,
    rootMargin: "100px 60px -120px 60px",
    threshold: 0.7
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