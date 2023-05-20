
const calculate = (e) => {
    e.preventDefault();

    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyRepayment = document.getElementById('monthly-payment');
    const totalInterest = document.getElementById('total-interest');
    const totalPayment = document.getElementById('total-payment');

    const principal  = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;

    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly  = (principal*x*calculatedInterest)/(x-1);

    if(isFinite(monthly)){
        monthlyRepayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly*calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly*calculatedPayments) - principal).toFixed(2);
    } else {
        showError('Please check your numbers');
    }
}

const showError = (error) => {
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'alert alert-danger';
    errorDiv.append(document.createTextNode(error));
    card.insertBefore(errorDiv, heading);

    setTimeout(clearError, 3000);
}

const clearError = () => {
    document.querySelector('.alert').remove();
}

document.getElementById('loan-form').addEventListener('submit', calculate);
