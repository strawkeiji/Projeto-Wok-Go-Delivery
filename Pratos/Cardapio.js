class Cardapio {
    constructor() {
        this.carrinho = new CarrinhoController();
        this.pratos = [];

        this.exibirDescricao();
        this.exibirPratosDaPromocao();
        this.exibirPratosCoreanos();
        this.exibirPratosJaponeses();
        this.exibirPratosTailandeses();
        this.exibirPratosChineses();
        this.exibirPratosVariados();
        this.carrinho.limparCarrinho();
        this.carrinho.exibirCarrinho();
    }

    exibirDescricao() {
     
        var divDescricao = document.getElementById("divDescricao");
        divDescricao.className = "divDescricao";

        var logo = document.createElement("img");
        logo.id = "logo";
        logo.src = "../logo.jpg";
        logo.src = "../logo.jpg";
        divDescricao.appendChild(logo);

        var spanTitulo = document.createElement("span");
        spanTitulo.id = "spanTitulo";
        spanTitulo.innerHTML = "Sobre nós" + "<br>";
        divDescricao.appendChild(spanTitulo);

        var spanDescricao = document.createElement("span");
        spanDescricao.id = "spanDescricaoRestaurante";

        spanDescricao.innerHTML = "O cardápio da Wok&Go conta com pratos especiais, feitos com massas artesanais de fabricação própria, ingredientes frescos e de qualidade com receitas baseadas  nos condimentos e demais temperos utilizados no Oriente." + "<br>" +
        "Somos referência no delivery de comida oriental na cidade e estamos prontos  para levar nossas delícias para o conforto da sua casa!" + "<br>" + "<br>" + "Contato: (67) 3240-9427" + "<br>" + "Atendemos também em endereços físicos: " + "<br>" + "R. Cigana 1, Carandá Bosque" + "<br>" + "R. Goiás 1773, Centro";
            
        divDescricao.appendChild(spanDescricao);
    
    }

    exibirPratosDaPromocao() {
        var divPromocoes = document.getElementById("divPromocoes");
        divPromocoes.className = "divPromocoes";

        var cabecalho = document.createElement("span");
        cabecalho.id = "spanCabecalho";
        cabecalho.innerHTML = "Promoções" + "<br>";

        divPromocoes.appendChild(cabecalho);

        for (let  i = 0; i < promocoes.length; i++) {
            this.montarPratos(divPromocoes, promocoes[i], this.carrinho);
        }

    }

    exibirPratosCoreanos() {
        var divPratosCoreanos = document.getElementById("divPratosCoreanos");
        divPratosCoreanos.className = "divPratosCoreanos";

        var cabecalho = document.createElement("span");
        cabecalho.id = "spanCabecalho";
        cabecalho.innerHTML = "Culinária Coreana" + "<br>";

        divPratosCoreanos.appendChild(cabecalho);

        for (let  i = 0; i < pratos_coreanos.length; i++) {
            this.montarPratos(divPratosCoreanos, pratos_coreanos[i], this.carrinho);
        }
    }

    exibirPratosJaponeses() {
        var divPratosJaponeses = document.getElementById("divPratosJaponeses");
        divPratosJaponeses.className = "divPratosJaponeses";

        var cabecalho = document.createElement("span");
        cabecalho.id = "spanCabecalho";
        cabecalho.innerHTML = "Culinária Nipônica" + "<br>";

        divPratosJaponeses.appendChild(cabecalho);

        for (let  i = 0; i < pratos_japoneses.length; i++) {
            this.montarPratos(divPratosJaponeses, pratos_japoneses[i], this.carrinho);
        }

    }

    exibirPratosTailandeses() {
        var divPratosTailandeses = document.getElementById("divPratosTailandeses");
        divPratosTailandeses.className = "divPratosTailandeses";

        var cabecalho = document.createElement("span");
        cabecalho.id = "spanCabecalho";
        cabecalho.innerHTML = "Culinária Tailandesa" + "<br>";

        divPratosTailandeses.appendChild(cabecalho);

        for (let  i = 0; i < pratos_tailandeses.length; i++) {
            this.montarPratos(divPratosTailandeses, pratos_tailandeses[i], this.carrinho);
        }

    }

    exibirPratosChineses() {
        var divPratosChineses = document.getElementById("divPratosChineses");
        divPratosChineses.className = "divPratosChineses";

        var cabecalho = document.createElement("span");
        cabecalho.id = "spanCabecalho";
        cabecalho.innerHTML = "Culinária Chinesa" + "<br>";

        divPratosChineses.appendChild(cabecalho);

        for (let  i = 0; i < pratos_chineses.length; i++) {
            this.montarPratos(divPratosChineses, pratos_chineses[i], this.carrinho);
        }

    }

    exibirPratosVariados() {
        var divPratosVariados = document.getElementById("divPratosVariados");
        divPratosVariados.className = "divPratosVariados";

        var cabecalho = document.createElement("span");
        cabecalho.id = "spanCabecalho";
        cabecalho.innerHTML = "Variados" + "<br>";

        divPratosVariados.appendChild(cabecalho);

        for (let  i = 0; i < pratos_variados.length; i++) {
            this.montarPratos(divPratosVariados, pratos_variados[i], this.carrinho);
        }

    }

    montarPratos(div, prato, carrinho) {
        var divPrato = document.createElement("div");
        divPrato.id = "divPrato";

        var fotoPromo = document.createElement("img");
        fotoPromo.id = "fotoPromo";
        fotoPromo.src = prato.imagem;

        divPrato.appendChild(fotoPromo);

        var spanNome = document.createElement("span");
        spanNome.id = "spanNome";
        spanNome.innerHTML = prato.nome + "<br>";
        divPrato.appendChild(spanNome); 

        var spanDescricao = document.createElement("span");
        spanDescricao.id = "spanDescricao";
        spanDescricao.innerHTML = prato.descricao + "<br>";
        divPrato.appendChild(spanDescricao);

        var spanPorcao = document.createElement("span");
        spanPorcao.id = "spanPorcao";
        spanPorcao.innerHTML = prato.porcao + "<br>";
        divPrato.appendChild(spanPorcao);

        var spanPreco = document.createElement("span");
        spanPreco.id = "spanPreco";
        spanPreco.innerHTML = "R$ " + parseFloat(prato.preco).toFixed(2);
        divPrato.appendChild(spanPreco);

        var adiciona = document.createElement("button");
        
        adiciona.onclick = function(){
            carrinho.adicionar(prato);
        };

        adiciona.id = "adicionaCarrinho";
        adiciona.innerText = "+";
        divPrato.appendChild(adiciona);
        div.appendChild(divPrato);
    }

    carregarLista() {
        this.todosOsPratos = todosOsPratos;
        window.localStorage.setItem("pratos", JSON.stringify(this.todosOsPratos));
        this.promocoes = promocoes;
        window.localStorage.setItem("promocoes", JSON.stringify(this.promocoes));
    }
}

let cardapio = new Cardapio();