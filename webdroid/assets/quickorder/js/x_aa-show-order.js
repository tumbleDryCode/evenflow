var tmpSQBArr = [];
var tmpVitemArr = [];
var tmpVindex = 0;




/*
* opens up the item popup
*/

var doItemEditPop = function() {
    loadJSModal("tplates/aa-mod-edit-cartitem.html");
}
var doQIedit = function(iei) {
    tmpVindex = iei;
	 
    JSSHOP.shared.setFrmVals("qitem",tmpVitemArr[iei],function() {doItemEditPop()});
};

/*
* returns the html link for product editing popup
*/
var getQIstr = function(rid, tmprhtml) {
    strTret = "<div onclick=\"JSSHOP.ui.setCBBClickClr(this,'crsrPointer brdrClrHdr','crsrPointer brdrNone', function(){doQIedit(" + rid + ");});\" class=\"crsrPointer brdrNone\">";
    strTret += tmprhtml + "</div>";

    return strTret;
};


/*
* renders all items in the category
*/

var renderNuTQBItems = function(a,b,c) {
	// alert("rendering: " + JSON.stringify(tmpVitemArr));

    tstr = "";
    iint = 0;
    ppint = 1;
	 cartTtl = 0;
    len = tmpVitemArr.length;
    strHtml = "";
    while (iint < len) {
        ts = tmpVitemArr[iint];
        strRecID = ts._id;
        strRecType = 50;





        if (ts._id > 0) {
 

	na = ts.ci_price_a - ts.ci_price_b;
	nd = Math.round((na / ts.ci_price_a) * 100);
	strPriceHtml = "";

      tmpTttl = ts.ci_price_b * ts.ci_cartqty;
	cartTtl = cartTtl + tmpTttl;


            strPriceHtml = "";
		tmpIstrI = "images/menu_iconl.jpg";
		if(ts.ci_vala) {
		tmpVala = ts.ci_vala;
 		if(tmpVala.indexOf(".") != -1) {
		tmpIstrI = "images/pimgs/" + ts.ci_vala;	
		}  
		}	
            strImgDsct = "<span  style=\"float:  left\"><img src=\"" + tmpIstrI + "\" class=\"icnmedbtn\"></span>";
  
            strPriceHtml = "<span class=\"txtstriked txtBig txtClrGrey\">" + ts.ci_price_b + "</span>";
             strPriceHtml += "";     

            strHtml += "<tr>";

     
            strHtml += "<td>";
            strHtml += getQIstr(iint, strImgDsct +  ts.ci_title + "<br>" + strPriceHtml);


            strHtml += "</td>";
            strHtml += "<td>";
            strHtml += "<br><span class=\"txtBig txtClrDlg txtBold\">" + ts.ci_cartqty + "</span>";


            strHtml += "</td>";
 
            strHtml += "<td><br>" + tmpTttl + "";

            strHtml += "<input type=\"hidden\" id=\"prd" + 5 + iint + "\" value=\"\">";

/*
            if(iint == 0) {
            strHtml += "<input type=\"hidden\" name=\"item_name\" value=\"" +  ts.ci_title + "\">";
            strHtml += "<input type=\"hidden\" name=\"item_number\" value=\"" +  ts._id + "\">";
            strHtml += "<input type=\"hidden\" name=\"quantity\" value=\"" + ts.ci_cartqty + "\">";
            strHtml += "<input type=\"hidden\" name=\"amount\" value=\"" + ts.ci_price_b + "\">";
		} else {		}

*/
            strHtml += "<input type=\"hidden\" name=\"item_name_" + ppint + "\" value=\"" +  ts.ci_title + "\">";
            strHtml += "<input type=\"hidden\" name=\"item_number_" + ppint + "\" value=\"" +  ts._id + "\">";
            strHtml += "<input type=\"hidden\" name=\"quantity_" + ppint + "\" value=\"" + ts.ci_cartqty + "\">";
            strHtml += "<input type=\"hidden\" name=\"amount_" + ppint + "\" value=\"" + ts.ci_price_b + "\">";

            strHtml += "</td>";
            strHtml += "</tr>";
        }
	  ppint++;
        iint++;
    }
    if (tmpVitemArr[0]) {
        strTHhtml = "<th>" + stxt[19] + "</th><th>X</th><th style=\"text-align: center\" align=\"center\"><img src=\"images/picture_go.png\"></th>";
      strHtml += "<tr><td></td><td>Total:</td><td>" + cartTtl.toFixed(2) + "</td></tr>"; 
   } else {
        strHtml += "<td></td>";
        strTHhtml = "<th>Add Item to Catgeory</th>";
    }




newel = document.createElement('div');
// strTHhtml = "<th>X</th><th>Qty</th><th>Produto</th><th>Ttl</th>";
tmpFstr = getTblSortStr(strTHhtml, strHtml);
newel.innerHTML = tmpFstr;
tmpTDQI = document.getElementById("dvCartItems");
tmpTDQI.innerHTML = "";
tmpTDQI.appendChild(newel);



};



