class User {
  constructor(id, firstname, lastname, email, phone, postaddress, state, zip) {
    this.id = id
    this.firstName = firstname
    this.lastName = lastname
    this.email = email
    this.phone = phone
    this.postAddress = postaddress
    this.state = state
    this.zip = zip
  }
  get displayName(){
    return `${this.firstName} ${this.lastName}`
  }
}

let users = [];
user = new User;

document.getElementById('btncancel').addEventListener('click', cancel);
document.getElementById('formFirstname').addEventListener('keyup', userFnamevali);
document.getElementById('formLastname').addEventListener('keyup', userLnamevali);
document.getElementById('formEmail').addEventListener('keyup', emailVali);
document.getElementById('formPhone').addEventListener('keyup', phoneVali);
document.getElementById('formPostaladdress').addEventListener('keyup', addressVali);
document.getElementById('formState').addEventListener('mouseover', stateSelect);
document.getElementById('formZip').addEventListener('keyup', zipVali);
document.getElementById('btnsubmit').addEventListener('click', saveUser);
document.querySelector('#form-user').addEventListener('change', formValidation);
document.getElementById('btnsubmit').disabled = true;
//Cancel function
function cancel(ev){
  ev.preventDefault();
  document.querySelector('#form-user').reset();
}

const form = document.querySelector('#form-user');
const formFname = document.getElementById('formFirstname');
const formLname = document.getElementById('formLastname');
const formEmail = document.getElementById('formEmail');
const formPhone = document.getElementById('formPhone');
const formPostaladdress = document.getElementById('formPostaladdress');
const formState = document.getElementById('formState');
const formZip = document.getElementById('formZip');

