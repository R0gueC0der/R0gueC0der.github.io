class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement
    this.words = words
    this.txt = ''
    this.wordIndex = 0
    this.wait = parseInt(wait, 10)
    this.type()
    this.isDeleting = false
  }

  type() {
    const current = this.wordIndex % this.words.length
    const fullTxt = this.words[current]

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1)
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1)
    }

    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`

    let typeSpeed = 100

    if (this.isDeleting) {
      typeSpeed /= 2
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      typeSpeed = this.wait
      this.isDeleting = true
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false
      this.wordIndex++
      typeSpeed = 500
    }

    setTimeout(() => this.type(), typeSpeed)
  }
}

document.addEventListener('DOMContentLoaded', init)

function init() {
  var options = {
  bottom: '64px', // default: '32px'
  right: '64px', // default: '32px'
  left: 'unset', // default: 'unset'
  time: '0.5s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  backgroundColor: '#fff',  // default: '#fff'
  buttonColorDark: '#100f2c',  // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: false, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: true // default: true
}

const darkmode = new Darkmode(options);
darkmode.showWidget();

  const txtElement = document.querySelector('.txt-type')
  const words = JSON.parse(txtElement.getAttribute('data-words'))
  const wait = txtElement.getAttribute('data-wait')
  new TypeWriter(txtElement, words, wait)
}

const targets = document.querySelectorAll('.animate')

const lazyLoad = target => {
  const io = new IntersectionObserver(
    (entries, observer) => {
      console.log(entries)

      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target
          img.classList.add('fade')

          observer.disconnect()
        }
      })
    },
    {
      threshold: 1
    }
  )
  io.observe(target)
}

targets.forEach(lazyLoad)
