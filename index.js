const body = document.body;
const bar = document.querySelector(".bar");

const updateBar = () => {
    var scrollpos = (window.scrollY / (body.scrollHeight-window.innerHeight) * 100);
    bar.style.width = `${scrollpos}%` ;
    requestAnimationFrame(updateBar)
}

updateBar();