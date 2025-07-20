document.getElementById('search-btn').addEventListener('click', function() {
  const term = document.getElementById('search-box').value.toLowerCase();
  const products = document.querySelectorAll('.product-card');
  products.forEach(card => {
    const name = card.querySelector('h4').textContent.toLowerCase();
    card.style.display = name.includes(term) ? 'block' : 'none';
  });
});
