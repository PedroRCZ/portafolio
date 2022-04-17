let innerCursor = document.querySelector(".inner-cursor");
let outerCursor = document.querySelector(".outer-cursor");

document.addEventListener("mousemove", moveCursor);

function moveCursor(e){
    let x = e.clientX;
    let y = e.clientY;
    innerCursor.style.left = `${x}px`;
    innerCursor.style.top = `${y}px`;
    outerCursor.style.left = `${x}px`;
    outerCursor.style.top = `${y}px`;
}

let links = Array.from(document.querySelectorAll("a"));
console.log(links)

links.forEach((link) =>{
    link.addEventListener("mouseover", () =>{
        innerCursor.classList.add("grow");
    });
    link.addEventListener("mouseleave", () =>{
        innerCursor.classList.remove("grow");
    });
})

const ipad= window.matchMedia('screen and (max-width: 767px)')

const menu = document.querySelector('.menu');
const burgerButton = document.querySelector('#burger-menu');
ipad.addEventListener( 'chage', function(event){
    validation(event.target)
});

function validation(event){
    if(event.matches){
        burgerButton.addEventListener('click', hideShow);
    }else{
        burgerButton.removeEventListener('click', hideShow);
        }
    }

validation(ipad);

function hideShow(){
    if(menu.classList.contains('is-active')){
        menu.classList.remove('is-active');
    }else{
        menu.classList.add('is-active');
    }
}

const list = document.querySelectorAll('.list');
function activeLink(){
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) =>
item.addEventListener('click',activeLink));