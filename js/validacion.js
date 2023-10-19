document.addEventListener("DOMContentLoaded", function () {
  const forms = document.querySelectorAll(".needs-validation");
  const password1 = document.getElementById("password1");
  const password2 = document.getElementById("password2");

  forms.forEach(function (form) {
    form.addEventListener("submit", function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add("was-validated");
    });
  });

  function passwordValidation() {
    if (password1.value === password2.value) {
      password2.setCustomValidity("");
    } else {
      password2.setCustomValidity('Debe ser igual a "contraseña"');
    }
  }
  
  password1.addEventListener("input", passwordValidation);
  password2.addEventListener("input", passwordValidation);
  
  const checkbox = document.getElementById("terminos");
  if (checkbox.checked) {
  } else {
  }
  
});
