document.addEventListener('DOMContentLoaded', () => {
  const lists = document.querySelectorAll('.main__timings');

  for (let i = 0; i < lists.length; i++) {
    if (lists[i].children.length > 4) {
      const more = document.createElement('li');
      more.classList.add('main__timing', 'main__timing--more');
      more.textContent = 'ещё...';
      let change = lists[i].children[3];
      lists[i].insertBefore(more, change);
    }
  }

  const moreButtons = document.querySelectorAll('.main__timing--more');
  moreButtons.forEach((e) => {
    e.addEventListener('click', () => {
      e.parentElement.classList.add('main__timings--visible');
      e.parentElement.children[3].remove();
    })
  })
})
