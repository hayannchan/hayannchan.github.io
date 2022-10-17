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
    let purchase = document.getElementById("purchase");
    let prodAmount = document.getElementById("amount");
    let fieldAmount = document.getElementsByName("myamount");
    let price;
	
    const priceList = {
        Vision: 30000,
        Sword: [20000, 15000, 10000],
        Manul: [50000, 1000000]
    };

	let select = document.getElementsByName("myselect");
    select[0].addEventListener("change", function (event) {
        let selected = event.target;
        let radios = document.getElementById("myradios");
        let checkbox = document.getElementById("mycheckbox");

        let radioBtns = document.querySelectorAll("input[name=myradio]");
        radioBtns.forEach(function (radioBtn) {
            if (radioBtn.checked) {
                radioBtn.checked = false;
            }
        });

		let manul = document.getElementsByName("manul");
        if (manul[0].checked) {
            manul[0].checked = false;
        }

        prodAmount.style.display = "none";
        fieldAmount[0].value = "";

        purchase.innerHTML = "";

		if (selected.value === "1") {
            prodAmount.style.display = "block";
            radios.style.display = "none";
            checkbox.style.display = "none";
        } else if (selected.value === "2") {
            radios.style.display = "block";
            checkbox.style.display = "none";
        } else {
            prodAmount.style.display = "block";
            radios.style.display = "none";
            checkbox.style.display = "block";
        }
    });

	let radioBtns = document.querySelectorAll("input[name=myradio]");
    radioBtns.forEach(function (radioBtn) {
        radioBtn.addEventListener("change", function (event) {
            prodAmount.style.display = "block";

            let target = event.target;
            let amount = parseInt(fieldAmount[0].value);

            if (fieldAmount[0].value !== "") {
                if (target.value === "r1") {
                    price = amount * priceList.Sword[2];
                    purchase.innerHTML = "Price Sword of Fire Lord: " + price;
                } else if (target.value === "r2") {
                    price = amount * priceList.Sword[1];
                    purchase.innerHTML = "Price Katana of Forgotten Samurai: " + price;
                } else {
					price = amount * priceList.Sword[0];
                    purchase.innerHTML = "Price Rapier of The Last Ball: " + price;
				}
            }
        });
    });
	
	let manul = document.getElementsByName("manul");
    manul[0].addEventListener("change", function (event) {
        let target = event.target;
        let amount = parseInt(fieldAmount[0].value);

        if (fieldAmount[0].value !== "") {
            if (target.checked) {
                price = amount * priceList.Manul[1];
                purchase.innerHTML = "Price 1: " + price;
            } else {
                price = amount * priceList.Manul[0];
                purchase.innerHTML = "Price 0: " + price;
            }
        }
    });
	
	fieldAmount[0].addEventListener("input", function (event) {
        let target = event.target;

        const re = /\D/; 
        let checkAmount = target.value.match(re);

        if (checkAmount === null) {
            if (target.value !== "") {
                let amount = parseInt(target.value);

                if (select[0].value === "0") {
                    price = amount * priceList.Vision;
                    purchase.innerHTML = "Price: " + price;
                } else if (select[0].value === "1") {
                    if (radioBtns[0].checked) {
                        price = amount * priceList.Sword[2];
                        purchase.innerHTML = "Price 2: " + price;
                    } else if (radioBtns[1].checked) {
                        price = amount * priceList.Sword[1];
                        purchase.innerHTML = "Price 1: " + price;
                    } else {
						price = amount * priceList.Sword[0];
                        purchase.innerHTML = "Price 0: " + price;
					}
                } else {
                    if (manul[0].checked) {
                        price = amount * priceList.Manul[1];
                        purchase.innerHTML = "Price 1: " + price;
                    } else {
                        price = amount * priceList.Manul[0];
                        purchase.innerHTML = "Price 0: " + price;
                    }
                }
            } else {
                purchase.innerHTML = "";
            }
        } else {
            purchase.innerHTML = "Hm. Something wrong here.";
        }
    });


	
	let btn = document.getElementById("calc-btn");
    btn.addEventListener("click", onClick);
});