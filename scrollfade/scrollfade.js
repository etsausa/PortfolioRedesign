const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('visable');
        } else { 
            entry.target.classList.remove('visable');
        }
    });
});

const bodyElements = document.querySelectorAll("body > *");
bodyElements.forEach((el) => el.classList.add('invisable'));

const hiddenElements = document.querySelectorAll('.invisable');
hiddenElements.forEach((el) => observer.observe(el));