let accordian = document.getElementsByClassName('faq-question')
for (let i = 0; i < accordian.length; i++) {
  accordian[i].addEventListener('click', function () {
    if (this.childNodes[1].classList.contains('fa-plus')) {
      this.childNodes[1].classList.remove('fa-plus')
      this.childNodes[1].classList.add('fa-times')
    } else {
      this.childNodes[1].classList.remove('fa-times')
      this.childNodes[1].classList.add('fa-plus')
    }
    let content = this.nextElementSibling
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
        content.style.display = 'none'
    } else {
        content.style.display = 'block'
        content.style.padding = '31.2px';
        content.style.maxHeight = content.scrollHeight + 'px';
    }
  })
}