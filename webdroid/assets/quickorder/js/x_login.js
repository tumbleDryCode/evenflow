var doLoginResp = function(a,b,c) {
try {
if(b.indexOf("u_email") != -1) {
var arrToFill = JSON.parse(b);
ts = arrToFill[0];
if(ts._id) {
JSSHOP.cookies.setCookie("quid",ts._id,"30","","","");
document.location.href = "./index.php?isr=y";
} else {
alert("Something wrong: " + b);
}
} else { 
alert("Something wrong no u_email: " + b);
}
} catch(e) {
alert(e);
}
};

var doSULIn = function(a,b,c) {
// alert("doSULIn: " + b);
tmpUstr = document.getElementById("u_email").value;
tmpPstr = document.getElementById("u_pass").value;
tmpDOs = null;
tmpDOs = {};
tmpDOs["ws"] = "where u_email=? and u_pass=?";
tmpDOs["wa"] = [tmpUstr,tmpPstr];
oi = getNuDBFnvp("quser",5,null,tmpDOs);
alert("doSULIn: " + oi["rq"]);
doQComm(oi["rq"], null, "doLoginResp");
}


var doSignUpResp = function(a,b,c) {
if(b.indexOf("u_name") != -1) {
alert("userAlreadyExists: " + b);
} else {
tmpFobj = null;
tmpFobj = {};
tmpFobj["knvp"] = JSSHOP.shared.getFrmVals(document["quser"], "nada");
oi = getNuDBFnvp("quser",6,null,tmpFobj);
doQComm(oi["rq"], null, "doSULIn");
}
};


var checkLin = function(theSUtype) {
tmpUstr = document.getElementById("tmpUemail").value;
tmpPstr = document.getElementById("tmpUpass").value;
if((tmpUstr.length < 1) || (tmpPstr.length < 1)) {
alert("You must enter a username and password");
} else {
ttime = new Date().getTime();
JSSHOP.shared.setFieldVal("u_email", tmpUstr);
JSSHOP.shared.setFieldVal("u_pass", tmpPstr);
JSSHOP.shared.setFieldVal("u_name", tmpUstr); 
JSSHOP.shared.setFieldVal("u_header", tmpUstr);
JSSHOP.shared.setFieldVal("u_dadded", ttime);
tmpDOs = {};
tmpDOs["ws"] = "where u_email=? and u_pass=?";
tmpDOs["wa"] = [tmpUstr,tmpPstr];
oi = getNuDBFnvp("quser",5,null,tmpDOs);
if(theSUtype == "register") {
// alert("is register");
doQComm(oi["rq"], null, "doSignUpResp");
} else {
doQComm(oi["rq"], null, "doLoginResp");
}
}
};