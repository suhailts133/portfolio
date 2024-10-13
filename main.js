function sendMail(){
    let params = {
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        subject:document.getElementById("subject").value,
        message:document.getElementById("message").value,
    }
    emailjs.send("service_oo4xg2d","template_nyy0p64", params).then((alert("your email has been send")))
}