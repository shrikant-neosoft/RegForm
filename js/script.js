

var datas = "I am Shrikant Pradhan. How are You!!";

//var exp2 = /^[a-zA-Z0-9_-\.]+@[a-zA-Z]+\.[a-zA-Z]{2|3}$/;



var regMob = (data)=>{
    var exp1 = /^\+91+[6-9][0-9]{9}$/;
    return exp1.test(data);
}
var regText = (data)=>{
    var exp1 = /^[a-zA-Z\s]{1,150}$/;
    return exp1.test(data);
}
var regEmail = (data)=>{
    var exp1 = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return exp1.test(data);
}
var regPass = (data)=>{
    var exp1 = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return exp1.test(data);
}


function checkValidation(event){
    
    var fullname = document.querySelector("#fullname");
    var phonenumber = document.querySelector("#phoneNumber");
    var gender_male = document.querySelector("#malebtn");
    var gender_female = document.querySelector("#femalebtn");
    var emailtxt = document.querySelector("#emailtxt");
    var psw = document.querySelector("#psw");
    var psw_repeat = document.querySelector("#psw_repeat");
    var msg_box = document.querySelector("#msg_box");
    msg_box.innerHTML = "";
    
    var valid = true ;
    if(!regText(fullname.value)){
        var li = document.createElement("li");
        li.innerHTML = "<b>Full Name</b> field required only text";
        msg_box.appendChild(li);
        valid = false;
        fullname.classList.add('error');
    }
    if(!regMob(phonenumber.value)){
        var li = document.createElement("li");
        li.innerHTML = "<b>Phone Number</b> field required only number, length should be 9.& number start with +91";
        msg_box.appendChild(li);
        valid = false;
        phonenumber.classList.add('error');
    }

    if(!regEmail(emailtxt.value)){
        var li = document.createElement("li");
        li.innerHTML = "<b>Enail ID</b> field is not in email formate.";
        msg_box.appendChild(li);
        valid = false;
        emailtxt.classList.add('error');
    }

    if(!regPass(psw.value)){
        var li = document.createElement("li");
        li.innerHTML = "<b>Password</b> field must have 1 charactor, 1 number, 1 symbol & minimum length is 8 charactor";
        msg_box.appendChild(li);
        valid = false;
        psw.classList.add('error');
    }
    if(psw.value != psw_repeat.value){
        var li = document.createElement("li");
        li.innerHTML = "<b>Password & Repeat Password</b> Field Not Matched";
        msg_box.appendChild(li);
        valid = false;
        psw_repeat.classList.add('error');
    }

    if(!valid){
        event.preventDefault();
        msg_box.classList.add('active');
    }



}




