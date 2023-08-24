window.onload = async () => {
    let urlsch = new URLSearchParams(location.search)
    let state = urlsch.get('state');
    let openid = localStorage.getItem('openid');
    let code = localStorage.getItem('code');
    if(!code) code=urlsch.get('code');
    if (!code) 
        window.location.href="https://developer.kdocs.cn/h5/auth?app_id=AK20220921TSPWLO&scope=user_basic&redirect_uri=https://wpsapp.github.io/&state="+state;
    else{
        

    }


    
    if (state) {
        
    }
}