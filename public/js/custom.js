document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    })
  })
})

if (window.pageYOffset > 0) {
  setHeaderFixed()
}
$(window).on('scroll', function () {
  setHeaderFixed()
})

function setHeaderFixed () {
  var HscrollTop = $(window).scrollTop()
  if (HscrollTop >= 100) {
    $('header').addClass('fixed-header')
  } else {
    $('header').removeClass('fixed-header')
  }
}
