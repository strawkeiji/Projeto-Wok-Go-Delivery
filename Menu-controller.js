class MenuController {
    constructor() {}

	confirmar() {
        this.rua = document.getElementById("rua").value;
        this.bairro = document.getElementById("bairro").value;
        this.numero = document.getElementById("numero").value;

        console.log(this.rua);
        console.log(this.bairro);
        console.log(this.numero);

        if (this.validarCampos()) {
            document.getElementById("conteudo").innerHTML = '<object type="text/html" data="Pratos/Cardapio.html"></object>';
            this.exibirEndereco();
        }
    }

    validarCampos() {
        if ((this.rua != "") && (this.bairro != "") && (this.numero != "")) {
            return true;
        }
        else if (this.rua == "") {
            alert("CAMPO RUA VAZIO!");
            return false;
        }
        else if (this.bairro == "") {
            alert("CAMPO BAIRRO VAZIO!");
            return false;
        }
        else if (this.numero == "") {
            alert("CAMPO NÚMERO VAZIO!");
            return false;
        }
    }

    exibirEndereco() {
        var divLogo = document.getElementById("divLogo");
        var imgPin = document.createElement("img");
        imgPin.id = "imgPin";
        imgPin.src = "local.png";
        divLogo.appendChild(imgPin);
        var spanEndereco = document.createElement("span");
        spanEndereco.id = "spanEndereco";
        spanEndereco.innerHTML = this.rua + ", " + this.numero + " - " + this.bairro;
        divLogo.appendChild(spanEndereco);
    }

    cadastrar() {
        document.getElementById("conteudo").innerHTML = '<object type="text/html" data="Cadastro/Cadastro.html"></object>';
    }

    voltarInicio() {
        var divLogo = document.getElementById("divLogo").style.display = "none";
        document.getElementById("conteudo").innerHTML = '<object type="text/html" data="index.html"></object>';

    }
}

let menuController = new MenuController();