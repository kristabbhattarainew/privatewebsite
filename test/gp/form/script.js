const onFormSubmit = () => {
  //grabbing value of name and password
  const name = document.getElementById("name");
  const psw = document.getElementById("psw");

  //grabbing error elements
  const invalidName = document.getElementById("invalid-name");
  const invalidPsw = document.getElementById("invalid-password");

  //checking if name is empty or less than 3 characters
  if (name.value === "" || name.value.length < 3) {
    return (invalidName.style.display = "block");
  } else {
    invalidName.style.display = "none";
  }

  //checking if password is empty or less than 6 characters
  if (psw.value === "" || psw.value.length < 6) {
    return (invalidPsw.style.display = "block");
  } else {
    invalidPsw.style.display = "none";
  }

  //if name and password are valid
  alert(`Login Successfull! Welcome ${name.value}.`);
};
