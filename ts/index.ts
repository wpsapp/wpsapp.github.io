//const getCodeUrl="https://developer.kdocs.cn/h5/auth?app_id=AK20220921TSPWLO&scope=user_basic&redirect_uri=" + window.location.href;
window.onload = async () => {
    let urlsch = new URLSearchParams(location.search)
    let state = urlsch.get('state');
    let code = localStorage.getItem('code');
    if(!code) code=urlsch.get('code');
    let openid = localStorage.getItem('openid');
    if (state) {
        if (code) {

        }
        else
            window.location.href="https://developer.kdocs.cn/h5/auth?app_id=AK20220921TSPWLO&scope=user_basic&redirect_uri=https://wpsapp.github.io/&state="+state;

    }
}