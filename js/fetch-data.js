const name = localStorage.getItem('name');
const office = localStorage.getItem('office');
const residency = localStorage.getItem('residency');
const fstmobileno = localStorage.getItem('fstmobileno');
const fsttelephone = localStorage.getItem('fsttelephone');
const email = localStorage.getItem('email');
const adharno = localStorage.getItem('adharno');
const gstin = localStorage.getItem('gstin');
const vehicleno = localStorage.getItem('vehicleno');
const dlno = localStorage.getItem('dlno');
const bankac = localStorage.getItem('bankac');
const accountno = localStorage.getItem('accountno')
const debitcardno = localStorage.getItem('debitcardno');
const creditcardno = localStorage.getItem('creditcardno');
const passportno = localStorage.getItem('passportno');
const panno = localStorage.getItem('panno');
const gender = localStorage.getItem('gender');
const language = localStorage.getItem('language');
const bloodgroup = localStorage.getItem('bloodgroup');
const secname = localStorage.getItem('secname');
const scdmobileno = localStorage.getItem('scdmobileno');
const sectelephone = localStorage.getItem('sectelephone');
const relation = localStorage.getItem('relation');

document.getElementById('name').textContent = name;
document.getElementById('office').textContent = office;
document.getElementById('residency').textContent = residency;
document.getElementById('fstmobileno').textContent = fstmobileno;
document.getElementById('fsttelephoneno').textContent = fsttelephone;
document.getElementById('emailid').textContent = email;
document.getElementById('adharno').textContent = adharno;
document.getElementById('gstin').textContent = gstin;
document.getElementById('vehicleno').textContent = vehicleno;
document.getElementById('dlno').textContent = dlno;
document.getElementById('bankac').textContent = bankac;
document.getElementById('accountno').textContent = accountno;
document.getElementById('debitcardno').textContent = debitcardno;
document.getElementById('creditcardno').textContent = creditcardno;
document.getElementById('passportno').textContent = passportno;
document.getElementById('panno').textContent = panno;
document.getElementById('gender').textContent=gender;
document.getElementById('language').textContent=language;
document.getElementById('bloodgroup').textContent = bloodgroup;
document.getElementById('secname').textContent = secname;
document.getElementById('secmobileno').textContent = scdmobileno;
document.getElementById('sectelephone').textContent = sectelephone;
document.getElementById('relation').textContent = relation;

function cleardata() {
    localStorage.clear();
    console.log("clear");
    location.reload();
}
function goback(){
    window.location.href = "index.html";
}
