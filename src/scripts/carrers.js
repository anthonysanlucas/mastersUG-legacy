const buttons = document.querySelectorAll('.carrers__option')
const contents = document.querySelectorAll('.carrers__content')

buttons.forEach(button => {
  button.addEventListener('click', e => {
    clickedButton = e.target

    clickedButton.classList.toggle('carrers__option--active')

    buttons.forEach(button => {
      if (button !== clickedButton) button.classList.remove('carrers__option--active')
    })

    const selectedContent = document.getElementById(clickedButton.dataset.target)

    contents.forEach(content => {
      if (content !== selectedContent) content.classList.remove('active')
    })

    selectedContent.classList.toggle('active')
  })
})
