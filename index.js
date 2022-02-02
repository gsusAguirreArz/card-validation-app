import validator from "./validator.js";

document.onreadystatechange = () => {  
    switch (document.readyState){
        case "complete":

            let form = document.querySelector(".form");
            let inputCardNum = document.querySelector("#card-num");
        
            let resMasked = document.querySelector(".res-masking");
            let resNum = document.querySelector(".res-number");
        
            let resValid = document.querySelector(".res-valid");
            let resNumMasked = document.querySelector(".res-number-masked");
        
            let digits = "";
            let idx = 0;
        
            inputCardNum.addEventListener( "input", event => {
        
                let char = event.target.value.charAt(idx);
        
                if ( !( /\s/.test(char) ) && ( /\d/.test(char) ) ){
                    digits += String(char);
                    
                    if( idx <= 11 ) event.target.value = event.target.value.replace(char, "*");
                    
                    idx +=1;
        
                    resMasked.textContent = event.target.value;
                }
        
                resNum.textContent = digits;
            } );
            
            form.onsubmit = e => {
                e.preventDefault();
                resNumMasked.textContent = validator.maskify(digits);
                if ( digits.length == 16 ) resValid.textContent = ( validator.isValid(digits) ) ? `is valid card` : "invalid card";
            };

            break;
        default:
            break;
    }
};