function calculatePrice() {
    var exchangeprice = parseFloat(document.getElementById("exchangeprice").value);
    var percentage = parseFloat(document.getElementById("percentage").value);

    var price = exchangeprice - ((percentage/100)*exchangeprice);

    document.getElementById("result").textContent = "Total Cost: $" + price.toFixed(3);
}