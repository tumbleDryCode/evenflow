var currMSetArr = [];
currPgTitle = "App Tools";
document.title = currPgTitle; // set the page title 
var euiFFObjArr = null;
var euiFFObjArr = [];


var getArtPad = function(stiDCm, strCBARgs, sstrCBARgs) {
try {
app.setImgGet(stiDCm, strCBARgs, sstrCBARgs);
} catch(e) {
alert("getArtPad.error  " + e);
}
};

var dmyFnishCntLoad = fnishCntLoad;
fnishCntLoad = function () {
tfsa = nCurrFFieldOb();
tfsa.fid = "btnATartpad";
tfsa.fty = "button";
tfsa.fcl = function() { getArtPad('5',null,null); };
euiFFObjArr.push(tfsa);



JSSHOP.shared.initFrmComps(euiFFObjArr);

}
 