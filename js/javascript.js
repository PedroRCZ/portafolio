//Pointer personalizado
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

//Menú flotante


const list = document.querySelectorAll('.list');
console.log(list)
function activeLink(){
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) =>
item.addEventListener('click',activeLink));



// const menuLink = document.querySelectorAll('.list a[href^="#"]');
// const observer = new IntersectionObserver(
//     (entries) =>{
//         entries.forEach((entry) =>{
//             const id = entry.target.getAttribute("id");
//             const menuLink = document.querySelector(`.list a[href="#${id}"]`);
//             if(entry.isIntersecting){
//                 // document.querySelector(".menu li.active").classList.remove("active");
//                 // console.log(document.querySelector(".menu li.active"))
//                 // console.log(document.querySelector(".menu li a"))
//                 console.log(menuLink)
//                 menuLink.classList.add("active")
//             }
//         });
//      },
//      {rootMargin: "-50% 0px -50% 0px"}
// );

// menuLink.forEach(menuLink =>{
//     menuLink.addEventListener('click', function(){
//         menuLink.classList.remove("menu_opened")
//     })

//     const hash = menuLink.getAttribute("href");
//     const target = document.querySelector(hash);
//     if(target){
//         observer.observe(target)
//     }
// })
