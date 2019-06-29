(function (window, document) {

    window.fbAsyncInit = function () {

        FB.init({
            appId: '1198673513641331',
            cookie: true,
            xfbml: true,
            version: 'v3.2'
        });

        FB.AppEvents.logPageView();

        FB.getLoginStatus(function (response) {
            document.getElementById('user-region').style.visibility = 'visible';
            statusChangeCallback(response);
        });
    
    };

    window.fbCheckLogin = function() {
        FB.getLoginStatus(function (response) {
            if(response.status === 'connected') {
               FB.logout(function(response){ statusChangeCallback(response); }); 
            } else {
               FB.login(function(response){ statusChangeCallback(response); });
            }
        });
    };

    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) { return; }
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/pt_BR/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    function statusChangeCallback(response) {
        var fbAction = document.getElementById('fb-action'),
            usuario = document.getElementById('usuario');
    	if(response.status === 'connected') {
           fbAction.innerHTML = 'Sair';
           FB.api('/me', function(user) {
               usuario.style.display='block';
               usuario.innerHTML = 'Ol\u00E1, '+user.name+', agrade\u00E7o sua visita!';
           });
        } else {
           usuario.style.display = 'none';
           fbAction.innerHTML = 'Entrar';
        }
    }

})(window, document);
1
