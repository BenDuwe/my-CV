document.querySelector("body").addEventListener("mousemove", function(e) {
    e.target.style.setProperty('--x', `${ e.pageX }px`);
    e.target.style.setProperty('--y', `${ e.pageY }px`)
    console.log(e)
});