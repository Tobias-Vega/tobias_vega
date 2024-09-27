// ! REALIZAR LA LÓGICA DE REGISTRO DE USUARIOS AQUÍ

import "./style.css";

$form.addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const formData = new FormData($form);
  
    const entries = Object.fromEntries(formData.entries());
  
    fetch("http://localhost:4321/auth/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entries),
      credentials: "include"
    }).then((response) => {
      if (response.ok) {
        window.location.href = '../pages/login.html'
        
      } else {
        alert('Error al registrarse')
      }
    });
  });
  