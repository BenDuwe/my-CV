/*******************************************************/
/*****************Show/hide card body*******************/
/*******************************************************/

/*****************On-click*******************/
let cards = document.querySelectorAll(".card-head");
let bodies =  document.querySelectorAll(".card-body");
let i;

for (i = 0; i < cards.length; i++) {
    let card = cards[i]
    let body = bodies[i];
    cards[i].addEventListener("click", function() {
        var icon = this.querySelector('.fas');
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');
        if (body.classList.contains("slideIn")){
            body.classList.toggle("slideOut");
            body.classList.toggle("slideIn");
        } else if (body.classList.contains("slideOut")){
            body.classList.toggle("slideIn");
            body.classList.toggle("slideOut");
        }
    });

}

/*****************Page-width check to change slide-state*****************/
let scrWidth = document.body.clientWidth;

if (scrWidth >= 820){
    let contactCard = document.getElementById("contact-body")
    let generalCard = document.getElementById("general-body")
    if (contactCard.classList.contains("slideIn")){
        contactCard.classList.toggle("slideOut");
        contactCard.classList.toggle("slideIn");
    }
    if (generalCard.classList.contains("slideIn")){
        generalCard.classList.toggle("slideOut");
        generalCard.classList.toggle("slideIn");
    }
    let contIcon = document.querySelector("#contactHead .fas");
    let genIcon = document.querySelector("#generalHead .fas");
    contIcon.classList.toggle('fa-plus');
    contIcon.classList.toggle('fa-minus');
    genIcon.classList.toggle('fa-plus');
    genIcon.classList.toggle('fa-minus');



}




