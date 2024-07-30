
let yes = document.getElementById("yes");

let no = document.getElementById("no");

let massage = document.getElementById("massage");

let immmm = document.getElementById("imgg");
let immmmm = document.getElementById("imgggg");

no.addEventListener("mouseover",()=>{
    no.style.position = "absolute";
    no.style.top = Math.random()*40 + "vh";
    no.style.right = Math.random()*40+ "vw";
    console.log("click");
})

yes.addEventListener("click",()=>{
    massage.style.display= "block";
    yes.style.display = "none";
    no.style.display = "none";
    immmm.style.display="none";
    immmmm.style.display="block";
})

massage.addEventListener("click",()=>{
    massage.style.display= "none";
    yes.style.display = "block";
    yes.style.marginLeft="500px";
    no.style.display = "block";
    yes.style.marginLeft="550px";
    immmm.style.display="block";
    immmmm.style.display="none";
})

