

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents)
        {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}

// function sendMail(){
//     let parms = {
//         name : document.getElementById("name").value,
//         email : document.getElementById("email").value,
//         message : document.getElementById("message").value,
        
//     }

//     emailjs.send("service_do6fbjz", "template_t47r2ze",parms).then(alert("Email Sent!!"))

// }


function sendMail() {
    var parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        // name:"Dev",
        // email:"dd@gmail.com",
        // message:"xccxc"
        
    };

    emailjs
    .send("service_z4ds7qg","template_jvn4vv3", parms)
        .then((res) => {
            document.getElementById("name").value="",
        document.getElementById("email").value="",
        document.getElementById("message").value="",
        console.log(document.getElementById("name").value)
            alert("Email Sent!!");
            console.log(res);
            alert("SUCCESS!", response.status, response.text);
        });
}
