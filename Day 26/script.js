const btn = document.querySelectorAll('.button');

let active = 1;
btn.forEach(button => {
  button.addEventListener('click', function() {
    document.querySelector('.card:nth-child(' + active + ')').classList.remove('active');
    document.querySelector('.card:nth-child(' + active + ')').classList.add('inactive');
    
    if (active === 3) {
      active = 0;
    }
    active++;
    
    document.querySelector('.card:nth-child(' + active + ')').classList.remove('inactive');
    document.querySelector('.card:nth-child(' + active + ')').classList.add('active');
  });
});