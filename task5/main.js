function onClick() {
    let amount = document.getElementsByName("amount"); 
    let cost = document.getElementsByName("cost");
    let result = document.getElementById("result");

    const re = /\D/; 
    let ifamount = amount[0].value.match(re);
    let ifcost = cost[0].value.match(re);

    if (amount[0].value === "" || cost[0].value === "") {
        result.innerHTML = "It's unfunny. Be normal.";
    } else if ((ifamount || ifcost) === null) {
        let intamount = parseInt(amount[0].value);
        let intcost = parseInt(cost[0].value);
        result.innerHTML = "Your bill: " + intamount * intcost;
    } else {
        result.innerHTML = "You know, you messed something up here.";
    }
}
window.addEventListener("DOMContentLoaded", function () {
    let btn = document.getElementById("calc-btn");
    btn.addEventListener("click", onClick);
});

let p = document.querySelector('input#href-btn');
p.addEventListener("click",function () { window.location.replace('https://www.youtube.com/watch?v=dQw4w9WgXcQ');});
