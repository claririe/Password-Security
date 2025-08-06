const submit = document.getElementById("submit");
submit.addEventListener("click", getInfo);


function getInfo() {

  /* ------ functions ------*/
  let caesar = document.getElementById("c");
  let vigenere = document.getElementById("v");

  /* ------ encrypt boolean ------*/
  let encrypt = document.getElementById("r1");
  let decrypt = document.getElementById("r2");

  if (encrypt.checked) {
    boolean = true;
  }
  else if (decrypt.checked){
    boolean = false;
  } 
  else {
    alert("please select all buttons")
    return;
  }
  /* ------ shift key ------*/
  let shift = document.getElementById("shiftKey").value;
  shift = shift.toLowerCase();
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  

  if (caesar.checked) {
    if (isNaN(shift) || shift == "") {
    alert("shift key must be a number");
    return;
    }
    shift = Number(shift);
  }
  else if (vigenere.checked) {
    for (let i = 0; i < shift.length; i++) {
      if (alpha.includes(shift[i]) == false) {
        alert("shift key must be real letters");
        return;
      }
    }
  }
  else {
    alert("please select all buttons");
  }
  /* ------ text ------*/
  let input = (document.getElementById("textInput").value);
  input = input.toLowerCase();
  
  for (let i = 0; i < input.length; i++) {
    if (alpha.includes(input[i]) == false) {
      alert("text must be real letters");
      return;
    }
  }

  /* ------ call selected function ------*/

  if (caesar.checked) {
    document.getElementById("output").innerHTML = caesarCipher(boolean, shift, input);
  }
  else if (vigenere.checked){
    document.getElementById("output").innerHTML = vigenereCipher(boolean, shift, input);
  } 
}



/* -----------------------*/
/* ------ functions ------*/
/* -----------------------*/

/* ------ caesarCipher ------*/
function caesarCipher(encrypt, shift, input)
{
  let output = "";
  let alpha = "abcdefghijklmnopqrstuvwxyz";

  if (encrypt == false) {
    shift = 0 - shift;
  }

  for (let i = 0; i < input.length; i++) {
    index = (alpha.indexOf(input[i]) + shift) % 26;
    
    if (index < 0) {
      index = 26 + index;
    } 

    output = output + alpha[index];
  }

  return output;
}

/* ------ vigenereCipher ------*/
function vigenereCipher(encrypt, shiftKey, input)
{
  let output = "";
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  let beta = "";
  let x = 0;

  for (let i = 0; i < input.length; i++) {
    let alphaIndex = alpha.indexOf(shiftKey[x]);
    // getting the shifted alphabet
    for (let i = 0; i < alpha.length; i++) {
      let alphaIndex2 = (i + alphaIndex) % 26;
      beta = beta + alpha[alphaIndex2];
    }
    // encrypt/decrypt
     if (encrypt == true) {
      index = alpha.indexOf(input[i]);
      output = output + beta[index];
     }
     else {
      index = beta.indexOf(input[i]);
      output = output + alpha[index];
     }
    // makes sure shiftKey < its length
    if (x == (shiftKey.length - 1)) {
      x = 0;
    }
    else {
      x = x + 1;
    }
    // reset shifted alphabet
    beta = "";
  }
  return output;
}