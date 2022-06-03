const observerOptions = {
  root: null,
  threshold: 0,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelector('h1').setAttribute('data-in-view', 'true');
      entry.target.querySelector('h2').setAttribute('data-in-view', 'true');
      entry.target.querySelector('h3').setAttribute('data-in-view', 'true');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);


const elements = document.querySelectorAll('[data-animate="true"]');
elements.forEach(element => {
  observer.observe(element);
})

