const validator = {
    "isValid": creditCardNumber => {
        // Length validation
        if ( creditCardNumber.length != 16 ){
            console.log("El numero de la tarjeta es invalido");
            return false;
        }

        let x = "";
        
        for ( let i = 0; i < creditCardNumber.length; i++ ){
            if ( i % 2 == 0 ) x += luhnOps(creditCardNumber[i]);
            else x += creditCardNumber[i];
        }
        
        let sum = 0;

        for ( let i = 0; i < x.length; i++ ) sum += Number(x[i]);
        
        return sum % 10 == 0;
    },
    "maskify": creditCardNumber => {
        // Digits Validation
        if ( /[\d]/g.test( creditCardNumber ) ){
            return creditCardNumber.slice(0,-4).replace( /[\d]/g, "*").concat( creditCardNumber.slice( -4, creditCardNumber.len ) );
        }
        console.log("ERROR: Credit card numbers should be digits.");
        return null;
        
    }
};

export default validator;

function luhnOps( char_digt ) {
    let x = Number(char_digt);
    x *= 2;
    if ( x > 9 ){
        let y = String(x);
        x = Number(y[0]) + Number(y[1]);
    }
    return String(x);
}