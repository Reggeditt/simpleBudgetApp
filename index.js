// const nameElement = document.getElementById("name");
const incomeElement = document.getElementById("income");
const dependantsElement = document.getElementById("dependants");
const buttonEl = document.getElementById("submit-btn")
const tdRent = document.getElementById("rent-amt")
const tdFood = document.getElementById("food-amt")
const tdTrans = document.getElementById("trans-amt")
const tdUtil = document.getElementById("util-amt")
const tdClothing = document.getElementById("clothing-amt")
const tdSavings = document.getElementById("savings-amt")
const tdMisc = document.getElementById("misc-amt")
const tdBills = document.getElementById("bills-amt")
const tdIns = document.getElementById("ins-amt")
const tdMed = document.getElementById("med-amt")

buttonEl.addEventListener("click", ()=>{
    
    const income = +incomeElement.value;
    const numDependants = +dependantsElement.value;
    let dRS = 0;//dRS = dependant related spending
    let gS = 0;//gs = general spending
    if(numDependants<3){
        dRS = 0.4*income;
        gS = income - dRS;

    }else if(numDependants>=3&&numDependants<6){
        dRS = 0.5*income;
        gS = income - dRS;

    }else{
        dRS = 0.7*income;
        gS = income - dRS;
    }
    
    tdFood.innerText =`${dRS/5}`;
    tdMed.innerText = `${dRS/5}`;
    tdBills.innerText = `${dRS/5}`;
    tdTrans.innerText = `${dRS/5}`;
    tdClothing.innerText = `${dRS/5}`;
    tdRent.innerText = `${gS/5}`;
    tdUtil.innerText =`${gS/5}`;
    tdIns.innerText = `${gS/5}`;
    tdSavings.innerText = `${gS/5}`;
    tdMisc.innerText = `${gS/5}`;

    alert(`the income is ${income} and the dependants are ${numDependants}\n
    \ncategory    \tamount \tpercentage\n
            food\t${dRS/5}\t\n
       transport\t${dRS/5}\t\t\n
       medical\t${dRS/5}\t\t\n
       clothing\t${dRS/5}\t\n
       sch bills\t${dRS/5}\t\n
    `)
    
    
    
    
    
    
    // rent = ${gSar[0]}
    // utility = ${gSar[1]}
    // insurance = ${gSar[2]}
    // savings = ${gSar[3]}
    // investments = ${gSar[4]}
    // `)

})
