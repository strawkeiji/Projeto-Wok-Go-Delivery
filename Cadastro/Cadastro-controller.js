class CadastroController {
    constructor() {
        this.cadastro = new Cadastro();
        this.clientes = [];
    }

    salvarDados() {
        this.cadastro.nome = document.getElementById("nomeCadastro").value;
        this.cadastro.email = document.getElementById("emailCadastro").value;
        this.cadastro.senha = document.getElementById("senhaCadastro").value;
        this.cadastro.rua = document.getElementById("rua").value;
        this.cadastro.bairro = document.getElementById("bairro").value;
        this.cadastro.numero = document.getElementById("numero").value;  
        this.clientes.push(this.cadastro);
        window.localStorage.setItem("clientes", JSON.stringify(this.clientes));  
    }

    /*getClientes() {
        return JSON.parse(window.localStorage.getItem("clientes"));
    }*/

    confirmar() {
        this.cadastro.emailLogin = document.getElementById("emailLogin").value;
        this.cadastro.senhaLogin = document.getElementById("senhaLogin").value;

        /*for (var i = 0; i < this.getClientes().length; i++) {
            if ((this.cadastro.emailLogin == this.getClientes()[i].email) && (this.cadastro.senhaLogin == this.getClientes()[i].senha)) {
                alert("Bem Vindo!");
                document.getElementById("conteudo").innerHTML = '<object type="text/html" data="/Cadastro/Pratos/Cardapio.html"></object>';
            }
        }*/
        
        for (var i = 0; i < clientes.length; i++) {
            if ((this.cadastro.emailLogin == clientes[i].email) && (this.cadastro.senhaLogin == clientes[i].senha)) {
                alert("Bem-Vindo(a) " + clientes[i].nome + "!");
                var divConteudo = document.getElementById("divconteudo");
                window.location.href = "../Pratos/Cardapio.html";
            }
        }  
    }

    redirecionarLogin() {
        var divLogin = document.getElementById("divLogin").style.display = "block";
        var divCadastro = document.getElementById("divCadastro").style.display = "none";
    }
    
    carregarLista() {
        window.localStorage.setItem("clientes", JSON.stringify(this.todosOsPratos));
    }
   
    exibirEndereco() {
        var divLogo = document.getElementById("divLogo");
        var imgPin = document.createElement("img");
        imgPin.id = "imgPin";
        imgPin.src = "local.png";
        divLogo.appendChild(imgPin);
        var spanEndereco = document.createElement("span");
        spanEndereco.id = "spanEndereco";
        spanEndereco.innerHTML = clientes[0].rua + ", " + clientes[0].numero + " - " + clientes[0].bairro;
        divLogo.appendChild(spanEndereco);
    }
}

let cadastroController = new CadastroController();