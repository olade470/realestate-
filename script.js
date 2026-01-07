window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if(window.scrollY > 100){
        header.classList.add('header-scrolled')
    }else{
        header.classList.remove('header-scrolled')
    }
    })

    const mobileMenuBtn = document.getElementById('mobileMenuBtn')
    const navLinks = document.getElementById('navLinks')

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active')
    })

       document.querySelectorAll('a[href^="#"]').forEach(anchor => {
             anchor.addEventListener('click', function (e) {
                 e.preventDefault()
                   const target = document.querySelector(this.getAttribute('href'))
                   if(target) {
                    target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                    })
                }
                 navLinks.classList.remove('active');
             })
       })

const observerOptions = {
    treshold: 0.1,
    rotmargin: '0px 0px -50px 0px'
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
        }
    })
}, observerOptions)

document.querySelectorAll('.fade-in').forEach( el => {
    observer.observe(el)
})

function animateCounter(element, target){
    let count = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        count +=increment;
        if (count >= target) {
            element.textContent = target;
             clearInterval(timer)
        }else{
            element.textContent = Math.floor(count)
        }
    }, 20);
}

const startsSection = document.querySelector('.stats');
let statsAnimated = false

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && sAnimnated) {
           sAnimnated = true
           animateCounter(document.getElementById('propertiesSold'), 1250) 
           animateCounter(document.getElementById('happyClients'), 850) 
           animateCounter(document.getElementById('yearsExperience'), 2) 
           animateCounter(document.getElementById('Awards'), 25) 
        }
    })
}, observerOptions)

statsObserver.observe(startsSection)
