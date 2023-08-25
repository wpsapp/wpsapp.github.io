window.onload = async () => {

    let urlsch = new URLSearchParams(location.search)
    let state = urlsch.get('state');
    let code = urlsch.get('code');
    let openid: string | null=null;
    if (code) {
        let http = new XMLHttpRequest();
        http.open("Get", "https://zhibiao.uicp.fun/openid/AK20220921TSPWLO/" + code, false);
        http.send();
        if(http.readyState==4) openid = http.responseText;
    }
    else {
        code = localStorage.getItem('code');
        openid = localStorage.getItem('openid');
    }
    if (state)
        if (code && openid)
            window.location.href = "https://wpsapp.github.io/" + state;
        else
            window.location.href = "https://developer.kdocs.cn/h5/auth?app_id=AK20220921TSPWLO&scope=user_basic&redirect_uri=https://wpsapp.github.io/&state=" + state;
}
