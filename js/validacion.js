document.addEventListener("DOMContentLoaded", function () {
  const forms = document.querySelectorAll(".needs-validation");
  const password1 = document.getElementById("password1");
  const password2 = document.getElementById("password2");
  const checkbox = document.getElementById("terminos");
  const feedbackText = document.getElementById("termsFeedbackText");

  forms.forEach(function (form) {
    form.addEventListener("submit", function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add("was-validated");
      if (!checkbox.checked) {
        checkbox.classList.add("is-invalid");
        feedbackText.classList.add("text-danger");
      }
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

  function updateFeedbackClasses() {
    if (checkbox.checked) {
      checkbox.classList.remove("is-invalid");
      checkbox.classList.add("is-valid");
      feedbackText.classList.remove("text-danger");
    } else {
      checkbox.classList.remove("is-valid");
      checkbox.classList.add("is-invalid");
      feedbackText.classList.add("text-danger");
    }
  }

  checkbox.addEventListener("change", updateFeedbackClasses);

});

