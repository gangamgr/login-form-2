let a=""
function  Login(){
    let email=document.getElementById('email').value;
    let emailerror=document.getElementById('emailerror');
    let pattern=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/g;
    console.log(email.match(pattern));

    alert(email)
    if(email.length===0){
        emailerror.innerHTML='please enter your email' 
    }else if(email.match(pattern)===null){
        emailerror.innerHTML="invalid email";
    }
    let password=document.getElementById('password').value;
    let passworderror=document.getElementById('passworderror');

    alert(password)
    if(password.length===0){
        passworderror.innerHTML='please enter your password'
    }else if(password.length>8 || password.length<6){
        passworderror.innerHTML='password too short'
    }
}


