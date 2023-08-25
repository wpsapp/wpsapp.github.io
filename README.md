# wpsapp.github.io
# wpsapp.github.io
wpsapp应用首页，使用https://wpsapp.github.io/?state=VALUE格式访问后会经过金山文档授权后跳转到https://wpsapp.github.io/VALUE
在访问https://wpsapp.github.io/VALUE时可以通过
localStorage.getItem("code", code);   //读取用户临时授权码
localStorage.getItem("openid", openid);//读取用户唯一身份码
localStorage.getItem("token", token); //读取用户在线编辑凭证（用于在线文档的编辑）
读取code,openid,token的值.