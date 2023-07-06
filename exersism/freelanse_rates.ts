const dayRate = (rate: number) => {
    const hours = 8;

    return rate * hours;
}

const daysInBudget = (budget: number, rate: number = 89) => {
    if (budget > 0) {
        return Math.floor(budget / rate);
    }
}

const priceWithMonthlyDiscount = (rate: number, days: number, discount: number) => {
    const billabledays = 22;
    const hours = 8; 
    const months = Math.floor(days/billabledays);
    const ratePerDay = rate * hours;
    const ratePerMonth = ratePerDay * billabledays;

    const discountAmountPerMonth = calcDiscount(ratePerMonth, discount);
    const discountAmount =  discountAmountPerMonth * months;
    const exceedingDays = (days % billabledays) * ratePerDay;

    return Math.ceil(discountAmount+ exceedingDays);

}

const calcDiscount = (amount: number, discount: number) => {
    const convertedDiscount = discount < 1 ? discount : discount / 100
    const discountToApply = 100 - (convertedDiscount*100)
    return amount * (discountToApply/100)
}

console.log(priceWithMonthlyDiscount(16, 130, 0.15))