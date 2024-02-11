function validateMastercard(inputtxt) {
    var cardno = /^5[1-5][0-9]{14}$/;
    if (inputtxt.match(cardno)) {
      return true;
    } else {
      return false;
    }
  }
  
  function validateCreditCard(inputtxt) {
    var mastercard = /^5[1-5][0-9]{14}$/;
    var visa = /^4[0-9]{12}(?:[0-9]{3})?$/;
    var cardnames = ["Mastercard", "Visa"];
  
    if (inputtxt.match(mastercard)) {
      return cardnames[0];
    } else if (inputtxt.match(visa)) {
      return cardnames[1];
    } else {
      return false;
    }
  }
  
  console.log(validateCreditCard("5101234567890123"));
  console.log(validateCreditCard("4101234567890123"));
  console.log(validateCreditCard("510123456789012"));
  console.log(validateCreditCard("1101234567890123"));


  /*
  The regular expression pattern used for Mastercard validation in 
  the validateMastercard and validateCreditCard functions is /^5[1-5][0-9]{14}$/.
so the regular expression pattern is designed to validate a Mastercard number
 by ensuring it starts with 5, followed by a digit between 1 and 5, and is then followed by 14 additional digits,
  resulting in a total of 16 digits in the card number...
