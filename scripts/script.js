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
function sliderCheck(){

    let scrWidth = document.body.clientWidth;
    let contactCard = document.getElementById("contact-body")
    let generalCard = document.getElementById("general-body")


    if (scrWidth >= 820){
        if (contactCard.classList.contains("slideIn")){
            contactCard.classList.toggle("slideOut");
            contactCard.classList.toggle("slideIn");
        }
        if (generalCard.classList.contains("slideIn")){
            generalCard.classList.toggle("slideOut");
            generalCard.classList.toggle("slideIn");
        }

        for (i = 0; i < 2; i++) {
            let card = cards[i];
            var icon = card.querySelector('.fas');
            if (icon.classList.contains("fa-plus")){
                icon.classList.toggle('fa-plus');
                icon.classList.toggle('fa-minus');
            }
        }
    } else {
        if (contactCard.classList.contains("slideOut")){
            contactCard.classList.toggle("slideOut");
            contactCard.classList.toggle("slideIn");
        }
        if (generalCard.classList.contains("slideOut")){
            generalCard.classList.toggle("slideOut");
            generalCard.classList.toggle("slideIn");
        }

        for (i = 0; i < 2; i++) {
            let card = cards[i];
            var icon = card.querySelector('.fas');
            if (icon.classList.contains("fa-minus")){
                icon.classList.toggle('fa-plus');
                icon.classList.toggle('fa-minus');
            }
        }
    }
}