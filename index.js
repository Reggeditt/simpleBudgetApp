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
const tdTithe = document.getElementById("tithe-amt")
const tdPTithe = document.getElementById("ptithe-amt")
const tdMed = document.getElementById("med-amt")
const tdRentP = document.getElementById("rent")
const tdFoodP= document.getElementById("food")
const tdTransP = document.getElementById("trans")
const tdUtilP = document.getElementById("util")
const tdClothingP = document.getElementById("clothing")
const tdSavingsP = document.getElementById("savings")
const tdMiscP = document.getElementById("misc")
const tdTitheP = document.getElementById("tithe")
const tdPTitheP = document.getElementById("ptithe")
const tdMedP = document.getElementById("med")

    
    
    //||window.localStorage.getItem('dRS')>0
    if(window.localStorage.getItem('dRS')==="null"){
        window.localStorage.setItem('dRS', '0');        
        window.localStorage.setItem('gS', '0'); 
        window.localStorage.setItem('tithe', '0'); 
        window.localStorage.setItem('ptithe', '0'); 
        window.localStorage.setItem('savings', '0'); 
        window.localStorage.setItem('income', '0'); 

    }
    
    buttonEl.addEventListener("click", ()=>{    
        const income = +incomeElement.value;
        const numDependants = +dependantsElement.value;
        let dRS =JSON.parse(window.localStorage.getItem('dRS'));        
        let gS =JSON.parse(window.localStorage.getItem('gS'));        
        // alert(`income is = ${income}drs = ${dRS} and gs = ${gS}`)
        let tithe = 0.1 * income;
        let savings = 0.2*income;
        let ptithe = 0.1*income;
        let spendableIncome =income-tithe;
        spendableIncome -=savings;
        spendableIncome -=ptithe;
        alert(`income = ${income}, spendble = ${spendableIncome}`)
        if(numDependants<3){
            dRS = 0.4*spendableincome;
            gS = spendableIncome - dRS;
        }else if(numDependants>=3&&numDependants<6){
            dRS = 0.5*spendableIncome;
            gS = spendableIncome - dRS;
    
        }else{
            dRS = 0.7*spendableIncome;
            gS = spendableIncome - dRS;
        }
        window.localStorage.setItem('tithe', JSON.stringify(tithe));        
        window.localStorage.setItem('ptithe', JSON.stringify(ptithe));        
        window.localStorage.setItem('dRS', JSON.stringify(dRS));        
        window.localStorage.setItem('gS', JSON.stringify(gS));        
        window.localStorage.setItem('savings', JSON.stringify(savings));        
        window.localStorage.setItem('income', JSON.stringify(income));        
        
        // alert(`drs = ${dRS} and gs = ${gS}`)
        

    })

    let income =JSON.parse(window.localStorage.getItem('income'));        
    let dRS =JSON.parse(window.localStorage.getItem('dRS'));        
    let gS =JSON.parse(window.localStorage.getItem('gS'));
    console.log(window.localStorage.getItem('tithe'))
    tdFood.innerText = `${dRS/5}`;
    tdMed.innerText = `${dRS/5}`;
    tdTithe.innerText = `${window.localStorage.getItem('tithe')}`;
    tdTrans.innerText = `${dRS/5}`;
    tdClothing.innerText = `${dRS/5}`;
    tdRent.innerText = `${gS/5}`;
    tdUtil.innerText =`${gS/5}`;
    tdPTithe.innerText = `${window.localStorage.getItem('ptithe')}`;
    tdSavings.innerText = `${window.localStorage.getItem('savings')}`;
    tdMisc.innerText = `${gS/5}`;

    tdFoodP.innerText = `${(dRS/5)*100/income}`;
    tdMedP.innerText = `${(dRS/5)*100/income}`;
    tdTitheP.innerText = `10`;
    tdTransP.innerText = `${(dRS/5)*100/income}`;
    tdClothingP.innerText = `${(dRS/5)*100/income}`;
    tdRentP.innerText = `${(gS/5)*100/income}`;
    tdUtilP.innerText =`${(gS/5)*100/income}`;
    tdPTitheP.innerText = `10`;
    tdSavingsP.innerText = `20`;
    tdMiscP.innerText = `${(gS/5)*100/income}`;
