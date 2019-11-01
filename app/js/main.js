
window.addEventListener('load', formRegistration)
window.addEventListener('load', blur)



function blur(){PageBlur({
    opti: true,
    kOpti: 25,
    radius: 8,
    algorithm: 'stack'
})};


function formRegistration() {

//------variables
    
var $btnLog = document.getElementById("log")
var $popup = document.getElementById("logForm")
var $formIn = document.getElementById("form-in")
var $close = document.getElementById("close")
var $mask = document.getElementById('mask')
var $accept = document.getElementById('accept')
var $formAccept = document.getElementById('formRegister')
var $btnNewPass = document.getElementById('btnNewPass');
var $formNewPass = document.getElementById('formNewPass');
var $btnOldPass = document.getElementById('btnOldPass');
var $btnEntrance = document.getElementById('btnEntrance')
var $btnRegister = document.getElementById('btnRegister')
var $btnForAccount = document.getElementById('btnForAccount')
var $btnNewPassForm = document.getElementById('BtnNewPass')
var $formNewPassSend = document.getElementById('sendNewPass')
var $btnNewPassClose = document.getElementById('btnNewPassClose')



//------method



function open(elem){
    elem.classList.add('show')

}


function close(elem) {
    elem.classList.remove('show')
}

function closeOutside(event){

    if(!$popup.contains(event.target)&&!$btnLog.contains(event.target)) {
        deleteMessage()
        close($popup)
        close($mask)
    }

}



function error(elem){


    var message = document.createElement('p');
    message.innerHTML = 'Поле вводу порожне, введить данi ще раз'
    message.className = 'error'
    elem.append(message)


}


function deleteMessage(){

    var delError = document.querySelectorAll('.error')
    for(i=0;i< delError.length;i++) {
        delError[i].remove()
    }
}




function validate(event) {

    
    var buttonForm = document.getElementById(event.target.id)
    var form = buttonForm.parentNode.parentNode 
  
    var inputForm = form.querySelectorAll('.form-input')

    for(i=0;i < inputForm.length; i++) {

        if(inputForm[i].value.length == 0) {

            event.preventDefault();
            
            if(!inputForm[i].parentNode.querySelector('.error')) {
               var lod =  error(inputForm[i].parentNode)
                
            }
            
        }       
    }

     
   
    
}



//--------event

$btnLog.addEventListener('click', function(){

    deleteMessage()
    open($popup)
    open($mask)
 

})

$close.addEventListener('click', function(){
    close($popup)
    close($mask)
})

document.addEventListener('click', function(){

    closeOutside(event)
})

$accept.addEventListener('click', function(){

    close($formIn)
    open($formAccept)

})

$btnNewPass.addEventListener('click', function(){

    close($formIn)
    open($formNewPass)

})

$btnOldPass.addEventListener('click', function(){

    close($formNewPass)
    open($formIn)

})

$btnNewPassClose.addEventListener('click', function(){

    close($formNewPass)
    open($formIn)
    close($formNewPassSend)
    localStorage.removeItem("pass")

})

$btnForAccount.addEventListener('click', function(){

    close($formAccept)
    open($formIn)

})



$btnEntrance.addEventListener('click', function(){

    deleteMessage()
    validate(event)



})


$btnRegister.addEventListener('click', function(){

    deleteMessage()
    validate(event)
    
    })

$btnNewPassForm.addEventListener('click', function(){

    deleteMessage()
    validate(event)
    
    })

    
    $formNewPass.addEventListener('submit', function(){

        localStorage.setItem('pass', true)
        
        })

    
       
      
    if(localStorage.getItem('pass') ==  'true') {
       
        open($popup)
        close($formIn)
        open($formNewPassSend)
       
    }
    localStorage.removeItem("pass")
   
 
}


