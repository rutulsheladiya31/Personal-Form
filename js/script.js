const form = document.getElementById('form');
const name = document.getElementById('name');
const office = document.getElementById('office');
const residency = document.getElementById('residency');
const fstmobileno = document.getElementById('fstmobileno');
const fsttelephone = document.getElementById('fsttelephone');
const email = document.getElementById('email');
const adharno = document.getElementById('adharno');
const gstin = document.getElementById('gstin');
const vehicleno = document.getElementById('vehicleno');
const dlno = document.getElementById('dlno');
const bankac = document.getElementById('bankac');
const accountno = document.getElementById('accountno');
const debitcardno = document.getElementById('debitcardno');
const creditcardno = document.getElementById('creditcardno');
const passportno = document.getElementById('passportno');
const panno = document.getElementById('panno');
const gender = document.getElementById('gender');
const bloodgroup = document.getElementById('bloodgroup');
const secname = document.getElementById('secname');
const scdmobileno = document.getElementById('scdmobileno');
const sectelephone = document.getElementById('sectelephone');
const relation = document.getElementById('relation');

form.addEventListener('submit', function(e) {
    e.preventDefault();


    // Validations

    // validation for name
    if (document.getElementById('name').value == "") {
        alert("Please Enter The Name");
        document.getElementById('name').focus();
        return true;
    } else {
        if (!/^[a-z A-Z]+$/.test(document.getElementById('name').value)) {
            alert("Please Enter Valid Name");
            document.getElementById('name').focus();
            return true;
        }
    }

    // validation for office
    if (document.getElementById('office').value == "") {
        alert("Enter Office");
        document.getElementById('name').focus();
        return false;
    }

    // validation for residency
    if (document.getElementById('residency').value == "") {
        alert("Enter Residency");
        document.getElementById('residency').focus();
        return false;
    }

    // validation for mobile number
    var Mobile = document.getElementById('fstmobileno').value;
    if (Mobile == "") {
        alert("Please Enter Mobile Number");
        document.getElementById('fstmobileno').focus();
        return false;
    }
    if (isNaN(Mobile)) {
        alert("Enter the Valid Mobile Number(Like : 9876543211)...");
        document.getElementById('fstmobileno').focus();
        return false;
    }
    if ((Mobile.length < 10) || (Mobile.length > 10)) {
        alert("Mobile Number Must Be Contain 10 Digits.");
        document.getElementById('fstmobileno').focus;
        return false;
    }

    // validation for telephone number
    var TelephoneNo = document.getElementById('fsttelephone').value;
    if (TelephoneNo == "") {
        alert("Enter Telephone Number.");
        document.getElementById('fsttelephone').focus();
        return false;
    }
    if (isNaN(TelephoneNo)) {
        alert("Enter the Valid Telephone Number Number(Like:123-456-78)...");
        document.getElementById('fsttelephone').focus();
        return false;
    }
    if ((TelephoneNo.length < 8) || (TelephoneNo.length > 8)) {
        alert("Telephone Number Must Be Contain 8 Digits.");
        document.getElementById('fsttelephone').focus;
        return false;
    }

    // validation for email
    if (document.getElementById('email').value == "") {
        alert("Enter Email Id.");
        document.getElementById('email').focus();
        return false;
    }

    if (!/^[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9]{2,4}$/.test(document.getElementById('email').value)) {
        alert("Please Enter Valid Email Id");
        document.getElementById('email').focus();
        return false;
    }

    // validation for adharcard number
    var Adhar = document.getElementById('adharno').value;
    if (document.getElementById('adharno').value == "") {
        alert("Enter Valid Adhar Card Number.");
        document.getElementById('adharno').focus();
        return false;
    }
    if (isNaN(Adhar)) {
        alert("Enter the Valid Adharcard Number That contain Only Numeric Number.");
        document.getElementById('fsttelephone').focus();
        return false;
    }
    if ((Adhar.length < 12) || (Adhar.length > 12)) {
        alert("Adhar Card Must Be Contain 12 Digits.");
        document.getElementById('adharno').focus;
        return false;
    }

    // validation for GST number
    if (document.getElementById('gstin').value == "") {
        alert("Enter GST Number.");
        document.getElementById('gstin').focus();
        return false;
    }

    // validation for vehicle number
    if (document.getElementById('vehicleno').value == "") {
        alert("Enter Vehicle Number.");
        document.getElementById('vehicleno').focus();
        return false;
    }

    // validation for DL number
    if (document.getElementById('dlno').value == "") {
        alert("Enter DLNO Number.");
        document.getElementById('dlno').focus();
        return false;
    }

    // validation for bank account
    if (document.getElementById('bankac').value == "") {
        alert("Enter Bank Account.");
        document.getElementById('bankac').focus();
        return false;
    }

    // validation for bank account number
    if (document.getElementById('accountno').value == "") {
        alert("Enter Bank Account Number.");
        document.getElementById('accountno').focus();
        return false;
    }
    if (isNaN(document.getElementById('accountno').value)) {
        alert("Enter the Valid Bank Account Number That Contain Only Numeric Number");
        document.getElementById('accountno').focus();
        return false;
    }

    // validation for debitcard
    if (document.getElementById('debitcardno').value == "") {
        alert("Enter Debit Card Number.");
        document.getElementById('debitcardno').focus();
        return false;
    }

    // validation for credit card
    if (document.getElementById('creditcardno').value == "") {
        alert("Enter Credit Card Number.");
        document.getElementById('creditcardno').focus();
        return false;
    }

    // validation for passport
    if (document.getElementById('passportno').value == "") {
        alert("Enter Passport Number.");
        document.getElementById('passportno').focus();
        return false;
    }

    // validation for pancard
    if (document.getElementById('panno').value == "") {
        alert("Enter Pan Card Number.");
        document.getElementById('panno').focus();
        return false;
    }

    // validation for blood group
    if (document.getElementById('bloodgroup').value == "") {
        alert("Enter Bloodgroup.");
        document.getElementById('bloodgroup').focus();
        return false;
    }


    // validation for name
    if (document.getElementById('secname').value == "") {
        alert("Please Enter The Name");
        document.getElementById('secname').focus();
        return false;
    }
    if (!/^[a-z A-Z]+$/.test(document.getElementById('secname').value)) {
        alert("Please Enter Valid Name");
        document.getElementById('secname').focus();
        return false;
    }

    // validation for mobile number
    var secMobile = document.getElementById('scdmobileno').value;
    if (secMobile == "") {
        alert("Please Enter Mobile Number");
        document.getElementById('scdmobileno').focus();
        return false;
    }
    if (isNaN(secMobile)) {
        alert("Enter the Valid Mobile Number(Like : 9876543211)...");
        document.getElementById('scdmobileno').focus();
        return false;
    }
    if ((secMobile.length < 10) || (secMobile.length > 10)) {
        alert("Mobile Number Must Be Contain 10 Digits.");
        document.getElementById('scdmobileno').focus;
        return false;
    }

    // validation for telephone number
    var secTelephoneNo = document.getElementById('sectelephone').value;
    if (secTelephoneNo == "") {
        alert("Enter Telephone Number.");
        document.getElementById('sectelephone').focus();
        return false;
    }
    if (isNaN(secTelephoneNo)) {
        alert("Enter the Valid Telephone Number Number(Like:123-456-78)...");
        document.getElementById('sectelephone').focus();
        return false;
    }
    if ((secTelephoneNo.length < 8) || (secTelephoneNo.length > 8)) {
        alert("Telephone Number Must Be Contain 8 Digits.");
        document.getElementById('sectelephone').focus;
        return false;
    }

    // validation for relation
    if (document.getElementById('relation').value == "") {
        alert("Please Enter The Relation");
        document.getElementById('relation').focus();
        return false;
    }

    // End validation

    const nameValue = name.value;
    const officeValue = office.value;
    const residencyValue = residency.value;
    const fstmobilenoValue = fstmobileno.value;
    const fsttelephoneValue = fsttelephone.value;
    const emailValue = email.value;
    const adharnoValue = adharno.value;
    const gstinValue = gstin.value;
    const vehiclenoValue = vehicleno.value;
    const dlnoValue = dlno.value;
    const bankacValue = bankac.value;
    const accountnoValue = accountno.value;
    const debitcardnoValue = debitcardno.value;
    const creditcardnoValue = creditcardno.value;
    const passportnoValue = passportno.value;
    const pannoValue = panno.value;
    const genderValue = gender.value;
    const bloodgroupValue = bloodgroup.value;
    const secnameValue = secname.value;
    const scdmobilenoValue = scdmobileno.value;
    const sectelephoneValue = sectelephone.value;
    const relationpValue = relation.value;


    localStorage.setItem('name', nameValue);
    localStorage.setItem('office', officeValue);
    localStorage.setItem('residency', residencyValue);
    localStorage.setItem('fstmobileno', fstmobilenoValue);
    localStorage.setItem('fsttelephone', fsttelephoneValue);
    localStorage.setItem('email', emailValue);
    localStorage.setItem('adharno', adharnoValue);
    localStorage.setItem('gstin', gstinValue);
    localStorage.setItem('vehicleno', vehiclenoValue);
    localStorage.setItem('dlno', dlnoValue);
    localStorage.setItem('bankac', bankacValue);
    localStorage.setItem('accountno', accountnoValue);
    localStorage.setItem('debitcardno', debitcardnoValue);
    localStorage.setItem('creditcardno', creditcardnoValue);
    localStorage.setItem('passportno', passportnoValue);
    localStorage.setItem('panno', pannoValue);
    localStorage.setItem('gender', genderValue);
    localStorage.setItem('bloodgroup', bloodgroupValue);
    localStorage.setItem('secname', secnameValue);
    localStorage.setItem('scdmobileno', scdmobilenoValue);
    localStorage.setItem('sectelephone', sectelephoneValue);
    localStorage.setItem('relation', relationpValue);

    window.location.href = "showdata.html";
})