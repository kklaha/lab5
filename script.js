const prices = {
    laptop: 50000,
    mouse: 1000,
    keyboard: 3000
};

const quantityInput = document.getElementById("quantity");     
const productSelect  = document.getElementById("product");    
const resultDiv      = document.getElementById("result");       
const calculateBtn   = document.getElementById("calculateBtn"); 

function calculate() {
    const quantity = Number(quantityInput.value);
    const selectedProduct = productSelect.value;
    const price = prices[selectedProduct];
    if (isNaN(quantity) || quantity < 1) {
        resultDiv.textContent = "❌ Введите корректное количество!";
        return; 
    }

    const totalCost = price * quantity;
    resultDiv.innerHTML = `
        🛒 Заказ: <strong>${quantity} шт.</strong><br>
        💰 Итого: <strong>${totalCost.toLocaleString()} руб.</strong>
    `;
}
calculateBtn.addEventListener("click", calculate);