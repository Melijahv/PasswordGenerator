

// Assignment Code

var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  
  var password = "";
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  

}

// Add event listener to generate button
document.addEventListener("click", function(evnt){
  
  btnPressed(evnt.target.id);
});

///////////////////  BUTTON HANDLING  ////////////////////////////////

function btnPressed(btnp) {
	switch (btnp)
	{
	case "start":

        generatePassword();
        var startVal = document.getElementById("pwInput").value;
        getValue(startVal);

	break
  case "genPwButton":
  
        makePassWord();

    
	default:
		
	}
}



function generatePassword()
{
  
  
//creat div to hold the form

  var pWindow = document.createElement("Div");
  pWindow.id = "getData";             
  pWindow.setAttribute('class', 'pClass'); //asign a class .css 


//create the form to contain the inputs
  var form = document.createElement("div");
  form.setAttribute('class','fClass');
  
  
/////////////////////////////////   CREATE THE INPUTS FOR PW GENERATOR //////////////
  
  function makeRadioInputs()
  {

    var numOfInputs = 4;
    const inputNames = ['Upper Case','Lower Case:','Alpha Numeric:','Special Characters:']
    
        for(let i=0;i<numOfInputs;i++)
        {


          var selectText = document.createElement("p");
              selectText.innerHTML = inputNames[i];

          var radioYes = document.createElement("input");
              radioYes.type = "radio";
              radioYes.checked = true;
              radioYes.setAttribute('id',i);
              radioYes.setAttribute('value','yes');
              radioYes.setAttribute('name',inputNames[i]);
          
          var radioNo = document.createElement("input");
              radioNo.type = "radio";
              radioNo.setAttribute('id',i);
              radioNo.setAttribute('value','no');
              radioNo.setAttribute('name',inputNames[i]);
          
          var format = document.createElement("p");
              format.setAttribute('id','pFormat')
          
          var yesNo = document.createTextNode("Yes");
          var noYes = document.createTextNode("No");
          

          
          form.appendChild(selectText);
          selectText.appendChild(format);
          format.appendChild(yesNo);
          format.appendChild(radioYes);
          format.appendChild(noYes);
          format.appendChild(radioNo);
          

        }  
    var pwText = document.createElement('p');
        pwText.setAttribute("id","textValue")
    var pwlen = document.createTextNode("Password length");    
    var pwFormat = document.createElement("p");
        pwFormat.setAttribute('id','pFormat');    

    var pwLength = document.createElement("input");
        pwLength.type ="range";
        pwLength.setAttribute("value","50");
        pwLength.setAttribute("id","pwInput");
        pwLength.setAttribute("min","8");
        pwLength.setAttribute("max","128");
        pwLength.setAttribute("oninput","getValue(value)");

    var slideValue = document.createElement("output");
        slideValue.setAttribute("for","pwInput");
        slideValue.setAttribute("id","slideValue");    
        


        form.appendChild(pwText);
        pwText.appendChild(pwlen);
        pwText.appendChild(pwFormat);
        pwFormat.appendChild(slideValue);
        pwFormat.appendChild(pwLength);
        

    var genButton = document.createElement("button");
        genButton.setAttribute("class","btn");
        genButton.setAttribute("id","genPwButton");
        genButton.innerHTML = "Finalize Password"
        form.appendChild(genButton);
  


  }
  makeRadioInputs();
  pWindow.appendChild(form);
  document.getElementsByTagName("body")[0].appendChild(pWindow);

}
/////////////////////////  FOR THE SLIDER APPEND //////////////////////
function getValue(slider){
  document.querySelector('#slideValue').value = slider;


}

///////////////////////// MAKE THE PASSWORD    ///////////////////////////

function makePassWord(){

  let upLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let num  =  "0123456789";
  let spcChar ="`~!@#$%^&*()_-=+[{]};:'\|,<.>/?"
  let letters = "abcdefghijklmnopqrstuvwxyz";
  let pwHolder = "";
  let password = "";
  let pwLength = document.getElementById("pwInput").value;
  let upCase = document.getElementById("0").checked;
  let lowCase = document.getElementById("1").checked;
  let alph = document.getElementById("2").checked;
  let spc_ = document.getElementById("3").checked;
  
  if(lowCase == true){
    
    pwHolder += letters;

  }
  if(upCase == true){
    
    pwHolder += upLetters;

  }
  if(alph == true){

    pwHolder += num;

  }
  if(spc_ == true){

    pwHolder += spcChar;

  }
  
  if(pwHolder.length == "0"){

    alert("Choose atleast one character type");
    return;

  }

  for (let i = 0; i < pwLength; i++) {
      let generate = pwHolder[Math.floor(Math.random() * pwHolder.length)];
      password += generate;

  }


  document.getElementById("password").innerHTML = password;
  var remove = document.getElementById("getData");
  remove.remove();




}

