let cards = document.querySelectorAll(".card-head");
var bodies =  document.querySelectorAll(".card-body");
var i;

for (i = 0; i < cards.length; i++) {
    let collapse = bodies[i];
    cards[i].addEventListener("click", function() {
        var icon = this.querySelector('.fas');
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');
        collapse.classList.toggle("hidden");
    });
    }