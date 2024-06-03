function calculate() {
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var days = parseInt(document.getElementById("days").value);

    var dailyRate = rate / 365;
    var interest = (principal * dailyRate * days) / 100;
    var totalAmount = principal + interest;

    document.getElementById("interest").textContent = "₹" + interest.toFixed(2);
    document.getElementById("totalAmount").textContent = "₹" + totalAmount.toFixed(2);
}
