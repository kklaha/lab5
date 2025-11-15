const prices = {
    laptop: 50000,
    mouse: 1000,
    keyboard: 3000
};
let quantityInput, productSelect, resultDiv, calculateBtn;
function calculate(event) {
    const quantity = Number(quantityInput.value);
    const selectedProduct = productSelect.value;
    const price = prices[selectedProduct];
    if (isNaN(quantity) || quantity < 1) {
        resultDiv.textContent = "Введите корректное количество!";
        return;
    }
    const totalCost = price * quantity;
    resultDiv.innerHTML = `
        Заказ: <strong>${quantity} шт.</strong><br>
        Итого: <strong>${totalCost.toLocaleString()} руб.</strong>
    `;
}
function onClick(event) {
    event.preventDefault();
    alert("click");
}
window.addEventListener('DOMContentLoaded', function () {
    console.log("DOM fully loaded and parsed");
    quantityInput = document.getElementById("quantity");
    productSelect = document.getElementById("product");
    resultDiv = document.getElementById("result");
    calculateBtn = document.getElementById("calculateBtn");
    const myButton = document.getElementById("my-button");
    calculateBtn.addEventListener("click", calculate);
    myButton.addEventListener("click", onClick);
});


