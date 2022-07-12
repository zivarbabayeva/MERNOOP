function login(){
  let username = document.form.username.value;
  let password = document.form.password.value;
  let email = document.form.email.value;
  let ck_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    function checkForm(form)
    {
      if(form.username.value == "") {
        alert("Error: Username daxil edilmeyb!");
        form.username.focus();
        return false;
      }
      if (form.username.str !== 'string' || str.length === 0) {
        alert("Error: Username firstletter must be Uppercase!");
        form.username.focus();
        return false;
      }
      if (str[0].toUpperCase() === str[0]) {
        return true;
      }
      re = /^\w+$/;
      if(!re.test(form.username.value)) {
        alert("Error: Username must contain only letters, numbers and underscores!");
        form.username.focus();
        return false;
      }
  
      if(form.password.value != "" && form.password.value == form.password.value) {
        if(form.password.value.length < 6) {
          alert("Error: Password must contain at least six characters!");
          form.password.focus();
          return false;
        }
        if(form.password.value == form.username.value) {
          alert("Error: Password must be different from Username!");
          form.password.focus();
          return false;
        }
        re = /[0-9]/;
        if(!re.test(form.password.value)) {
          alert("Error: password must contain at least one number (0-9)!");
          form.password.focus();
          return false;
        }
        re = /[a-z]/;
        if(!re.test(form.password.value)) {
          alert("Error: password must contain at least one lowercase letter (a-z)!");
          form.password.focus();
          return false;
        }
        re = /[A-Z]/;
        if(!re.test(form.password.value)) {
          alert("Error: password must contain at least one uppercase letter (A-Z)!");
          form.password.focus();
          return false;
        }
      } else {
        alert("Error: Please check that you've entered and confirmed your password!");
        form.password.focus();
        return false;
      }
  
      alert("You entered a valid password: " + form.password.value);
      return true;
    }
    if(form.email.value == "") {
      alert("Error: Email daxil edilmeyib!");
      form.email.focus();
      return false;
  }
  
  if (!ck_email.test(email)) {
    alert("You must enter a valid email address.");
    form.email.focus();
    return false;
  }
}