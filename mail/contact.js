const submit =  document.getElementById("sendMessageButton");
submit.addEventListener("click", sendData);
function sendData() {
    var preSendImg = document.querySelector(".preloader-two");
        setTimeout(function () {
            preSendImg.style.display = "none";
        }, 2000);
            preSendImg.style.display = "block";
            preSendImg.classList.add("fadeOutElement");
    }