let head = document.head
let body = document.body;
let link = document.createElement("Link");
link.href = "https://cdn-icons-png.flaticon.com/512/975/975645.png";
link.rel = "icon";
link.type = "icon/x-image"
head.appendChild(link);

let hov = document.querySelectorAll(".listNav");


let btn = document.querySelector(".btn1")

let btn1 = document.querySelector(".btn2")



btn1.addEventListener('mouseover',function(){
    btn1.style.color = "black"
})
btn1.addEventListener('mouseout',function(){
    btn1.style.color = "white"
})

btn.addEventListener('mouseover',function(){
    btn.style.color = "black"
})
btn.addEventListener('mouseout',function(){
    btn.style.color = "white"
})


hov.forEach((e)=>{
   e.addEventListener('mouseover',function(){
    e.classList.add("clr")
    e.addEventListener('click',function(){

        hov.forEach((ee)=>{
            ee.classList.remove("cl")
        })
        e.classList.toggle("cl");
    })
   })
   e.addEventListener('mouseout',function(){
    e.classList.remove("clr")
   })
});

let burBtn = document.querySelector(".btn");
    burBtn.addEventListener('click',function(){
        hov.forEach((e)=>{
            e.classList.toggle("vis");
            
        });
    });

    let headerr = document.querySelector("header");

let arrow = document.querySelector(".lable")




arrow.addEventListener("click",function(){
    let allBtn = document.querySelectorAll("#bt");
    let xX = document.querySelector(".x")
    allBtn.forEach((eee)=>{

        
        eee.style.visibility = "visible"
        xX.style.visibility = "visible"
    })

})
        // let para_2 = document.querySelector(".sec_page");
        // let para = para_2.firstElementChild;
        // para.style.padding = "2%";
   

//         window.addEventListener("scroll", function(){
//  setTimeout(function() {
//             let para_2 = document.querySelector(".sec_page");
//             // let para = para_2.firstElementChild;
//             // para.style.padding = "2%";
          
//             // Add more lines of code here if needed

//             para_2.style.visibility = "visible";
//           }, 1000);
//         });
       

let para_2 = document.querySelector(".sec_page");
let count = 0;
window.addEventListener("scroll",function(){
    let timer = setInterval(function() {
        para_2.style.visibility = "visible";
    
        // Increment count
        count++;
    
        // Clear the timer after the second execution
        if (count >= 2) {
            clearInterval(timer);
        }
    }, 2000); // Adjust the interval time to 1000 milliseconds (1 second)
});
let para_3 = document.querySelector(".thr_page");
let count1 = 0;
window.addEventListener("scroll",function(){
    let timer1 = setInterval(function() {
        para_3.style.visibility = "visible";
    
        // Increment count
        count1++;
    
        // Clear the timer after the second execution
        if (count1 >= 2) {
            clearInterval(timer1);
        }
    }, 3000); // Adjust the interval time to 1000 milliseconds (1 second)
});



















