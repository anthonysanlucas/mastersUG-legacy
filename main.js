document.getElementById('verticalMenu').addEventListener('click', responsiveNavbar)

if (document.getElementById('resultsPage'))
  document.getElementById('resultsPage').classList.add('accent-text')

if (document.getElementById('aboutPage'))
  document.getElementById('aboutPage').classList.add('accent-text')

function responsiveNavbar() {
  document.getElementById('verticalMenu').classList.toggle('header__verticalMenu--active')

  const header = document.getElementById('header')

  header.className === 'header'
    ? header.classList.add('responsive')
    : header.classList.remove('responsive')
}
