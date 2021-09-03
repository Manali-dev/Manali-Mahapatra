burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightnav = document.querySelector('.rightnav')
leftnav = document.querySelector('.leftnav')

burger.addEventListener('click', ()=>{
    rightnav.classList.toggle('v-class-resp');
    leftnav.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})

function getbtnsm(){
    let input= document.getElementById("search").value;
    input=input.toLowerCase();
    // alert(input);
    let x=document.getElementsByClassName("section");

    for(i=0 ; i<x.length ; i++){
        if(!x[i].innerHTML.toLowerCase().includes(input)){
            x[i].getElementsByClassName.display="none";
        }
        else{
            x[i].getElementsByClassName.display="section";
        }
    }
};

