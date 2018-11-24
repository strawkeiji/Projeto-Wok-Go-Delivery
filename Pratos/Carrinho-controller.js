class CarrinhoController {
    constructor() {
        this.pratos_carrinho = [];
    }

    adicionar(prato) {
        console.log(prato);
        
        this.pratos_carrinho.push(prato);
        console.log(this.pratos_carrinho);
        window.localStorage.setItem("carrinho", JSON.stringify(this.pratos_carrinho));
        this.exibirCarrinho();
    }

    getCarrinho() {
        return JSON.parse(window.localStorage.getItem("carrinho"));
    }

    exibirCarrinho() {
        this.limparDivCarrinho();

        var divCarrinho = document.getElementById("divCarrinho");
        divCarrinho.id = "divCarrinho";
        
        var spanCarrinho = document.createElement("spanCarrinho");
        spanCarrinho.id = "spanCarrinho";
        spanCarrinho.innerText = "Carrinho";
        divCarrinho.appendChild(spanCarrinho);

        var total = document.createElement("span");
        total.innerText = "Total";
        total.id = "total";

        var contaTotal = document.createElement("span");
        contaTotal.id = "contaTotal";

        var conta = 0.0;
        for (var i = 0; i < this.getCarrinho().length; i++) {

            var nomeDoPrato = document.createElement("span");
            nomeDoPrato.className = "nomeDoPrato";

            var precoDoPrato = document.createElement("span");
            precoDoPrato.className = "precoDoPrato";

            nomeDoPrato.innerText = this.getCarrinho()[i].nome + " ";
            precoDoPrato.innerText = "R$" + parseFloat(this.getCarrinho()[i].preco).toFixed(2);

            conta = conta + this.getCarrinho()[i].preco;

            divCarrinho.appendChild(nomeDoPrato);
            divCarrinho.appendChild(precoDoPrato);
        }

        divCarrinho.appendChild(total);
        contaTotal.innerText = "R$" + parseFloat(conta).toFixed(2);
        
        divCarrinho.appendChild(contaTotal);
    }

    limparDivCarrinho() {
        document.getElementById("divCarrinho").innerHTML = '';
    }

    limparCarrinho() {
        localStorage.clear();
    }
}
