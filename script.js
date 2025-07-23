// SEARCH FILTER
document.getElementById('searchInput').addEventListener('input', function () {
  const filter = this.value.toLowerCase();
  const movies = document.querySelectorAll('.movie');

  movies.forEach(movie => {
    const title = movie.getAttribute('data-title')?.toLowerCase() || '';
    const heading = movie.querySelector('h2')?.textContent.toLowerCase() || '';
    const category = movie.getAttribute('data-category')?.toLowerCase() || '';

    if (
      title.includes(filter) ||
      heading.includes(filter) ||
      category.includes(filter)
    ) {
      movie.style.display = 'block';
    } else {
      movie.style.display = 'none';
    }
  });
});

// CATEGORY FILTER BUTTONS
document.querySelectorAll('.filter').forEach(button => {
  button.addEventListener('click', function () {
    const selectedCategory = this.getAttribute('data-category');
    const movies = document.querySelectorAll('.movie');

    movies.forEach(movie => {
      const movieCategory = movie.getAttribute('data-category');

      if (selectedCategory === 'all' || movieCategory === selectedCategory) {
        movie.style.display = 'block';
      } else {
        movie.style.display = 'none';
      }
    });
  });
});