document.addEventListener("DOMContentLoaded", function () {
  const forms = document.querySelectorAll(".needs-validation");

  forms.forEach(function (form) {
    form.addEventListener("submit", function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      if (password1.value === password2.value) {
        password2.setCustomValidity("");
      } else {
        password2.setCustomValidity('Debe ser igual a "contraseña"');
      }

      form.classList.add("was-validated");
    });
  });

  const checkbox = document.getElementById("terminos");

  if (checkbox.checked) {
  } else {
  }
});
