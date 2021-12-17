document.querySelector('.words').addEventListener('keyup', function countWord() {
    let res = [];
    let str = this.value.replace(/[\t\n\r\.\?\!]/gm, " ").split(" ");
    str.map((s) => {
        let trimStr = s.trim();
        if (trimStr.length > 0) {
            res.push(trimStr);
        }
    });
    document.querySelector('.count').innerText = res.length;

    let element = document.getElementById("feedback");
    let redBorder = document.getElementById("floatingTextarea2")
    if (res.length >= 100) {
        element.classList.remove("d-none");
        redBorder.classList.add("border-danger");
    } else {
        element.classList.add("d-none");
        redBorder.classList.remove("border-danger");
    } 
})


document.querySelector('textarea').addEventListener('keydown', function autosize() {
        let el = this;
    setTimeout(function() {
        el.style.cssText = 'height:auto; padding:1rem';
        el.style.cssText = 'height:' + el.scrollHeight + 'px';
    }, 0)
})