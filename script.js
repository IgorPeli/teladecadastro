init()

function init(){
    document.getElementById("nome").addEventListener("keyup", prox)
    document.getElementById("cpf").addEventListener("keyup", prox)
    document.getElementById("email").addEventListener("keyup", prox)
    document.getElementById("cep").addEventListener("keyup", prox)
    document.getElementById("senha").addEventListener("keyup", prox)
  
 
}

function prox() {
        var nome = document.getElementById("nome").value
        var cpf = document.getElementById("cpf").value
      var email = document.getElementById("email").value
        var cep = document.getElementById("cep").value
      var senha = document.getElementById("senha").value
      
      
      localStorage.setItem("nome", nome)
        localStorage.setItem("cpf", cpf)
        localStorage.setItem("email", email)
        localStorage.setItem("cep", cep)
        localStorage.setItem("senha", senha)
      }

