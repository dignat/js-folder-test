var dayRate = function (rate) {
    var hours = 8;
    return rate * hours;
};
var daysInBudget = function (budget, rate) {
    if (rate === void 0) { rate = 89; }
    if (budget > 0) {
        return Math.floor(budget / rate);
    }
};
var priceWithMonthlyDiscount = function (rate, days, discount) {
    var billabledays = 22;
    var hours = 8;
    var months = Math.floor(days / billabledays);
    var ratePerDay = rate * hours;
    var ratePerMonth = ratePerDay * billabledays;
    var discountAmountPerMonth = (calcDiscount(ratePerMonth, discount));
    var discountAmount = discountAmountPerMonth * months;
    var exceedingDays = (days % 22) * ratePerDay;
    console.log(months, discountAmount);
    return Math.floor(discountAmount) + exceedingDays;
};
var calcDiscount = function (amount, discount) {
    var convertedDiscount = discount < 1 ? discount : discount / 100;
    var discountToApply = 100 - (convertedDiscount * 100);
    return amount * (discountToApply / 100);
};
console.log(priceWithMonthlyDiscount(16, 130, 0.15));
