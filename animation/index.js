const animationObserverOptions = {
  root: null,
  threshold: 0,
  rootMargin: '0px 0px -200px 0px'
}

const animationObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('[data-animation]').forEach(el => {
        let delay = Number.parseInt(el.dataset.animationDelay || 0)
        el.style.animationDelay = delay + "ms"
        el.setAttribute('data-in-view', 'true')
      })

      animationObserver.unobserve(entry.target)
    }
  });
}, animationObserverOptions)

const animationElements = document.querySelectorAll('[data-animate="true"]')

animationElements.forEach(element => {
  animationObserver.observe(element)
})
