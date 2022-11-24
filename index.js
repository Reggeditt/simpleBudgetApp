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
const tdRentP = document.getElementById("rent")
const tdFoodP= document.getElementById("food")
const tdTransP = document.getElementById("trans")
const tdUtilP = document.getElementById("util")
const tdClothingP = document.getElementById("clothing")
const tdSavingsP = document.getElementById("savings")
const tdMiscP = document.getElementById("misc")
const tdBillsP = document.getElementById("bills")
const tdInsP = document.getElementById("ins")
const tdMedP = document.getElementById("med")

    
    
    
    if(window.localStorage.getItem('dRS')==="null"){
        window.localStorage.setItem('dRS', '0');        
        window.localStorage.setItem('gS', '0'); 

    }
    
    buttonEl.addEventListener("click", ()=>{    
        const income = +incomeElement.value;
        const numDependants = +dependantsElement.value;
        let dRS =JSON.parse(window.localStorage.getItem('dRS'));        
        let gS =JSON.parse(window.localStorage.getItem('gS'));        
        // alert(`drs = ${dRS} and gs = ${gS}`)
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
        window.localStorage.setItem('dRS', JSON.stringify(dRS));        
        window.localStorage.setItem('gS', JSON.stringify(gS));        
        
        // alert(`drs = ${dRS} and gs = ${gS}`)
        

    })
    let dRS =JSON.parse(window.localStorage.getItem('dRS'));        
    let gS =JSON.parse(window.localStorage.getItem('gS'));
    tdFood.innerText = `${dRS/5}`;
    tdMed.innerText = `${dRS/5}`;
    tdBills.innerText = `${dRS/5}`;
    tdTrans.innerText = `${dRS/5}`;
    tdClothing.innerText = `${dRS/5}`;
    tdRent.innerText = `${gS/5}`;
    tdUtil.innerText =`${gS/5}`;
    tdIns.innerText = `${gS/5}`;
    tdSavings.innerText = `${gS/5}`;
    tdMisc.innerText = `${gS/5}`;
    tdFoodP.innerText = `${(dRS/5)*100/(gS+dRS)}`;
    tdMedP.innerText = `${(dRS/5)*100/(gS+dRS)}`;
    tdBillsP.innerText = `${(dRS/5)*100/(gS+dRS)}`;
    tdTransP.innerText = `${(dRS/5)*100/(gS+dRS)}`;
    tdClothingP.innerText = `${(dRS/5)*100/(gS+dRS)}`;
    tdRentP.innerText = `${(gS/5)*100/(gS+dRS)}`;
    tdUtilP.innerText =`${(gS/5)*100/(gS+dRS)}`;
    tdInsP.innerText = `${(gS/5)*100/(gS+dRS)}`;
    tdSavingsP.innerText = `${(gS/5)*100/(gS+dRS)}`;
    tdMiscP.innerText = `${(gS/5)*100/(gS+dRS)}`;

    // alert(`drs = ${dRS} and gs = ${gS}`)