let daysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let maleKhanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femaleKhanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
let formValidation = function(){
    hideElement();
    let dateData = document.forms["khanEntry"]["data"].value
    let genderData = document.forms["khanEntry"]["gender"].value
    if(dateData == "" || genderData == ""){
        unhideElement();
      alert("Ensure all inputs are entered correctly to get your Khan name") 
      return false;
