init()

function init(){
    document.getElementById("nome").addEventListener("keyup", proximo)
    document.getElementById("cpf").addEventListener("keyup", proximo)
    document.getElementById("email").addEventListener("keyup", proximo)
    document.getElementById("cep").addEventListener("keyup", proximo)
    document.getElementById("senha").addEventListener("keyup", proximo)
    document.getElementById("pais").addEventListener("keyup", proximo)
    document.getElementById("estado").addEventListener("keyup", proximo)
    document.getElementById("logadouro").addEventListener("keyup", proximo)
    document.getElementById("complemento").addEventListener("keyup", proximo)
    document.getElementById("bairro").addEventListener("keyup", proximo)
  
 
}

        function proximo() {
        var nome = document.getElementById("nome").value
        var cpf = document.getElementById("cpf").value
        var email = document.getElementById("email").value
        var cep = document.getElementById("cep").value
        var senha = document.getElementById("senha").value
        var pais = document.getElementById("pais").value
        var estado = document.getElementById("estado").value
        var logadouro = document.getElementById("logadouro").value
        var complemento = document.getElementById("complemento").value
        var bairro = document.getElementById("bairro").value

        localStorage.setItem("nome", nome)
        localStorage.setItem("cpf", cpf)
        localStorage.setItem("email", email)
        localStorage.setItem("cep", cep)
        localStorage.setItem("senha", senha)
        localStorage.setItem("pais", pais)
        localStorage.setItem("estado", estado)
        localStorage.setItem("logadouro", logadouro)
        localStorage.setItem("complemento", complemento)
        localStorage.setItem("bairro", bairro)
      
      
      }
      
    