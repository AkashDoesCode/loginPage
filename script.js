



var regex="^[a-zA-Z][a-zA-Z0-9_]{5,20}$";
var pwdregex="(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[~!@#$%^&*]){8,20}";
function validate()
{
    var username=document.getElementById("username").value;
    var email=document.getElementById("email").value;
    var pwd=document.getElementById("password").value;
    var checkpwd=document.getElementById("checkpassword").value;
    //for username validation
    if(!username.match(regex))
    {
        document.getElementById("userError").innerHTML="Username must be more than 5 characters and must start with alphabet";
        document.getElementById("userError").style.visibility="visible";
        return false;
    }
    else{
        document.getElementById("username").classList.add("green");
        document.getElementById("userError").style.display="none";
    } 
    //for email validation

    if(email=="")
    {
        document.getElementById("emailError").innerHTML="Email can't be empty";
        document.getElementById("emailError").style.visibility="visible";
        return false;
    }
    else
    {
        document.getElementById("email").classList.add("green");
        document.getElementById("emailError").style.display="none";
    }
    //for password
    if(pwd=="")
    {
        document.getElementById("pwdError").innerHTML="Password must be filled";
        document.getElementById("pwdError").style.visibility="visible";
        return false;
    }
    else if(!pwd.match(pwdregex))
    {
        document.getElementById("pwdError").innerHTML="Password is weak";
        document.getElementById("pwdError").style.visibility="visible";
        return false;
    }
    else{
        document.getElementById("password").classList.add("green");
        document.getElementById("pwdError").style.display="none";
    }
    //check password
    if(pwd!=checkpwd)
    {
        document.getElementById("checkpwdError").innerHTML="Password doesn't match";
        document.getElementById("checkpwdError").style.visibility="visible";
        return false;
    }
    else{
        document.getElementById("checkpwdError").classList.add("green");
        document.getElementById("checkpwdError").style.display="none";
    }
    alert("submitted");
    return true;
}
