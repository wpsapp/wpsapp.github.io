"use strict";
let APP1;
let records;
let sha1;
let code;
let openid;
const appId = "AK20220921TSPWLO";
window.onload = () => {
    code = new URLSearchParams(location.search).get("code");
    if (!code)
        window.location.href = "https://developer.kdocs.cn/h5/auth?app_id=AK20220921TSPWLO&scope=user_basic&redirect_uri=" + window.location.href;
    else {
        const instance = WebOfficeSDK.config({
            url: 'https://www.kdocs.cn/office/k/239691124317?app_id=13gVPYyaoLrMZiw8PLADO1&share_id=G0YVC341pDSuNDbmr2rXw-iw&_w_tokentype=1',
            mount: document.getElementById("custom-mount"),
            refreshToken: () => { return { token: edittoken(), timeout: 60 * 60 * 24 * 1000 }; }
        });
        instance.setToken({
            token: edittoken(),
            timeout: 60 * 60 * 24 * 1000,
            hasRefreshTokenConfig: true
        });
    }
};
function edittoken() {
    let http = new XMLHttpRequest();
    http.open("GET", "https://zhibiao.uicp.fun/openid/AK20220921TSPWLO/" + code, false);
    http.send();
    openid = http.responseText;
    http.open("GET", "https://zhibiao.uicp.fun/edittoken/AK20220921TSPWLO/" + openid + "/" + code, false);
    http.send();
    return http.responseText;
}
//ExchangeToken-yoqaiykqijxhzpjmetaleqnrphxbhsxdgxoqewaisnduqcca
/* WebOfficeSDK.config({
        url: "https://www.kdocs.cn/office/k/239691124317?app_id=13gVPYyaoLrMZiw8PLADO1&share_id=G0YVC341pDSuNDbmr2rXw-iw",
        //url:"https://www.kdocs.cn/l/cojIiWjTwjYv",
        mount: document.getElementById("custom-mount") as HTMLElement,
    }).ready().then((e) => {
        APP1=e;
        return APP1.Sheets(5);
    }).then((sheet) => {
        return sheet.Record.GetRecords();
    }).then((recs) => {
        let timestamp = 0;
        let jsticket = "";
        for (let i = 0; i < recs.records.length; i++) {
            if (recs.records[i].fields.key == "jsticket") {
                timestamp = recs.records[i].fields.timestamp;
                jsticket = recs.records[i].fields.value;
            }
        }*/
/*
 sha1=new jsSHA("SHA-1","TEXT",{ encoding: "UTF8" });
 let jsticket="sM4AOVdWfPE4DxkXGEs8VIg3S6LumlLSveNvpaIZuJksAZZ-oyUc0sLCdN3vgvdRO-Gp1vPfzON-Mom4-DPC9w";
 let timestamp=1692837290;
 wx.config({
     debug: false,
     appId: 'wx8301d806150dba74',
     timestamp:timestamp,
     nonceStr: 'fxzqf',
     signature: sha1.update("jsapi_ticket=" + jsticket + "&" + "noncestr=fxzqf&" + "timestamp=" + timestamp + "&" + "url=" + window.location.href).getHash("HEX"),
     jsApiList: [
         'scanQRCode'
     ]
 });
 wx.ready(function () {
     wx.error(function (res: any) {
         alert(res.errMsg);
     });
 });
 let qrBt = document.querySelector('#scanQRCode1') as HTMLElement;
 // 9.1.2 扫描二维码并返回结果
 qrBt.onclick = function () {
     wx.scanQRCode({
         needResult: 1,
         desc: 'scanQRCode desc',
         success: function (res: any) {
             APP1.Sheets(2).then((e:any)=>{
                 e.Record.CreateRecords({Records:[{fields:{"编码":res.resultStr,"名称":"新添加商品"}}]});
             })
         }
     });
 };
 qrBt.innerText = "扫码添加"
*/
//export{};
