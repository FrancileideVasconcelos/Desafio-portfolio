window.addEventListener('scroll', onScroll )

onScroll()
function onScroll() {
  showBackToTopOnScroll()
}

function showBackToTopOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

