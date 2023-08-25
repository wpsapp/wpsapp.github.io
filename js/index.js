"use strict";
window.onload = async () => {
    let urlsch = new URLSearchParams(location.search);
    let state = urlsch.get('state');
    let code = urlsch.get('code');
    let openid;
    if (code) {
        let http = new XMLHttpRequest();
        http.open("Get", "https://zhibiao.uicp.fun/edittoken/AK20220921TSPWLO/" + code, false);
        http.send();
        openid = http.responseText;
    }
    else {
        code = localStorage.getItem('code');
        openid = localStorage.getItem('openid');
    }
    if (code && openid)
        window.location.href = "https://wpsapp.github.io/" + state;
    else
        window.location.href = "https://developer.kdocs.cn/h5/auth?app_id=AK20220921TSPWLO&scope=user_basic&redirect_uri=https://wpsapp.github.io/&state=" + state;
};
function token(openid, code) {
    let http = new XMLHttpRequest();
    http.open("GET", "https://zhibiao.uicp.fun/edittoken/AK20220921TSPWLO/" + openid + "/" + code, false);
    http.send();
    return http.responseText;
}
