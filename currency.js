let numberTagsList = document.getElementsByClassName("a-price-whole")
let symbolList = document.getElementsByClassName("a-price-symbol")
let decimalTagsList = document.getElementsByClassName("a-price-fraction")

let wholeTagsList = []
let fractionTagsList=[]
let full=[]

let totalList = document.getElementsByClassName("a-offscreen")
let tList=[]
let filteredTotalList=[]

let totalList2 = document.getElementsByClassName("a-spacing-none a-text-left a-size-mini twisterSwatchPrice")
let tList2=[]
let filteredTotalList2=[]

let totalList3 = document.getElementsByClassName("a-size-medium a-color-base _p13n-desktop-sims-fbt_fbt-desktop_total-amount__wLVdU")
let tList3 = []
let filteredTotalList3 = []

let totalList4 = document.getElementsByClassName("a-size-base")
let tList4 = []
let filteredTotalList4 = []

let totalList5 = document.getElementsByClassName("a-color-base")
let tList5 = []
let filteredTotalList5 = []

let totalList6 = document.getElementsByClassName("a-spacing-base")
let tList6 = []
let filteredTotalList6 = []

let totalList7 = document.querySelectorAll('span[aria-hidden="true"]')
let tList7 = []
let filteredTotalList7 = []

let totalList8 = document.querySelectorAll("sponsored-products-deal-discount-text a-text-strike")
let tList8 = []
let filteredTotalList8 = []


async function getConversionRate() {
    try {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        const data = await response.json();
        return data.rates.INR;
    } catch (error) {
        console.error('Error fetching exchange rate:', error);
        return null;
    }
}

async function convert(full, doc){
    let converted = []
    let a = await getConversionRate()
    for (const i of full){
        input = i*a
        converted.push(input.toFixed(0))
    }
    let count = 0
    for (const i of doc){
        i.innerHTML = "₹" + converted[count]
        count = count+1
    }

}

for(const i of numberTagsList){ 
    let input = i.textContent
    number = parseFloat(input)
    wholeTagsList.push(number)
}


for (const i of decimalTagsList){
    let input = i.textContent
    number = parseInt(input)
    let j = number/100
    fractionTagsList.push(j)
}


for (let i = 0 ; i<wholeTagsList.length; i++){
    input = wholeTagsList[i] + fractionTagsList[i];
    full.push(input)
}

for (const i of decimalTagsList){
    let input = i.textContent
    i.innerHTML = ""
}

for (const i of symbolList){
    let input = i.textContent
    i.innerHTML = ""
}

for (const i of totalList){
    input= i.textContent.trim()
    if (input.startsWith("$")){
        input = input.substring(1)
        let number = parseFloat(input)
        tList.push(number)
        filteredTotalList.push(i)
    }   
}

for (const i of totalList2){
    input= i.textContent.trim()
    if (input.startsWith("$")){
        input = input.substring(1)
        let number = parseFloat(input)
        tList2.push(number)
        filteredTotalList2.push(i)
    }   
}

for (const i of totalList2){
    input= i.textContent.trim()
    if (input.startsWith("$")){
        input = input.substring(1)
        let number = parseFloat(input)
        tList2.push(number)
        filteredTotalList2.push(i)
    }   
}

for (const i of totalList3){
    input= i.textContent.trim()
    if (input.startsWith("$")){
        input = input.substring(1)
        let number = parseFloat(input)
        tList3.push(number)
        filteredTotalList3.push(i)
    }   
}

for (const i of totalList4){
    input= i.textContent.trim()
    if (input.startsWith("$")){
        input = input.substring(1)
        let number = parseFloat(input)
        tList4.push(number)
        filteredTotalList4.push(i)
    }   
}

for (const i of totalList5){
    input= i.textContent.trim()
    if (input.startsWith("$")){
        input = input.substring(1)
        let number = parseFloat(input)
        tList5.push(number)
        filteredTotalList5.push(i)
    }   
}

for (const i of totalList6){
    input= i.textContent.trim()
    if (input.startsWith("$")){
        input = input.substring(1)
        input = input.slice(0,-10)
        let number = parseFloat(input)
        tList6.push(number)
        filteredTotalList6.push(i)
    }   
}

for (const i of totalList7){
    input= i.textContent.trim()
    if (input.startsWith("$")){
        console.log(input)
        input = input.substring(1)
        let number = parseFloat(input)
        tList7.push(number)
        filteredTotalList7.push(i)
    }   
}

for (const i of totalList8){
    input= i.textContent.trim()
    if (input.startsWith("$")){
        console.log(input)
        input = input.substring(1)
        let number = parseFloat(input)
        tList8.push(number)
        filteredTotalList8.push(i)
    }   
}


convert(full, numberTagsList)

convert(tList, filteredTotalList)

convert(tList2, filteredTotalList2)

convert(tList3, filteredTotalList3)

convert(tList4, filteredTotalList4)

convert(tList5, filteredTotalList5)

convert(tList6, filteredTotalList6)

convert(tList7, filteredTotalList7)

convert(tList8, filteredTotalList8)

