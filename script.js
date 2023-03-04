const homePage = document.querySelector('.home')
const personalPage = document.querySelector('.personal')
const car = document.querySelector('.car')
const homeLoan = document.querySelector('#homeLoan')
const intrestRate = document.querySelector('#intrestRate')
const loanTenure = document.querySelector('#loanTenture')
const total = document.querySelector('#total')
const totalandPer = document.querySelector('#totalandPer')
const diffAmount = document.querySelector('#diffAmount')
const mbtn = document.querySelector('.mbtn')
const ybtn = document.querySelector('.ybtn')
const homeLoaninRange = document.querySelector('#homeLoanInrange')
const intrestRateInrange = document.querySelector('#intrestRateInrange')
const loanTentureInRange = document.querySelector('#loanTentureInRange')
const forms = document.querySelector('form')

// console.log(car)
forms.addEventListener('submit', (e) => {
    e.preventDefault()
    homeLoaninRange.value = homeLoan.value
    intrestRateInrange.value = intrestRate.value
    loanTentureInRange.value = loanTenure.value
    mbtn.addEventListener('click', function () {
        if(homeLoan.value == '' || intrestRate.value=='' || loanTenure.value==''){
            alert('please enter correct value')
        }
        let emi = [((homeLoan.value) * (intrestRate.value) / 1200) * ((1 + (intrestRate.value) / 1200) ** loanTenure.value)] / [((1 + (intrestRate.value) / 1200) ** loanTenure.value) - 1];
        total.innerText = "₹" + Math.round(emi)
        const last = Math.abs(Number(homeLoan.value) - (emi * loanTenure.value))
        totalandPer.innerText = "₹" + Math.round(emi * loanTenure.value)
        diffAmount.innerText = "₹" + Math.round(last)
    })
    ybtn.addEventListener('click', function () {
        if(homeLoan.value == '' || intrestRate.value=='' || loanTenure.value==''){
            alert('please enter correct value')
        }
        const loanTentureval = (loanTenure.value * 12)
        let emi = [((homeLoan.value) * (intrestRate.value) / 1200) * ((1 + (intrestRate.value) / 1200) ** loanTentureval)] / [((1 + (intrestRate.value) / 1200) ** loanTentureval) - 1];
        total.innerText = "₹" + Math.round(emi)
        const last = Math.abs(Number(homeLoan.value) - (emi * loanTentureval))
        totalandPer.innerText = "₹" + Math.round(emi * loanTentureval)
        diffAmount.innerText = "₹" + Math.round(last)
    })
})



