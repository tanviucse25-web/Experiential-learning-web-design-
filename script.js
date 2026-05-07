<script>
function validateForm(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  if (name === "" || email === "") {
    alert("Please fill all required fields!");
    return;
  }

  document.getElementById("successPopup").style.display = "block";
}

function closePopup() {
  document.getElementById("successPopup").style.display = "none";
}
</script>
