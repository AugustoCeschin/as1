function mascaraTelefone(event) {
  let tecla = event.key;

  let telefone = event.target.value.replace(/\D+/g, "");

   if (/^[0-9]$/i.test(tecla)) { // Se Tecla é número, concatena com telefone
    telefone = telefone + tecla;
    let tamanho = telefone.length;

    if (tamanho >= 12) { // Se telefone com 12 ou mais caracteres, não faz mais nada
      return false;
    }

    if (tamanho > 10) { 
      telefone = telefone.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (tamanho > 5) { 
      telefone = telefone.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (tamanho > 2) { 
      telefone = telefone.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    } else {
      telefone = telefone.replace(/^(\d*)/, "($1");
    }

    event.target.value = telefone;
  }

  if (!["Backspace", "Delete", "Tab", "Enter"].includes(tecla)) {
    return false;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const camposDeEntrada = document.querySelectorAll(".form-campo input");

  camposDeEntrada.forEach((input) => {
    if (!input.classList.contains("no-label")) {
      input.addEventListener("input", function() {
        if (input.value.trim() !== "") {
          const label = input.nextElementSibling;
          if (label) {
            label.style.top = "-10px";
          }
        } else {
          const label = input.nextElementSibling;
          if (label) {
            label.style.top = "10px";
          }
        }
      });

      input.addEventListener("focus", function() {
        const label = input.nextElementSibling;
        if (label) {
          label.style.top = "-10px";
        }
      });

      input.addEventListener("blur", function() {
        if (input.value.trim() === "") {
          const label = input.nextElementSibling;
          if (label) {
            label.style.top = "10px";
          }
        }
      });
    }
  });
});
