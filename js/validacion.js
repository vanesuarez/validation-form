document.addEventListener('DOMContentLoaded', function () {

  const forms = document.querySelectorAll('.needs-validation');

  forms.forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    });
  });

  // if(password1.value === password2.value)



  const checkbox = document.getElementById("terminos");

  if (checkbox.checked) {


  } else {


    
  }


});

