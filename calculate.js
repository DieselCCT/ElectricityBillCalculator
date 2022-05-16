var VAT = 0.135;
var rate = 0.20;
var standingCharges = 0.04;
var noVAT, yesVAT = 0;

function calculateBill(numberOfUnits, billingPeriod){

    noVAT = (parseFloat(numberOfUnits) * parseFloat(rate)) + (parseFloat(billingPeriod) * parseFloat(standingCharges));

    return noVAT.toFixed(2);
}

function calculateBillYVat(noVAT){
    yesVAT = parseFloat(noVAT) + (parseFloat(noVAT) * parseFloat(VAT));

    return yesVAT.toFixed(2);
}

module.exports = {
    calculateBill: calculateBill,
}