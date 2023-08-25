"use strict";
let urlsch = new URLSearchParams(location.search);
let state = urlsch.get('state');
if (state)
    window.onload = async () => {
        let code = urlsch.get('code');
        let openid = null;
        let token = null;
        if (code) {
            let http = new XMLHttpRequest();
            http.open("GET", "https://zhibiao.uicp.fun/openid/AK20220921TSPWLO/" + code, false);
            http.send();
            if (http.readyState == 4) {
                openid = http.responseText;
                localStorage.setItem("code", code);
                localStorage.setItem("openid", openid);
            }
        }
        code = localStorage.getItem('code');
        openid = localStorage.getItem('openid');
        if (code && openid) {
            let http = new XMLHttpRequest();
            http.open("GET", "https://zhibiao.uicp.fun/edittoken/AK20220921TSPWLO/" + openid + "/" + code, false);
            http.send();
            token = http.responseText;
            localStorage.setItem("token", token);
        }
        if (token)
            window.location.href = "https://wpsapp.github.io/" + state;
        else
            window.location.href = "https://developer.kdocs.cn/h5/auth?app_id=AK20220921TSPWLO&scope=user_basic&redirect_uri=https://wpsapp.github.io/&state=" + state;
    };
