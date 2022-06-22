function fetchResults() {
  fetch('---FETCH URL---')
    .then(response => response.text())
    .then(data => {
      const parser = new DOMParser
      const html = parser.parseFromString(data, 'text/html')
      const products = html.querySelectorAll('li.grid__item')
      products.forEach(product => {
        document.querySelector('.products').insertAdjacentElement('beforeend', product)
      })
    })
}
