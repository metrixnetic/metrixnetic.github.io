
var person = { userID: "", name: "", accessToken: "", picture: "", email: ""};

function logIn() {
    FB.login(function (response) {

        if (response.status == "connected") {
            person.userID = response.authResponse.userID;
            person.accessToken = response.authResponse.accessToken;

            FB.api('/me?fields=id,name,email,picture.type(large)', function (userData) {
                person.name = userData.name;
                person.email = userData.email;
                person.picture = userData.picture.data.url;

                $.ajax({
                    url: "login.html",
                    method: "GET",
                    data: person,
                    dataType: 'text',
                    success: function (serverResponse) {
                       console.log(person);
                   }
                });

            });

        }

    }, {
        scope: 'public_profile, email'
        })
}

window.fbAsyncInit = function() {
    FB.init({
        appId : '2186245788146205',
        autoLogAppEvents : true,
        xfbml : true,
        version : 'v2.11'
    });
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];

    if (d.getElementById(id)) {
        return;
    }

    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
} (document, 'script', 'facebook-jssdk'));