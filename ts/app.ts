const Config: WebOffice.IConfig = {
    //url: "https://appdocs.wpscdn.cn/office/d/chh4aITYcm37?_w_tokentype=1&disablePlugins=true",
    
    url: "https://www.kdocs.cn/office/k/239691124317?app_id=13gVPYyaoLrMZiw8PLADO1&share_id=G0YVC341pDSuNDbmr2rXw-iw",
    mount: document.getElementById("#custom-mount") as HTMLElement,
    onHyperLinkOpen: (linkData) => {console.log("Link:" + linkData.linkUrl); },
    onToast: (toastData) => { console.log("Toast:" + toastData.action); },
    commonOptions: {
        isShowTopArea:false, 
        isShowHeader: false, 
        isIframeViewFullscreen: false,
        isParentFullscreen: false,
        isBrowserViewFullscreen: false,

    },
    dbOptions: { isShowFeedback: true },
    
};
var APP: WebOffice.IWps;
window.onload = () => {
    APP = WebOfficeSDK.config(Config);
    //APP.setToken({ token: "ExchangeToken-xpwxoixbuiesjawzlupntobmogepnelchotwliateumntkgh", timeout: 10 * 60 * 100, hasRefreshTokenConfig: false });
    
    APP.ApiEvent.AddApiEventListener("fileOpen", fileOpen);
    APP.ApiEvent.AddApiEventListener("error", error);
    APP.ready().then((e)=>{
        APP.ApiEvent.AddApiEventListener("OnBroadcast", OnBroadcast);
        APP.ApiEvent.AddApiEventListener("ViewDataUpdate", ViewDataUpdate);
        APP.ApiEvent.AddApiEventListener("SelectionChange", SelectionChange);
    });
    function error(data: any) {
        alert("Error");
    }
    function fileOpen(data: any) {
        console.log(data.fileInfo);
    }
    function OnBroadcast(data: any) {
        console.log(data);
    }
    function ViewDataUpdate(data: any) {
        console.log(data);
    }
    function SelectionChange(data: any) {
        console.log(data);
    }
}


/**
 * app_id=AK20220805VGESRU&app_key=lriwnltnwsirgzoqtkpjsfxqnnuyxjws
 * {
"fname": "数据表.dbt",
"fsize": 19943,
"ftype": "sharefile",
"fver": 16,
"ctime": 1654050615,
-"group": {
"open_id": "zFrXRGNOrqx9FVQe-RqwrFnVsPAw8v0yCHStd_m5tIk",
"union_id": "9SCG3-zYX3kBOgCldE6-O1nVsPAw8v0yCHStd_m5tIk"
},
-"parent": {
"open_id": "zFrXRGNOrqx9FVQe-RqwrGWVt6BaxGyuB-PjwVzY8nw",
"union_id": "9SCG3-zYX3kBOgCldE6-O2WVt6BaxGyuB-PjwVzY8nw"
},
-"id": {
"open_id": "zFrXRGNOrqx9FVQe-RqwrNhyIFefOCTNGum23gpgsOo",
"union_id": "9SCG3-zYX3kBOgCldE6-O9hyIFefOCTNGum23gpgsOo"
}
},
 * {
"code": 0,
-"data": {
"app_id": "AK20220805VGESRU",
"access_token": "lczMxKEXCBDNtscfWbfHhGtXQNgMUCiW",
"expires_in": 86400,
"refresh_token": "HulCynFwTjiTbAaDfAAWBjQVcxKFDlIH"
},
"result": "ok"
}
 */




/*

  this.wps.iframe.onload1 = () => {
  if (!this.wps.iframeReady) this.wps.iframe.src = "https://account.wps.cn/?qrcode=kdocs&logo=kdocs&accessid=AK20210823OPGONG&from=v1-web-kdocs-login&cb=https%3A%2F%2Faccount.wps.cn%2Fapi%2Fv3%2Fsession%2Fcorrelate%2Fredirect%3Ft%3D1661241340991%26appid%3D375024576%26cb%3Dhttps%253A%252F%252Fwww.kdocs.cn%252FsingleSign4CST%253Fcb%253Dhttps%3A%2F%2Ffxzqf.github.io%2Fkdocs%2F";
  this.Config.url = this.wps.iframe.src;
 
  console.log("Onload");
  this.wps.ready().then((e: EtApplication) => {
    this.wps.ApiEvent.AddApiEventListener("Worksheet_Activate", this.SheetActive);
    this.wps.ApiEvent.AddApiEventListener("Worksheet_SelectionChange", this.SelectChange);
    return e.ActiveWorkbook.GetOperatorsInfo();
  }).then((e) => {
    console.log(e.response);
  }).catch((e) => {

SheetActive(data: any) {
console.log("SelectChange");
}
SelectChange(data: any) {
let promise = new Promise(
  function (resolve, reject) {
    resolve(1);
    console.log("Promise create");
  });
promise.then((e => { console.log(e); }))
console.log(this.Application);
}
}







var promise = new Promise(function (resolve, reject) {
setTimeout(function () {
  resolve("hghg");
}, 2000);
});
promise.then((e)=>{alert(e)}); 

this.jssdk = WebOfficeSDK.config({
url: "https://www.kdocs.cn/l/cagNbUYJX08f?R=%2FS%2F4",
 
mount: document.getElementsByClassName("custom-mount")[0] as HTMLElement,
onHyperLinkOpen: async (obj: { linkUrl: string }) => {
console.log(obj.linkUrl);
const app1 = this.jssdk.Application;
},
onToast: ({ msg, action }) => { alert(action) },
});
(async () => { await this.jssdk.ready(); })();
this.Application = this.jssdk.Application;
alert(this.Application);




if (!this.jssdk.iframeReady) this.jssdk.iframe.src = "https://account.wps.cn/?qrcode=kdocs&logo=kdocs&accessid=AK20210823OPGONG&from=v1-web-kdocs-login&cb=https%3A%2F%2Faccount.wps.cn%2Fapi%2Fv3%2Fsession%2Fcorrelate%2Fredirect%3Ft%3D1661241340991%26appid%3D375024576%26cb%3Dhttps%253A%252F%252Fwww.kdocs.cn%252FsingleSign4CST%253Fcb%253Dhttps://www.kdocs.cn/l/coO0iEfp4s1c";

get Application(): any {
return (async () => {return await this.jssdk.Application;})()
}*/