//Validation of inputs
function formValidation(){
  if(userFnamevali() && userLnamevali() && emailVali() && phoneVali() && addressVali() && stateSelect() && zipVali()) {
    document.getElementById('btnsubmit').disabled = false;
    return true;
  } else {
    document.getElementById('btnsubmit').disabled = true;
    return false;
  }
}
function userFnamevali(){
  var letters = /^[A-Öa-ö]+$/;
  if(formFname.value.match(letters)){
    document.getElementById('formFirstnameVali').innerText = '';
    if(formFname.value.length < 2 ){
      document.getElementById('formFirstnameVali').innerText = 'Firstname must be greater then one letter';
      return false;
    }
    else{
      document.getElementById('formFirstnameVali').innerText = '';
      return true;
    }
  }
  else if(formFname.value === '' || formFname.value == null){
    document.getElementById('formFirstnameVali').innerText = 'You must enter a firstname';
    return false;
  } 
  else{
    document.getElementById('formFirstnameVali').innerText = 'Firstname must contain alphabet characters only';
    return false;
  }  
}
function userLnamevali(){
  var letters = /^[A-Öa-ö]+$/;
  if(formLname.value.match(letters)){
    document.getElementById('formLastnameVali').innerText = '';
    
    if(formLname.value.length < 2 ){
      document.getElementById('formLastnameVali').innerText = 'Lastname must be greater then one letter';
      return false;
    }
    else{
      document.getElementById('formLastnameVali').innerText = '';
      return true;
    }
  }
  else if(formLname.value === '' || formLname.value == null){
    document.getElementById('formLastnameVali').innerText = 'You must enter a lastname';
    formLname.focus();
    return false;
  }
  else{
    document.getElementById('formLastnameVali').innerText = 'Lastname must contain alphabet characters only';
    return false;
  }
}
function emailVali(){
  var pattern = /^[0-9a-zA-Z]+@[0-9a-zA-Z]+\.[a-zA-Z]{2,3}$/;
  if(formEmail.value.match(pattern)){
    document.getElementById('formEmailVali').innerText = '';
    return true;
  }
  else if(formEmail.value === '' || formEmail.value == null){
    document.getElementById('formEmailVali').innerText = 'You must enter an email address';
    formLname.focus();
    return false;
  }
  else{
    document.getElementById('formEmailVali').innerText = 'Invalid email';
    return false;
  }
}
function phoneVali(){
  var numbers = /^[0-9]+$/;
  if(formPhone.value.match(numbers)){
    document.getElementById('formPhoneVali').innerText = '';
    return true;
  }
  else if(formPhone.value === '' || formPhone.value == null){
    document.getElementById('formPhoneVali').innerText = 'You must enter a phonenumber';
    formLname.focus();
    return false;
  }
  else{
    document.getElementById('formPhoneVali').innerText = 'Phonenumber must have numeric characters only';
    return false;
  }
}
function addressVali(){
  //var alphanumber = /^[0-9a-öA-Ö]+$/;
    if(formPostaladdress.value  === '' || formPostaladdress.value == null){
      document.getElementById('formPostalAddressVali').innerText = 'You need to enter a postaladdress';
    }
    // else if(formPostaladdress.value.match(alphanumber)){
    //   document.getElementById('formPostalAddressVali').innerText = '';
    //   return true;
    // }
    else{
      document.getElementById('formPostalAddressVali').innerText = '';
      return true;
  }
}
function stateSelect(){
  if(formState.value == 'Choose...'){
    document.getElementById('formStateVali').innerText = 'Select a state from the list';
    return false;
  }
  else{
    document.getElementById('formStateVali').innerText = '';
    return true;
  }
}
function zipVali(){
 var zipone = /^[0-9]+$/;
 var ziptwo = /^[0-9]{3} [0-9]{2}$/;
  if(formZip.value.match(zipone) || formZip.value.match(ziptwo)){
    document.getElementById('formZipVali').innerText = '';
    return true;
  }
  else if(formZip.value  === '' || formZip.value == null){
    document.getElementById('formZipVali').innerText = 'You need to enter a zipcode';
    return false;
  }
  else{
    document.getElementById('formZipVali').innerText = 'ZIP code must have numeric characters only';
    return false;
  }
}
//Save user
function saveUser(ev){
  ev.preventDefault();

  user = {id: Date.now(), 
          firstName: document.getElementById('formFirstname').value, 
          lastName: document.getElementById('formLastname').value, 
          email: document.getElementById('formEmail').value, 
          phone: document.getElementById('formPhone').value,
          postAddress: document.getElementById('formPostaladdress').value, 
          state: document.getElementById('formState').value,
          zip: document.getElementById('formZip').value};
  users.push(user);
  document.getElementById('form-user').reset();
  createElement();
  fillPanel();

  console.log('added', {users} );
}
//CREATE ELEMENTS
function createElement () {
  userDiv = document.createElement('div')
  flipDiv = document.createElement('div')
  panelDiv = document.createElement('div')
  firstDiv = document.createElement('div')
  secondDiv = document.createElement('div')

  //Give them Class and ID
  flipDiv.className = "flip"
  panelDiv.className = "panel"
  firstDiv.className = "fD"
  secondDiv.className = "sD"
  userDiv.id = `${user.id}`
  flipDiv.id = `${user.id}-flip`
  panelDiv.id = `${user.id}-panel`

  flipDiv.innerText = `${user.firstName}` + ` ${user.lastName}`

  // Adds them to the DOM
  var currentDiv = document.getElementById('usersdiv');
  currentDiv.appendChild(userDiv)
  userDiv.appendChild(flipDiv)
  userDiv.appendChild(panelDiv)
  panelDiv.appendChild(firstDiv)
  panelDiv.appendChild(secondDiv)
}
//Populate the JQuery list
function fillPanel() {
  idElement = document.createElement("p")
  idElement.innerText = `Id: ${user.id}`

  emailElement = document.createElement("p")
  emailElement.innerText = `E-mail: ${user.email}`
  emailElement.id = `${user.id}-email`

  phoneElement = document.createElement("p")
  phoneElement.innerText = `Phone: ${user.phone}`
  phoneElement.id = `${user.id}-phone`
  
  postAdressElement = document.createElement("p")
  postAdressElement.innerText = `Postaddress: ${user.postAddress}`
  postAdressElement.id = `${user.id}-phone`

  stateElement = document.createElement("p")
  stateElement.innerText = `State: ${user.state}`
  stateElement.id = `${user.id}-state`
  
  zipElement = document.createElement("p")
  zipElement.innerText = `Zip: ${user.zip}`
  zipElement.id = `${user.id}-zip`
  
  firstDiv.appendChild(idElement)
  firstDiv.appendChild(emailElement)
  firstDiv.appendChild(phoneElement)
  secondDiv.appendChild(postAdressElement)
  secondDiv.appendChild(stateElement)
  secondDiv.appendChild(zipElement)
}

$("body").delegate(".flip", "click", function(){
  $(this).next(".panel").slideToggle("slow");
});
  
//  $(".panel").click(function() {
//     $("#users").append(`<div class="flip">Flip</div><div class="panel" style="display: none;">Panel</div>`)
//  });