var renderDBis = function(theElem, theResp, marble) {
    // alert("renderDBis: " + theResp);
    tmpVitemArr = null;
    tmpVitemArr = [];
    tmpVitemArr = JSON.parse(theResp);
    renderNuTQBItems("add",tmpVitemArr,"dddc");
};


var aRenderCart = function(a, b, c) {
    // alert("pre: " + JSON.stringify(b));
    tmpDOs = null;
    tmpDOs = {};
    tmpDOs["ws"] = "where ci_uid=? and ci_coid=? and ci_cartqty >? and ci_rtype=?";
    tmpDOs["wa"] = [quid,cid,0,5]; 
    oi = getNuDBFnvp("qcartitem",5,null,tmpDOs);
    doQComm(oi["rq"], null, "renderDBis");
    // renderTQBItems();
};


 
 
 


var doCBcatedit = function(a, b, c) {
    doMMenuLd();
};


var doItemEdit = function() {
JSSHOP.ui.closeLbox();
    tmpFobj = null;
    tmpFobj = {};
    tmpFarr = null;
	
    tmpFarr = JSSHOP.shared.setArrVals(tmpVitemArr, tmpVindex, JSSHOP.shared.getDynFrmVals(document["qitem"], "mod_"));
    tmpVitemArr = null;
    tmpVitemArr = tmpFarr;
    tmpFobj["knvp"] = JSSHOP.shared.getKNVParr(JSSHOP.shared.getDynFrmVals(document["qitem"], "mod_"));
    tmpFobj["ws"] = "where _id=?";
    tmpFobj["wa"] = [JSSHOP.shared.getFrmFieldVal("qcartitem","_id","0")];
    oi = getNuDBFnvp("qitem", 7, null, tmpFobj);
    // JSSHOP.ui.setCBBClickClr(tblCntEditItem,'cls_button cls_button-medium brdrClrDlg txtClrHdr','txtClrHdr bkgdClrWhite', function(){JSSHOP.ui.closeLbox()});
    JSSHOP.ui.setCBBClickClr(divQitems,'cls_button cls_button-medium brdrClrDlg txtClrHdr','txtClrHdr bkgdClrWhite', function(){JSSHOP.ui.closeLbox()});

    // alert("oiRQ " + oi["rq"]); 
    doQComm(oi["rq"], null, "renderNuTQBItems"); 
};



var doItemAdd = function(t, am) {
    tmpFobj = null;
    tmpFobj = {};
    tmpFobj["knvp"] = JSSHOP.shared.getKNVParr(JSSHOP.shared.getDynFrmVals(document["qitem"], "tmp_"));
    oi = getNuDBFnvp("qcartitem", 6, null, tmpFobj);
    JSSHOP.ui.setCBBClickClr(divQitems,'cls_button cls_button-medium brdrClrDlg txtClrHdr','txtClrHdr bkgdClrWhite', function(){JSSHOP.ui.closeLbox()});

    //alert("doItemAdd: rq" + oi["rq"]); 
    doQComm(oi["rq"], null, "preRenderTQBItems");
};


var doItemDelete = function(theElem, qid, theRid) {
    carr = tmpVitemArr[qid];
    narr = removeArrElement(tmpVitemArr, theRid);
    theElem.parentNode.parentNode.parentNode.deleteRow(theRid);
    tmpVitemArr = null;
    tmpVitemArr = narr;
    JSSHOP.ui.setCBBClickClr(dvCartItems,'cls_button cls_button-medium brdrClrDlg txtClrHdr','txtClrHdr bkgdClrWhite', function(){JSSHOP.ui.closeLbox()});

    procNuUIitem("qcartitem","ci_rtype",qid,"0","renderNuTQBItems") 
 
};
 


