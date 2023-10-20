document.addEventListener("DOMContentLoaded", function () {
  const forms = document.querySelectorAll(".needs-validation");
  const password1 = document.getElementById("password1");
  const password2 = document.getElementById("password2");
  const checkbox = document.getElementById("terminos");
  const termsButton = document.getElementById("termsFeedbackText");
  const validationText = document.getElementById("termsValidation");

  forms.forEach(function (form) {
    form.addEventListener("submit", function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } 
      form.classList.add("was-validated");

      // Validaciones del checkbox al enviar el formulario
      if (!checkbox.checked) {
        checkbox.classList.add("is-invalid");
        termsButton.classList.add("text-danger");
        validationText.style.display = "block";
      }

      // Validaciones del checkbox junto con el resto del formulario para resetearlo
      if (form.checkValidity() && checkbox.checked) {
        form.reset();
        updateFeedbackClasses(); // Llamar a la función para quitar las clases de validación
      }
    });

    // Evento para darle reset al formulario
    form.addEventListener("reset", function () {
      form.classList.remove("was-validated"); // quita las clases de validación al restablecer el formulario
    });

  });

  // Funcion para las contraseñas
  function passwordValidation() {
    if (password1.value === password2.value) {
      password2.setCustomValidity("");
    } else {
      password2.setCustomValidity('Debe ser igual a "contraseña"');
    }
  }

  password1.addEventListener("input", passwordValidation);
  password2.addEventListener("input", passwordValidation);

    // Funcion para el modal
  function updateFeedbackClasses() {
    if (checkbox.checked) {
      checkbox.classList.remove("is-invalid");
      checkbox.classList.add("is-valid");
      termsButton.classList.remove("text-danger");
      validationText.style.display = "none";
    } else {
      checkbox.classList.remove("is-valid");
      checkbox.classList.add("is-invalid");
      termsButton.classList.add("text-danger");
      validationText.style.display = "block";
    }
  }

  checkbox.addEventListener("change", updateFeedbackClasses);

});

