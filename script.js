const { __esModule } = require("async");

window.start_loader = function () {
    const loader = document.getElementById('loader-holder')
    loader.style.display = 'flex';
}
window.end_loader = function () {
    const loader = document.getElementById('loader-holder')
    loader.style.display = 'none';
}

window.onload = function () {
    setTimeout(() => {
        end_loader()
    }, 500)

    const billForm = document.getElementById('calculate-bill-form')
    billForm.addEventListener('submit', function (e) {
        e.preventDefault()
        start_loader();

        const numberOfUnits = document.getElementById('number-of-units').value;
        const billingPeriod = document.getElementById('billing-period').value;

        noVAT = calculateBill(numberOfUnits, billingPeriod);
        yesVAT = calculateBillYVat(noVAT);

        setTimeout(() => {
            document.getElementById('units-number').textContent = parseFloat(numberOfUnits).toLocaleString("en-US", { style: "decimal", maximumFractionDigits: 2 })
            document.getElementById('billing-days').textContent = parseFloat(billingPeriod).toLocaleString("en-US", { style: "decimal", maximumFractionDigits: 2 });
            document.getElementById('total-without-vat').textContent = "€" + parseFloat(noVAT).toLocaleString("en-US", { style: "decimal", maximumFractionDigits: 2 })
            document.getElementById('total-including-vat').textContent = "€" + parseFloat( yesVAT).toLocaleString("en-US", { style: "decimal", maximumFractionDigits: 2 })

            document.getElementById('result').style.display = 'table';
            document.getElementById('reset-btn').style.display = 'block';
            end_loader()
        }, 500)

    })
    billForm.addEventListener('reset', function (e) {
        start_loader();
        setTimeout(() => {
            document.getElementById('units-number').textContent = ""
            document.getElementById('billing-days').textContent = ""
            document.getElementById('total-without-vat').textContent = " "
            document.getElementById('total-including-vat').textContent = " "
            document.getElementById('result').style.display = 'none';
            document.getElementById('reset-btn').style.display = 'none';
            end_loader()
        }, 500)
    })
}