var showQbit = function() {
    tmpStrsq = JSON.stringify(tmpVitemArr);
    tmpSQia = [];
    tmpSQio = {};
    tmpStrsq = "";
    tmpSQia.push(quid);
    tmpSQia.push(JSSHOP.shared.getFrmFieldVal("qco", "_id", cid));
    tmpSQia.push(JSSHOP.shared.getFrmFieldVal("qco", "c_title", "ABC Co."));
    tmpSQia.push(JSSHOP.shared.getFrmFieldVal("qco", "c_tel", "123 ABC Co."));
    tmpSQia.push(JSSHOP.shared.getFrmFieldVal("qco", "c_web", "ABC .Com"));
    tmpSQia.push(JSSHOP.shared.getFrmFieldVal("qco", "c_email", "@ABC Co."));
    tmpSQia.push(ppid);
    tmpSQia.push(JSSHOP.shared.getFrmFieldVal("qbit", "q_title", "Q title"));
    tmpSQia.push(JSSHOP.shared.getFrmFieldVal("qbit", "q_desc", "Q desc"));
    tt = [];
    iint = 0;
    len = tmpVitemArr.length;
    strHtml = "";
    while (iint < len) {
        ts = tmpVitemArr[iint];
        tf = null;
        tf = [];
        for (var gkey in ts) {
            tf.push(ts[gkey]);
        }
        tt.push(tf);
        iint++;
    }
    tmpSQia.push(tt);
    tmpSQis = JSON.stringify(tmpSQia);
    tmpSQias = encPrefCky(tmpSQis);
   // alert("tmpS: " + tmpSQis.length + " : " + tmpSQias.length + "\r\n" + tmpSQias);
    tcnvs = doqr(tmpSQias);
    // tcnvs = docPrefCky(tmpSQias);
    cdiv = document.getElementById('lightbox_content');
    cdiv.appendChild(tcnvs);
    JSSHOP.ui.popAndFillLbox("noQvalue");
    // transRes(tmpSQias);
    // alert("tmpSQis: " + tmpSQis);
    // alert("tmpSQias: " + tmpSQias);
};



 

var fillUserForm = function(theElem, theResp, marble) {
    tmpvarr = null;
    tmpvarr = JSON.parse(theResp);
    JSSHOP.shared.setFrmVals("quser",tmpvarr[0],function() { void(0)});

};

var fillCatForm = function(theElem, theResp, marble) {
    tmpvarr = null;
    tmpvarr = JSON.parse(theResp);
    JSSHOP.shared.setFrmVals("qcat",tmpvarr[0],function() { document.getElementById("tmpQtitle").value = document.getElementById("cat_title").value});

};

var fillCoForm = function(theElem, theResp, marble) {
    tmpvarr = null;
    tmpvarr = JSON.parse(theResp);
    JSSHOP.shared.setFrmVals("qco",tmpvarr[0],function() {JSSHOP.ui.setTinnerHTML("tdCoTitle", JSSHOP.shared.getFieldVal("c_title", "theCo"))});
};


/*
* Process cart
*/

var doProcCart = function() {
qStr = "insert into qordereditem(_id,ci_rtype,ci_uid,ci_cartid,ci_coid,ci_pid,ci_title,ci_price_a,ci_price_b,ci_dimen_n,ci_dimen_v,ci_cartqty,ci_vala,ci_valb,ci_dadded)";
qStr += " select _id,ci_rtype,ci_uid,ci_cartid,ci_coid,ci_pid,ci_title,ci_price_a,ci_price_b,ci_dimen_n,ci_dimen_v,ci_cartqty,ci_vala,ci_valb,ci_dadded from qcartitem";
qStr += " where ci_uid= " + quid + " and ci_coid= " + cid + " and ci_cartqty > 0;";
doQComm(qStr, null, "retProcCart");
};


 

/*
 * main loader function
 */
var aLoadShowOrder = function() {

    // JSSHOP.loadScript("js/x_aqr.js", JSSHOP.checkLoader, "js");
    tmpDOs = null;
    tmpDOs = {};
    tmpDOs["ws"] = "where _id=?";
    tmpDOs["wa"] = [cid];
    oi = getNuDBFnvp("qco", 5, null, tmpDOs);
    // doNuQComm(oi["rq"],"qco","fillGenForm", fnshFormFill());
    doQComm(oi["rq"],"qco","fillCoForm");
    if (ppid == 0) {} else {
 

        tmpDOs = null;
        tmpDOs = {};
        tmpDOs["ws"] = "where _id=?";
        tmpDOs["wa"] = [JSSHOP.cookies.getCookie("quid")];
        oi = getNuDBFnvp("quser", 5, null, tmpDOs);
        doQComm(oi["rq"], null, "fillUserForm");


	if(getPVname("c") != null) {
	alert(getPVname("c") + " :: " + document.referrer);
	 aRenderCart("aa","aa","aa");
	} else {


	alert("Something wrong");
	}
    }
    // doQComm('select * from prod_options order by OptionType desc limit 500', null, "rEditProdOptions")
};

 

  
