let APP1;
let records;
let sha1 = new jsSHA("SHA-1", "TEXT", { encoding: "UTF8" });
window.onload = () => {
    WebOfficeSDK.config({
        url: "https://www.kdocs.cn/office/k/239691124317?app_id=13gVPYyaoLrMZiw8PLADO1&share_id=G0YVC341pDSuNDbmr2rXw-iw",
        //url:"https://www.kdocs.cn/l/cojIiWjTwjYv",
        mount: document.getElementById("custom-mount"),
    }).ready().then((e) => {
        APP1 = e;
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
        }
        wx.config({
            debug: false,
            appId: 'wx8301d806150dba74',
            timestamp: timestamp,
            nonceStr: 'fxzqf',
            signature: sha1.update("jsapi_ticket=" + jsticket + "&" + "noncestr=fxzqf&" + "timestamp=" + timestamp + "&" + "url=" + window.location.href).getHash("HEX"),
            jsApiList: [
                'scanQRCode'
            ]
        });
        wx.ready(function () {
            wx.error(function (res) {
                alert(res.errMsg);
            });
        });
        let qrBt = document.querySelector('#scanQRCode1');
        // 9.1.2 扫描二维码并返回结果
        qrBt.onclick = function () {
            wx.scanQRCode({
                needResult: 1,
                desc: 'scanQRCode desc',
                success: function (res) {
                    APP1.Sheets(2).then((e) => {
                        e.Record.CreateRecords({ Records: [{ fields: { "编码": res.resultStr, "名称": "新添加商品" } }] });
                    });
                }
            });
        };
        qrBt.innerText = "扫码添加";
    });
};
export {};
