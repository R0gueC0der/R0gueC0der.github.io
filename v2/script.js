const bar1 = document.querySelector('.bar1')
const bar2 = document.querySelector('.bar2')
const bar3 = document.querySelector('.bar3')

const navLinks = document.querySelector('.nav-links')

function menuToggle() {
	bar1.classList.toggle('change')
	bar2.classList.toggle('change')
	bar3.classList.toggle('change')

}

new Darkmode({
  bottom: '64px',
  right: '64px',
  left: 'unset',
  time: '0.5s',
  mixColor: '#fff',
  backgroundColor: '#fff',
  buttonColorDark: '#100f2c',
  buttonColorLight: '#fff',
  saveInCookies: false,
  label: '🌓',
  autoMatchOsTheme: true
}).showWidget()

class TypeWriter {
	constructor(textElement, words, wait = 3000) {
		this.textElement = textElement
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

		if(this.isDeleting) {
			this.txt = fullTxt.substring(0, this.txt.length - 1)
		} else {
			this.txt = fullTxt.substring(0, this.txt.length + 1)
		}

		this.textElement.innerHTML = `${this.txt}`

		let typeSpeed = 100

		if(this.isDeleting) {
			typeSpeed = typeSpeed / 2
		}

		if(!this.isDeleting && this.txt === fullTxt) {
			typeSpeed = this.wait
			this.isDeleting = true
		} else if(this.isDeleting && this.txt === '') {
			this.isDeleting = false
			this.wordIndex++
			typeSpeed = 500
		}
	
		setTimeout(() => this.type(), typeSpeed)
	}
}

document.addEventListener('DOMContentLoaded', init)

function init() {
	const textElement = document.querySelector('.txt-type')
	const words = JSON.parse(textElement.getAttribute('data-words'))
	const wait = textElement.getAttribute('data-wait')

	new TypeWriter(textElement, words, wait)
}

function loadPage() {
	let timeout = setTimeout(showPage, 3000);
}

function showPage() {
	document.querySelector('.spinner-wrapper').style.opacity = '0'
	document.querySelector('.container').style.opacity = '1'
	document.querySelector('.spinner-wrapper').style.display = 'none';
}

loadPage()