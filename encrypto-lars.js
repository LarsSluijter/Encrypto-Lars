$(function() {
    var messages = [];

    $("#send-button").click(function(e) {
        var name = $("#name").val(),
        secret = $("#secret").val(),
        password = $("#password").val();
        
        if (secret.trim().length > 0) {
            encrypt(name, secret, password);
        } else {
            decrypt(name, password);
        }
    })

    $(".data").on("input", function(){
        if($("#secret").val().trim().length > 0){
            $("#send-button").html("Encrypt tekst!")
        } else {
            $("#send-button").html("Decrypt tekst!")
        }
    });

    function encrypt(name, secret, password) {
        messages[name] = sjcl.encrypt(password, secret);
        $("#info").html("Jouw bericht is ge&euml;ncrypt, vul jouw naam en wachtwoord weer in om je bericht weer te zien!");
    }

    function decrypt(name, password) {
        $("#info").html("");
        var secret = sjcl.decrypt(password, messages[name]);
        $("#info").html('Jouw geheime tekst is "'+secret+'"');
    }
});

