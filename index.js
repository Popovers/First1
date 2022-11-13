const name = "Роман Попов"; 
let age = 17;

const header = document.querySelector(".header")
const navLinks = document.querySelectorAll(".nav__link");
const testBtn = document.querySelector('#testBtn');

// console.log (navLinks);

function sayHello(){
    let message = "hello " + name;
      console.log(message);
}


sayHello();

function simpleMath(a, b) {
    let result = a + b;
    return result;
}

 let sum = simpleMath(1, 2);

 console.log(sum);


 window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;

    if(scrollPos > 0) {
    header.classList.add('red');
    } else {
        header.classList.remove('red');
    }
    console.log(scrollPos)
    // header.classList.add('red');
 });

//  navLinks.addEventListener("click", function(){
//     console.log('link clicked');
//  })
// testBtn.addEventListener("click", function() {
//     console.log("clicked");
// })

 for (let navItem of navLinks) {
    navItem.addEventListener("click", function(){
        console.log('link clicked');
    });
 }