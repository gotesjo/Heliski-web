let optionsIndi = {
    root: null,
    rootMargin: "100px 60px -120px 60px",
    threshold: 0.7
  };

const observerIndi = new IntersectionObserver( (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visa');
        } else {
            entry.target.classList.remove('visa');
        }
    });
},optionsIndi);

const hiddenElementsIndi = document.querySelectorAll('.dold');
hiddenElementsIndi.forEach((el) => observerIndi.observe(el));