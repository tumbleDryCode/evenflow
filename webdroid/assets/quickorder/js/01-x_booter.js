var onlyNums=new RegExp(/^\d{10}$/);var jscssprefix="";var pipeDir="noQvalue";var forceCache="no";var currCacheVer="1";var timeout_handles=[];var loaded_scripts=[];var loaded_streams=[];var arrUprefs=[];var trgr_bclck=[];var canLoad="no";var pid="index_main";var ppid=0;var cid=0;var catid=0;var itemid=0;var pgpq="noQvalue";var arrDBnDocFNames=[];var arrDBnDocFNVpar=[];var arrDBFNames=[];var arrAllForms=[];var tmpSQBArr=[];var tmpVindex=0;var ntImgCtr=[];var currMresp="";var quid=0;var cartID="noQvalue";var currRQstr="noQvalue";var currRQdb="evenflow-local";var currRQtable="qitem";var currDBUGstr="";var currMenuObj;var currACTBstr="";var currMenuArr=[];var currItemArr=[];var currItemsArr=[];var currCartIArr=[];var currMItemsArr=[];var currProdsArr=[];var currQcommsArr=[];var currFrmQArr=[];var currPgTitle="";var currAdmnMode="n";var currImgSleep=280;var currUrlArr={};var currCnxOb={};var currFFieldOb={};var currFFinitArr=[];var currPgIndex=0;var currProdsPPg=10;var currMCollItems={};var currUserFavs="";var stxt=[];var usrlang="en_us";var actbSearch;var actbLoaded=false;var shopDir=document.location.href;var spinTextDiv=document.createElement("div");var currSpinText="noQvalue";var currSpinType="small";var currSpinHtml="noQvalue";var currSpinTarget="noQvalue";path=shopDir;n=path.lastIndexOf("/");q=path.lastIndexOf("?");if(n>=0){shopDir=path.substring(0,n+1);}else{shopDir+="/";}var doNada=function(c,b,a){};function doDummyFocus(){setTimeout("chkbxDummy.focus()",500);}if(!window.JSSHOP){var JSSHOP=new Object();}var getFrcCacheRLoad=function(a){if(currUrlArr.fc){return currUrlArr.fc;}else{return a;}};try{tmpNvstr=navigator.userAgent;if(tmpNvstr.indexOf("JavaFX")!=-1){isJavaFx="yes";}}catch(e){}var nCurrFFieldOb=function(){aCurrFFieldOb=null;aCurrFFieldOb={};aCurrFFieldOb["fid"]="noQvalue";aCurrFFieldOb["fty"]="noQvalue";aCurrFFieldOb["fdc"]="cls_input_text";aCurrFFieldOb["ffc"]="cls_input_text cls_input_text_focus";aCurrFFieldOb["fdv"]="noQvalue";aCurrFFieldOb["fda"]="false";aCurrFFieldOb["fvr"]="noQvalue";aCurrFFieldOb["fve"]="noQvalue";aCurrFFieldOb["fof"]="noQvalue";aCurrFFieldOb["fob"]="noQvalue";aCurrFFieldOb["fcl"]="noQvalue";aCurrFFieldOb["fku"]="noQvalue";aCurrFFieldOb["fkd"]="noQvalue";aCurrFFieldOb["lid"]="noQvalue";aCurrFFieldOb["ltxt"]="noQvalue";return aCurrFFieldOb;};var nCurrCnxOb=function(){acurrCnxOb=null;acurrCnxOb={};acurrCnxOb["st"]="noQvalue";acurrCnxOb["fn"]="noQvalue";acurrCnxOb["ts"]="123";acurrCnxOb["fc"]=getFrcCacheRLoad("n");acurrCnxOb["lz"]="n";acurrCnxOb["ls"]="n";acurrCnxOb["el"]="noQvalue";acurrCnxOb["cb"]="noQvalue";acurrCnxOb["q"]="noQvalue";acurrCnxOb["ur"]=shopDir+"_p/do.php?";acurrCnxOb["rs"]="noQvalue";acurrCnxOb["er"]="noQvalue";acurrCnxOb["ui"]="noQvalue";return acurrCnxOb;};currCnxOb=nCurrCnxOb();currFFielOb=nCurrFFieldOb();function getNuLclStrg(d,b,a){try{if(localStorage[b]){return localStorage[b];}else{return a;}}catch(c){return a;}}function clearNuLclStrg(c,a){try{if(typeof(Storage)!=="undefined"){localStorage.removeItem(a);}}catch(b){alert("clearNuLclStrg: "+b);}}function setNuLclStrg(d,b,a){try{if(typeof(Storage)!=="undefined"){localStorage[b]=a;}}catch(c){}}function getLclStrg(a,b){if(localStorage[a]){return localStorage[a];}else{return b;}}function clearLclStrg(a){if(typeof(Storage)!=="undefined"){localStorage.removeItem(a);}}function setLclStrg(b,a){if(typeof(Storage)!=="undefined"){localStorage[b]=a;}}function doBarCodeScan(b){try{app.doBarCodeScan(b);}catch(a){alert("only works with Android App and "+a);}}var doPopItemMod=function(){loadJSModal("tplates/aa-mod-show-item.html?tt="+JSSHOP.getUnixTimeStamp());};var doPopCartMod=function(){loadJSModal("tplates/aa-mod-show-cartadd.html?tt="+JSSHOP.getUnixTimeStamp());};var doCAshow=function(a){JSSHOP.ui.setCBBClickClr(document.getElementById(a),"crsrPointer icndbtn slmtable bkgdClrTtl brdrClrHdr txtClrHdr fltrImgInvClr","crsrPointer icndbtn",function(){void (0);});JSSHOP.shared.setFrmVals("qitem",tmpVitemArr[tmpVindex],function(){doCartAddPop();});};var setPopItemMod=function(a){setCurrItemArr(a);JSSHOP.shared.setFrmVals("qitem",a,function(){doPopItemMod();});};var setCurrItemArr=function(a){currItemArr=null;currItemArr=a;};var getCurrItemArr=function(){return currItemArr;};var setCurrItemsArr=function(a){currItemsArr=null;currItemsArr=a;};var getCurrItemsArr=function(){return currItemsArr;};var setCurrMItemsArr=function(a){currMItemsArr=null;currMItemsArr=a;};var getCurrMItemsArr=function(){return currMItemsArr;};var getCurrUrl=function(){var b="noQvalue";strCurl=document.location.href;if(strCurl.indexOf("?")!=-1){b=strCurl.substring(strCurl.indexOf("?")+1);}if(isPhP=="no"){try{b=app.getCurrPageVars("nada");document.getElementById("fldChallArray").value=b;b=document.getElementById("fldChallArray").value;}catch(a){alert("getCurrUrl: "+a);}}return b;};try{cartID=app.fetchConfValString("cartID");isJApp="y";JSSHOP.loadScript("css/"+jscssprefix+"x_japp.css",JSSHOP.checkLoader,"css");}catch(e){}var pfRet=function(c,a,b){document.getElementById(c).innerHTML=a;};var doCloseAdd=function(c,a,b){fullResp='<div onclick="JSSHOP.ui.closeLbox();" style="float:right">Close</div>'+a;document.getElementById(c).innerHTML=fullResp;};var loadNurJSModal=function(a,c,b){if(a.indexOf("images/")!=-1){JSSHOP.ui.popAndFillLbox('<img src="'+a+'">');}else{JSSHOP.ajax.doNuAjaxPipe("lightbox_content",a,b);JSSHOP.ui.popAndFillLbox(c);}};var loadNuJSModal=function(a,b){loadNurJSModal(a,b,doCloseAdd);};var loadJSModal=function(a){loadNuJSModal(a,"noQvalue");};var getShopDir=function(a){tmpRetVal="noQvalue";tmpShopDir="noQvalue";if(a=="local"){tmpShopDir=document.location.href;tmpPath=tmpShopDir;n=tmpPath.lastIndexOf("/");q=tmpPath.lastIndexOf("?");if(n>=0){tmpShopDir=tmpPath.substring(0,n+1);}else{tmpShopDir+="/";}}else{tmpShopDir=JSSHOP.shared.getFrmFieldVal("qco","c_web","noQvalue");}tmpRetVal=tmpShopDir;return tmpRetVal;};JSSHOP.logJSdbug=function(d,b,a){tmpStrArgs="noQvalue";tmpAStrArgs="noQvalue";try{tmpStrArgs=JSON.stringify(b);}catch(c){tmpStrArgs=b;}if(tmpStrArgs.length>12){tmpAStrArgs='<span onclick="javascript:alert(this.innerHTML);" style="max-width:120px;max-height:90px;overflow:hidden;">'+tmpStrArgs+"</span>";}else{tmpAStrArgs=tmpStrArgs;}currDBUGstr+="<br><br>: "+JSSHOP.getUnixTimeStamp()+" :: "+d+" :: "+tmpAStrArgs+" :: "+a;};JSSHOP.logJSerror=function(b,c,a){fullArgs=new Array();if(c.length){fullArgs=c;fullArgs=JSON.stringify(c);}else{fullArgs="noQvalue";}fullSError=JSON.stringify(b);if(b.lineNumber){fullSError+="Line: "+b.lineNumber+"\r\n";}if(b.fileName){fullSError+="File: "+b.fileName+"\r\n";}if(b.msg){fullSError+="msg: "+b.msg+"\r\n";}if(b.constructor){fullSError+=b.constructor;}setTimeout(function(){ermsg="epconsole.error: "+fullSError+" :: "+fullArgs+" :: "+a;throw new Error(ermsg);},0);};var getMainSearch=function(a){document.location.href="index.html?pid=aa-show-search&cid="+cid+"&sw="+a;};JSSHOP.startNuIntrvlEvnt=function(theObjTag,theFunction,theInterval){try{eval(theObjTag+" = "+window.setInterval(theFunction,theInterval));}catch(e){JSSHOP.logJSerror(e,arguments,"JSSHOP.startNuIntrvlEvnt");}};JSSHOP.stopNuIntrvlEvnt=function(a){try{window.clearInterval(a);a=null;}catch(b){JSSHOP.logJSerror(b,arguments,"JSSHOP.stopNuIntrvlEvnt");}};JSSHOP.startIntervalEvent=function(a,d,c){try{timeout_handles[a]=window.setInterval(d,c);}catch(b){JSSHOP.logJSerror(b,arguments,"JSSHOP.startIntervalEvent");}};JSSHOP.stopIntervalEvent=function(a){try{window.clearInterval(timeout_handles[a]);timeout_handles[a]=null;}catch(b){JSSHOP.logJSerror(b,arguments,"JSSHOP.stopIntervalEvent");}};JSSHOP.getUnixMiliStamp=function(){try{ts=Math.round(new Date().getTime());return ts;}catch(a){JSSHOP.logJSerror(a,arguments,"JSSHOP.getUnixTimeStamp");}};JSSHOP.getUnixTimeStamp=function(){try{ts=Math.round(new Date().getTime()/1000);return ts;}catch(a){JSSHOP.logJSerror(a,arguments,"JSSHOP.getUnixTimeStamp");}};JSSHOP.loadScript=function(k,j,g){n=k.lastIndexOf("/");q=k.lastIndexOf("?");if(g=="js"){var f=document.createElement("script");f.setAttribute("type","text/javascript");f.src=k;}else{if(g=="css"){var f=document.createElement("link");f.setAttribute("rel","stylesheet");f.setAttribute("type","text/css");f.href=k;}}var c=false;f.onload=h;f.onreadystatechange=a;f.onerror=b;if(n>=0){if(q>=0){tid=k.substring(n+1,q);}else{tid=k.substring(n+1);}f.id=tid;}document.getElementsByTagName("head")[0].appendChild(f);function h(){if(!c){c=true;j(k,"ok");}}function a(){var l;if(!c){l=f.readyState;if(l==="complete"){h();}}}function b(){if(!c){c=true;j(k,"error");}}try{}catch(d){JSSHOP.logJSerror(d,arguments,"JSSHOP.shared.loadScript");}};JSSHOP.checkLoader=function(b,a){try{ttlLoaded=loaded_scripts.length;loaded_scripts[ttlLoaded]=b;}catch(c){JSSHOP.logJSerror(c,arguments,"JSSHOP.shared.checkLoader");}};if(!window.JSSHOP.cookies){JSSHOP.cookies=new Object();}JSSHOP.cookies.getCookie=function(h){var j;var k;if((isPhP=="no")||(isJavaFx=="yes")){try{if(h=="quid"){k=app.fetchConfValInt(h);}else{k=app.fetchConfValString(h);}j=k;if(j=="noQvalue"){return null;}else{return j;}}catch(d){alert("getCookie: "+d);return null;}}else{var f=document.cookie.split(";");var g="";var a="";var c="";var b=false;for(i=0;i<f.length;i++){g=f[i].split("=");a=g[0].replace(/^\s+|\s+$/g,"");if(a==h){b=true;if(g.length>1){c=unescape(g[1].replace(/^\s+|\s+$/g,""));}return c;break;}g=null;a="";}if(!b){return null;}}};JSSHOP.cookies.setCookie=function(b,h,c,k,d,a){if((isPhP=="no")||(isJavaFx=="yes")){try{if(b=="quid"){app.setConfValInt(b,h);}else{app.setConfValString(b,h);}}catch(f){alert("setCookie.E: "+f);}}else{var g=new Date();g.setTime(g.getTime());if(c){c=c*1000*60*60*24;}var j=new Date(g.getTime()+(c));document.cookie=b+"="+escape(h)+((c)?";expires="+j.toGMTString():"")+((k)?";path="+k:"")+((d)?";domain="+d:"")+((a)?";secure":"");}};JSSHOP.cookies.deleteCookie=function(a,d,b){if((isPhP=="no")||(isJavaFx=="yes")){try{if(a=="quid"){app.setConfValInt(a,0);}else{app.setConfValString(a,"noQvalue");}}catch(c){alert("setCookie.E: "+c);}}else{if(JSSHOP.cookies.getCookie(a)){document.cookie=a+"="+((d)?";path="+d:"")+((b)?";domain="+b:"")+";expires=Thu, 01-Jan-1970 00:00:01 GMT";}}};if(!window.JSSHOP.shared){JSSHOP.shared=new Object();}JSSHOP.shared.endsWith=function(b,a){return b.indexOf(a,b.length-a.length)!==-1;};JSSHOP.shared.urlToArray=function(b){try{var d={};var a=[];var f=b.substring(b.indexOf("?")+1).split("&");for(var c=0;c<f.length;c++){var h=f[c].split("=");if(JSSHOP.shared.endsWith(decodeURIComponent(h[0]),"[]")){var j=decodeURIComponent(h[0]).substring(0,decodeURIComponent(h[0]).length-2);if(!(j in a)){a.push(j);a[j]=[];}a[j].push(decodeURIComponent(h[1]));d[j]=a[j];}else{d[decodeURIComponent(h[0])]=decodeURIComponent(h[1]);}}return d;}catch(g){JSSHOP.logJSerror(g,arguments,"JSSHOP.shared.urlToArray");return"noQvalue";}};if(!window.JSSHOP.user){JSSHOP.user=new Object();}JSSHOP.user.decPrefCky=function(a){try{strPa=a.split("x1").join('[{"');strPb=strPa.split("x2").join('":"');strPc=strPb.split("x3").join('","');strPd=strPc.split("x4").join('":');strPe=strPd.split("x5").join(',"');strPf=strPe.split("x6").join('"}]');strPg=strPf.split("x7").join("}]");return strPg;}catch(b){JSSHOP.logJSerror(b,arguments,"JSSHOP.user.decPrefCky");return"noQvalue";}};JSSHOP.user.encPrefCky=function(a){try{strPa=a.split('[{"').join("x1");strPb=strPa.split('":"').join("x2");strPc=strPb.split('","').join("x3");strPd=strPc.split('":').join("x4");strPe=strPd.split(',"').join("x5");strPf=strPe.split('"}]').join("x6");strPg=strPf.split("}]").join("x7");return strPg;}catch(b){JSSHOP.logJSerror(b,arguments,"JSSHOP.user.encPrefCky");return"noQvalue";}};JSSHOP.user.setCkieUprefs=function(b){try{if(JSSHOP.cookies.getCookie(b)){JSSHOP.cookies.deleteCookie(b,"","");}JSSHOP.cookies.setCookie(b,JSSHOP.user.encPrefCky(JSON.stringify(arrUprefs[b])),"30","","","");}catch(a){alert(a);JSSHOP.logJSerror(a,arguments,"JSSHOP.user.setCkieUprefs");}};JSSHOP.user.setCkiePrfKV=function(c,a,d){try{arrUprefs[c][0][a]=d;JSSHOP.user.setCkieUprefs(c);}catch(b){JSSHOP.logJSerror(b,arguments,"JSSHOP.user.setCkiePrfKV");}};JSSHOP.user.setCkiePrfDispVal=function(d,a,b){try{val=false;theRow=document.getElementById(b);if(theRow.style.display=="none"){val=true;}arrUprefs[d][0][a]=val;JSSHOP.user.setCkieUprefs(d);}catch(c){JSSHOP.logJSerror(c,arguments,"JSSHOP.user.setCkiePrfDispVal");}};JSSHOP.user.doCkieUprefs=function(a){try{if(JSSHOP.cookies.getCookie(a)){fldChallArray.value=JSSHOP.cookies.getCookie(a);tval=fldChallArray.value;arrUprefs[a]=JSON.parse(JSSHOP.user.decPrefCky(tval));}else{arrUprefs[a]=[{"prfDspLmenu":false,"scv":"g","sAL":"y","sAT":"y","sia":"y"}];JSSHOP.user.setCkieUprefs(a);}}catch(b){JSSHOP.logJSerror(b,arguments,"JSSHOP.user.doCkieUprefs");}};var getNuDBFnvp=function(c,a,b,f){icce=0;tmpV=[];tmpFV=[];xol=null;xol={};xol["m"]=a;xol["t"]=c;xol["c"]=null;xol["o"]="_id Desc";xol["l"]=100;xol["knvp"]=null;if(f!=null){if(f["ws"]!=null){xol["ws"]=f["ws"];}if(f["wa"]!=null){xol["wa"]=f["wa"];}if(f["o"]!=null){xol["o"]=f["o"];}if(f["l"]!=null){xol["l"]=f["l"];}if(f["c"]!=null){xol["c"]=f["c"];}if(f["knvp"]!=null){xol["knvp"]=f["knvp"];}}else{xol["ws"]="where _id=?";xol["wa"]=[ppid];}if(xol["knvp"]==null){tlen=arrDBnDocFNames.length;if(tlen>0){}else{nint=0;if(b!=null){while(nint<b.length){arrDBnDocFNames.push(b[nint]);arrDBFNames.push(b[nint]);nint++;}}}arrDBnDocFNVpar=null;arrDBnDocFNVpar=[];while(icce<arrDBnDocFNames.length){nnvo={};nvk=arrDBnDocFNames[icce];nvl=document.getElementById(arrDBnDocFNames[icce]).value;nnvo["t"]=nvk;nnvo["v"]=nvl;tmpStrSWA="";arrDBnDocFNVpar.push(nnvo);icce++;}xol["knvp"]=null;xol["knvp"]=arrDBnDocFNVpar;}len=xol["knvp"].length;arrDBFNames["_id"]=ppid;if(xol["ws"]!=null){tmpStrSWA=switchOccurrences(xol["ws"],"?",xol["wa"]);}sqs="";switch(a){case 5:sqs="select ";if(xol["c"]!=null){if(xol["c"].length>0){sqs+=xol["c"]+" ";}else{sqs+="* ";}}else{sqs+="* ";}sqs+="from "+c+" "+tmpStrSWA+" order by "+xol["o"]+" limit "+xol["l"];break;case 6:var d=0;ts="";tv="";ark=[];while(d<len){if(xol["knvp"][d].t=="_id"){}else{ts+=xol["knvp"][d].t+",";theVstrClean=xol["knvp"][d].v;tv+="'"+theVstrClean+"',";}d++;}sqs="insert into "+c+"("+ts.substring(0,ts.length-1)+") values ("+tv.substring(0,tv.length-1)+")";break;case 7:var d=0;ts="";tv="";ark=[];while(d<len){if(xol["knvp"][d].t=="_id"){}else{ts+=xol["knvp"][d].t+"=";theVstrClean=decodeURIComponent(xol["knvp"][d].v);ts+="'"+theVstrClean+"',";}d++;}sqs="update "+c+" set "+ts.substring(0,ts.length-1)+" "+tmpStrSWA;break;case 8:sqs="delete from "+c+" "+tmpStrSWA;break;case 9:var d=0;ts="";tv="";ark=[];while(d<len){ts+=xol["knvp"][d].t+",";theVstrClean=xol["knvp"][d].v;tv+="'"+theVstrClean+"',";d++;}sqs="replace into "+c+" values ("+tv.substring(0,tv.length-1)+")";d=0;break;default:sqs="select";}xol["rq"]=sqs;return xol;};var doFrmQArr=function(b,c,a){nnvo=null;nnvo={};nnvo["f"]=a;nnvo["v"]=b;nnvo["e"]=c;currFrmQArr.push(nnvo);};var addFrmQArr=function(c,b,a){tmpDOs=null;tmpDOs={};tmpDOs["ws"]="where _id=?";tmpDOs["wa"]=[b];oi=getNuDBFnvp(c,5,null,tmpDOs);doFrmQArr(oi["rq"],c,a);};var addNuFrmQArr=function(d,c,b,a){tmpDOs=null;tmpDOs={};tmpDOs["ws"]="where "+c+"=?";tmpDOs["wa"]=[b];oi=getNuDBFnvp(d,5,null,tmpDOs);doFrmQArr(oi["rq"],d,a);};var doDynQArrComm=function(c,b,d,a){nnvo=null;nnvo={};nnvo["f"]=a;nnvo["v"]=b;nnvo["e"]=d;c.push(nnvo);};var doQArrComm=function(b,c,a){nnvo=null;nnvo={};nnvo["f"]=a;nnvo["v"]=b;nnvo["e"]=c;currQcommsArr.push(nnvo);};var addQArrComm=function(c,b,a){tmpDOs=null;tmpDOs={};tmpDOs["ws"]="where _id=?";tmpDOs["wa"]=[b];oi=getNuDBFnvp(c,5,null,tmpDOs);doQArrComm(oi["rq"],c,a);};var getCleanAppStr=function(a){document.getElementById("fldChallArray").value=a;newCleanAppStr=document.getElementById("fldChallArray").value;return newCleanAppStr;};var pfDRet=function(c,a,b){document.getElementById("fldChallArray").value=a;aresp=document.getElementById("fldChallArray").value;};navigator.sayswho=(function(){var b=navigator.userAgent,a,c=b.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[];if(/trident/i.test(c[1])){a=/\brv[ :]+(\d+)/g.exec(b)||[];return"IE "+(a[1]||"");}if(c[1]==="Chrome"){a=b.match(/\b(OPR|Edge)\/(\d+)/);if(a!=null){return a.slice(1).join(" ").replace("OPR","Opera");}}c=c[2]?[c[1],c[2]]:[navigator.appName,navigator.appVersion,"-?"];if((a=b.match(/version\/(\d+)/i))!=null){c.splice(1,1,a[1]);}return c.join(" ");})();var remp=function(b){var a=document.createElement("script");a.type="text/javascript";a.async=true;a.src=b;document.getElementsByTagName("head")[0].appendChild(a);};var fnishCntLoad=function(){};var fnishCoForm=function(){};var fnishUserForm=function(){};var fnishCatForm=function(){};var fnishItemForm=function(){};var fnishExtrasForm=function(){};var fnishCartForm=function(){};var pushActbArr=function(a){};var clearActbArr=function(){};var mfnishCntLoad=function(){if(currAdmnMode=="y"){tmpStrLgotxt="Admin";}else{tmpStrLgotxt=JSSHOP.shared.getFieldVal("c_title","QuickOrder");}JSSHOP.ui.setTinnerHTML("ancLogoTxt",tmpStrLgotxt);xae=document.getElementsByTagName("ti");var a=0;while(a<xae.length){nuDW(xae[a]);a++;}doCatTreeLoad();fnishCntLoad();};var mfnishCoForm=function(){fnishCoForm();};var mfnishUserForm=function(){fnishUserForm();};var mfnishCatForm=function(){fnishCatForm();};var mfnishItemForm=function(){fnishItemForm();};var mfnishExtrasForm=function(){fnishExtrasForm();};var mfnishCartForm=function(){fnishCartForm();};var mpushActbArr=function(a){pushActbArr(a);};var mclearActbArr=function(){clearActbArr();};var doNurQComm=function(c){strQ=c.q;if(pipeDir=="noQvalue"){if(isPhP=="no"){try{atmpArrQ=app.getNuDBselectQ(c.q);document.getElementById("fldChallArray").value=atmpArrQ;tmpArrQ=document.getElementById("fldChallArray").value;tmpNewArrO=null;tmpNewArrO={};tmpNewArrO=JSON.parse(tmpArrQ);var a=null;a=c;a["rs"]=tmpNewArrO.data;if(c.el=="give"){return tmpArrQ;}else{mf=window[c.cb];mf(a);}}catch(b){alert(b);}}else{tmpArrQ=JSSHOP.ajax.doRequestPrep(c);doLclSych(strQ);}}else{c.ur=pipeDir+"_p/do.php?";tmpArrQ=JSSHOP.ajax.doRequestPrep(c);doLclSych(strQ);}};var doNuQComm=function(c,g,b,f,h,a){tmpArrQ="noQvalue";tmpQstr="";tmpQstr+="t="+b+"&";tmpQstr+="f="+g+"&";if(c=="noQvalue"){}else{tmpQstr+="c="+c+"&";}tmpQstr+="q="+JSSHOP.shared.utf8_encode(f);if(pipeDir=="noQvalue"){if(isPhP=="no"){try{atmpArrQ=app.getDBselectQ(f);document.getElementById("fldChallArray").value=atmpArrQ;tmpArrQ=document.getElementById("fldChallArray").value;tmpNewArr=null;tmpNewArr=[];tmpNewArr=JSON.parse(tmpArrQ);if(h=="give"){return tmpArrQ;}else{mf=window[a];mf(h,tmpArrQ,null);}}catch(d){rstr=shopDir+"_p/jsdo.php?cb="+a+"&"+tmpQstr;remp(rstr);}}else{mf=window[a];tmpArrQ=JSSHOP.ajax.doNuAjaxPipe(h,shopDir+"_p/do.php?"+tmpQstr,mf);doLclSych(f);}}else{mf=window[a];tmpArrQ=JSSHOP.ajax.doNuAjaxPipe(h,pipeDir+"_p/do.php?"+tmpQstr,mf);doLclSych(f);}};var doQComm=function(b,c,a){doNuQComm("noQvalue","n","123",b,c,a);};var doRemoteSych=function(a){if((a.startsWith("select"))||(a.startsWith("batch"))||(isJApp=="no")){dval="y";}else{atmpArrQ=app.getDBselectQ(a);document.getElementById("fldChallArray").value=atmpArrQ;tmpArrQ=document.getElementById("fldChallArray").value;}};var doLclSych=function(a){if((a.startsWith("select"))||(a.startsWith("batch"))||(isJApp=="no")){dval="y";}else{dval="n";}};var doQSynchComm=function(a,d,f,b){try{mf=window[b];tmpArrQ=JSSHOP.ajax.doNuAjaxPipe(f,a+"_p/do.php?q="+JSSHOP.shared.utf8_encode(d),mf);}catch(c){alert("doQSynchComm; "+c);}};var doQAppComm=function(c,d,a){try{atmpArrQ=app.getDBselectQ(c);document.getElementById("fldChallArray").value=atmpArrQ;tmpArrQ=document.getElementById("fldChallArray").value;if(d=="give"){return tmpArrQ;}else{mf=window[a];mf(d,tmpArrQ,null);}}catch(b){alert("Ooops, this should be done in our Android App: "+b);}};var getQArr=function(a,b){if(isPhP=="no"){tmpArrQ=app.getDBselectQ(b);document.getElementById("fldChallArray").value=tmpArrQ;tmpArrQ=document.getElementById("fldChallArray").value;pfDRet(null,tmpArrQ,null);}else{isJ=JSSHOP.ajax.doNuAjaxPipe(null,"do.php?q="+b,pfDRet);}};var getPageMContArr=function(b,a){switch(b){case 5:q="select * from users where _id = "+a;break;default:}getQArr(b,q);};var getPVname=function(a){if(a=(new RegExp("[?&]"+encodeURIComponent(a)+"=([^&]*)")).exec(location.search)){return decodeURIComponent(a[1]);}};var loadLmenu=function(){var b=document.createElement("ul");b.className="animenu__nav";tmpLI=document.createElement("li");tmpLI.className="omenuartigo";tmpA=document.createElement("a");linkText=document.createTextNode("Recent");tmpA.appendChild(linkText);tmpA.title="Recent";tmpLI.appendChild(tmpA);tmpRPUL=document.createElement("ul");tmpLI.appendChild(tmpRPUL);b.appendChild(tmpLI);tmpLI=document.createElement("li");tmpLI.className="omenuartigo";tmpA=document.createElement("a");linkText=document.createTextNode("Searches");tmpA.title="Searches";tmpLI.appendChild(tmpA);tmpRSUL=document.createElement("ul");tmpLI.appendChild(tmpRSUL);b.appendChild(tmpLI);strCatID="tip:ep:Smart Autocomplete|";strCatName="This will be a smart auto-complete search box.|";strULPID="";strULPTtl="";strULSID="";strULSTtl="";fullIDstr="";fullIDttl="";if(arrAllForms.qextras){theLMarr=arrAllForms.qextras;len=theLMarr.length;tstr="";iint=0;inop=0;inos=0;var a="show";if(currAdmnMode=="y"){a="edit";}while(iint<len){ts=null;ts=theLMarr[iint];switch(ts.e_rtype){case"10":strLML="index.html?pid=aa-"+a+"-item&itemid="+ts.e_vala+"&cid="+ts.e_valb+"&catid="+ts.e_valc;strLMTtl=ts.e_vald;if(inop<8){tmpLI=document.createElement("li");tmpLI.className="omenuartigo";tmpA=document.createElement("a");linkText=document.createTextNode(strLMTtl);tmpA.appendChild(linkText);tmpA.title=strLMTtl+"&nbsp;&nbsp;&nbsp;&nbsp;";tmpA.href=strLML;tmpLI.appendChild(tmpA);tmpRPUL.appendChild(tmpLI);}inop++;break;case"11":strLML="index.html?pid=aa-show-search&cid="+ts.e_valb+"&sw="+ts.e_vala;strLMTtl=ts.e_vala;tmpLI=document.createElement("li");tmpLI.className="omenuartigo";tmpA=document.createElement("a");linkText=document.createTextNode(strLMTtl);tmpA.appendChild(linkText);tmpA.title=strLMTtl+"&nbsp;&nbsp;&nbsp;&nbsp;";tmpA.href=strLML;tmpLI.appendChild(tmpA);tmpRSUL.appendChild(tmpLI);inos++;break;default:break;}iint++;}}tmpMColStr=doCollsLoad();if(document.getElementById("mmDdown")){document.getElementById("mmDdown").innerHTML="";document.getElementById("mmDdown").innerHTML=tmpMColStr;document.getElementById("tdLMenu").innerHTML="";tmpDV=document.createElement("div");tmpDV.className="collection collectionbrdr";tmpDV.innerHTML=tmpMColStr;document.getElementById("tdLMenu").appendChild(tmpDV);}spinTextDiv.innerHTML=" ..... ";JSSHOP.loadScript("js/"+jscssprefix+"x_"+pid+".js",doMainContent,"js");};var setLoadACTB=function(a){strCatID="tip:ep:Smart Autocomplete|";strCatName="This will be a smart auto-complete search box.|";strULPID="";strULPTtl="";strULSID="";strULSTtl="";fullIDstr="";fullIDttl="";var b="show";if(a.rs){var d=null;d=JSON.parse(a.rs);arrAllForms["qextras"]=d;if(currAdmnMode=="y"){b="edit";}len=d.length;tstr="";iint=0;while(iint<len){ts=d[iint];tsDTtle=ts.e_vald;tsATtle=ts.e_vala;if(tsDTtle.length>20){tsDTtle=tsDTtle.substring(0,16)+"...";}if(tsATtle.length>20){tsATtle=tsATtle.substring(0,16)+"...";}switch(ts.e_rtype){case"10":tULPID="index.html?pid=aa-"+b+"-item&itemid="+ts.e_vala+"&cid="+ts.e_valb+"&catid="+ts.e_valc;strULPID+="ulp:ep:"+tULPID+"|";strULPTtl+=ts.e_vald+"|";if(iint<6){currUserFavs+='<a href="'+tULPID+'">'+tsDTtle+"</a><br>";}break;case"11":strULSID+="uls:ep:"+ts.e_vala+"|";strULSTtl+=ts.e_vala+"|";currUserFavs+='<a href="'+ts.e_vala+'">'+tsATtle+"</a><br>";break;default:break;}iint++;}fullIDstr=strULSID+":ea:"+strULPID;fullIDttl=strULSTtl+":ea:"+strULPTtl;}strCatID+=fullIDstr+":ea:";strCatName+=fullIDttl+":ea:";strCatID+="tip:ep:Suggestions|";strCatName+="Suggestionsss are gathered from existing page arrays.|";currACTBstr=strCatID+"::"+strCatName;if(pid=="aa-show-category"){}else{try{actbSearch=loadListACTB(currACTBstr,"ijUFeedSearch");}catch(c){alert("doLoadACTB: "+c);}}loadLmenu();};var doLoadACTB=function(){doNuMMenuLd("doMnuFnsh");tmpDOs=null;tmpDOs={};tmpDOs["l"]="30";tmpDOs["ws"]="where e_uid=?";tmpDOs["wa"]=[quid];oi=getNuDBFnvp("qextras",5,null,tmpDOs);atac=null;atac=nCurrCnxOb();atac["q"]=oi["rq"];atac["cb"]="setLoadACTB";atac["ls"]="localStorage";doNurQComm(atac);};var fnish=function(f,d,j){accA=null;accA=[];tmpAfnish=null;tmpAfnish=[];tmpAfnish=JSON.parse(d);if(isJApp=="no"){accA=tmpAfnish;}else{accA=tmpAfnish[0];}for(var g in accA){try{mf=window[accA[g].f];mf(accA[g].e,JSON.stringify(accA[g].v),null);}catch(h){alert("fnish; "+h);}}};var doWinResizeE=function(){var a=document.getElementById("dvSearchBox").innerHTML;tmpSBox="dvSearchBoxSlim";if(getViewportWidth()>500){tmpSBox="dvSearchBox";}else{document.getElementById("dvSearchBoxSlim").innerHTML="";document.getElementById("dvSearchBox").innerHTML="";document.getElementById("dvSearchBoxSlim").innerHTML=a;}JSSHOP.ui.toggleVisibility("dvSearchBoxSlim");};var finishCntLoad=function(f,d,h){try{smlspinner.stop();spinner.stop();document.getElementById(f).innerHTML=d;doWinResizeE();setTimeout("mfnishCntLoad()",500);}catch(g){alert("finishCntLoad.error: "+f+" : "+g);}};var doMainContent=function(d,c){try{spinTextDiv.innerHTML=" ... ";fCa=getFArr();if((pid.indexOf("edit-")!=-1)&&((quid==0)||(quid=="noQvalue"))){JSSHOP.loadScript("js/"+jscssprefix+"x_login.js",JSSHOP.checkLoader,"js");JSSHOP.ajax.doNuAjaxPipe("includedContent","tplates/login.html",finishCntLoad);}else{JSSHOP.ajax.doNuAjaxPipe("includedContent","tplates/"+pid+".html",finishCntLoad);}}catch(f){alert("doMainContent: "+f);}};var fillMFormArr=function(a){try{tmpAforms=[];tmpAforms=JSON.parse(a.rs);arrAllForms=tmpAforms;if(arrAllForms.qco){JSSHOP.shared.setFrmVals("qco",arrAllForms.qco.v[0],function(){});}if(arrAllForms.quser){JSSHOP.shared.setFrmVals("quser",arrAllForms.quser.v[0],function(){void (0);});}if(arrAllForms.qcat){JSSHOP.shared.setFrmVals("qcat",arrAllForms.qcat.v[0],function(){void (0);});}if(arrAllForms.qitem){JSSHOP.shared.setFrmVals("qitem",arrAllForms.qitem.v[0],function(){void (0);});}if(arrAllForms.qextras){JSSHOP.shared.setFrmVals("qextras",arrAllForms.qextras.v[0],function(){void (0);});}if(arrAllForms.qcartitem){JSSHOP.shared.setFrmVals("qcartitem",arrAllForms.qcartitem.v[0],function(){void (0);});}doLoadACTB();}catch(b){alert("fillMFormArr: "+b);}};var doFrmQLoad=function(b,a){try{doCFrmQ=nCurrCnxOb();doCFrmQ["q"]="batch"+JSON.stringify(currFrmQArr);doCFrmQ["cb"]="fillMFormArr";doNurQComm(doCFrmQ);}catch(c){alert("doFrmQLoad; "+c+" "+doCFrmQ["q"]);}};function getCurrPID(){tmppid="index_main";tmpcurrUrlArr=null;tmpcurrUrlArr={};try{tmpPIDUrl=getCurrUrl();if(tmpPIDUrl=="noQvalue"){}else{tmpcurrUrlArr=JSSHOP.shared.urlToArray(tmpPIDUrl);if(tmpcurrUrlArr.pid){tmppid=tmpcurrUrlArr.pid;}}}catch(a){alert("getCurrPIDerror: "+a);}return tmppid;}var setCartIArr=function(f,d,g){currCartIArr=JSON.parse(d);};var doBootLoad=function(){try{JSSHOP.user.doCkieUprefs("prfsSHOPuser");}catch(a){alert("doBootLoad error: "+a);JSSHOP.logJSerror(a,arguments,"doBootLoad:doCkieUprefs");}try{if(arrUprefs["prfsSHOPuser"][0].sia=="y"){JSSHOP.ui.showHideElement("dvDemoAlert","show");}}catch(a){alert(a);}try{tmpUrl=getCurrUrl();if(tmpUrl=="noQvalue"){}else{currUrlArr=JSSHOP.shared.urlToArray(tmpUrl);if(currUrlArr.fc){forceCache=currUrlArr.fc;jscssprefix="";}if(currUrlArr.pid){pid=currUrlArr.pid;}if(currUrlArr.ppid){ppid=currUrlArr.ppid;}if(currUrlArr.cid){cid=currUrlArr.cid;addFrmQArr("qco",cid,"fnishCoForm");}if(currUrlArr.catid){catid=currUrlArr.catid;addFrmQArr("qcat",catid,"fnishCatForm");}if(currUrlArr.itemid){itemid=currUrlArr.itemid;addFrmQArr("qitem",itemid,"fnishItemForm");}}if(JSSHOP.cookies.getCookie("quid")!==null){quid=JSSHOP.cookies.getCookie("quid");addFrmQArr("quser",quid,"fnishUserForm");try{if(pid.indexOf("edit-")!=-1){currAdmnMode="y";JSSHOP.loadScript("css/"+jscssprefix+"x_admn.css",JSSHOP.checkLoader,"css");}}catch(a){alert("doBootLoad error: "+a);}}if(JSSHOP.cookies.getCookie("cartID")==null){tmpcid=Math.random().toString(36).slice(2);JSSHOP.cookies.setCookie("cartID",tmpcid,"30","","","");cartID=tmpcid;}else{cartID=JSSHOP.cookies.getCookie("cartID");if(currUrlArr.cid){tmpDOs=null;tmpDOs={};tmpDOs["ws"]="where ci_uid=? and ci_coid=? and ci_cartqty >? and ci_rtype=? and ci_cartid=?";tmpDOs["wa"]=[quid,cid,0,5,cartID];oi=getNuDBFnvp("qcartitem",5,null,tmpDOs);doQComm(oi["rq"],null,"setCartIArr");}}if(JSSHOP.cookies.getCookie("usrlang")!==null){usrlang=JSSHOP.cookies.getCookie("usrlang");}JSSHOP.loadScript("js/"+jscssprefix+"aa-"+usrlang+".js",doFrmQLoad,"js");}catch(a){alert("doBootLoad error: "+a);JSSHOP.logJSerror(a,arguments,"doBootLoad");}};var XXXXXXXXXXXfillDivs=function(){};var XXXXXXXdoBtmJSLoad=function(a){xx="ww";};var XXXXXXaLoadModSettings=function(){JSSHOP.loadScript("js/"+jscssprefix+"x_aa-mod-settings.js",JSSHOP.checkLoader,"js");};var XXXXXXXXXXXXXXdoCntLoad=function(f,d,h){try{document.getElementById(f).innerHTML=d;}catch(g){alert("doCntLoad.error: "+f+" : "+g);}};