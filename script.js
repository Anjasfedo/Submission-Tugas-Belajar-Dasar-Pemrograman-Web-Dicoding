/* slide */

const button = document.querySelector('button');
const hero = document.querySelector('.hero')
const interval = 3000

let heroSlide = document.querySelectorAll('.hero-slide')
let index = 1

const firstClone = heroSlide[0].cloneNode(true)
const lastClone = heroSlide[heroSlide.length - 1].cloneNode(true)

firstClone.id = 'first-clone'
lastClone.id = 'last-clone'

hero.append(firstClone)
hero.prepend(lastClone)

const slideWidth = heroSlide[index].clientWidth

hero.style.transform = `translateX(${-slideWidth * index}px)`

const startSlide = () => {
    setInterval(() => {
        index++
        hero.style.transform = `translateX(${-slideWidth * index}px)`
        hero.style.transition = '2s ease-in-out'
    }, interval);
}

startSlide()

hero.addEventListener('transitionend', () => {
    heroSlide = document.querySelectorAll('.hero-slide')

    if (heroSlide[index].id == 'first-clone') {
        hero.style.transition = 'none'
        index = 1
        hero.style.transform = `translateX(${-slideWidth * index}px)`
    }
})

/* validasi */

function validateForm() {
    var name = document.forms["myForm"]["name"].value;
    var email = document.forms["myForm"]["email"].value;
    var select = document.forms["myForm"]["interest"].value;
  
    if (name == "") {
      alert("Masukkan Nama Anda");
      return false;
    }
  
    if (email == "") {
      alert("Masukkan Email Anda");
      return false;
    }
  
    if (select == "") {
      alert("Pilih Opsi");
      return false;
    }
  
    alert("Form Berhasil Diisi");
    return true;
  }