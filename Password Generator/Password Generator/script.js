
const createPassword=() => {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwtzABCDEFGHIJKLMNOPQURSTVWXYZ!@#$%^&*()<>{}[]:;/?|";
  let passwordLength = 22;
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    let randomInteger = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomInteger, randomInteger + 1);
  }
  document.getElementById("Password").value = password;
}

const copyPassword = () => {
 
  let copiedPassword = document.getElementById("Password");

  
  copiedPassword.select();

  
  document.execCommand("copy");

  
  alert ("Copied! " + copiedPassword.value);
}

document.getElementById("btn1").onclick = () => {
  createPassword();
};
document.getElementById("btn2").onclick = () => {
  copyPassword();
};

