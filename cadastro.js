    document.getElementById("formCadastro").addEventListener("submit", function(e) {
      e.preventDefault(); 

      const nome = document.getElementById("nome").value;

      if (!nome) {
        alert("Digite seu nome!");
        return;
      }

      localStorage.setItem("nomeUsuario", nome);

      window.location.href = "index.html";
    });