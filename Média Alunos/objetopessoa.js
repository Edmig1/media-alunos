var murilovers = {
    nome: "Murilovers",
    idade: "16",
    profissao: "Vagabundo",
    endereço: {
        rua: "Nove de Julho",
        cidade: "Birigui",
        estado: "São Paulo"
    },

    printar() {
        console.log("Olá meu nome é ", murilovers.nome, "Tenho", murilovers.idade, " Anos, e sou um", murilovers.profissao);
    },
    printarlocal() {
        console.log("Moro na rua ", murilovers.endereço.rua, "que fica na cidade de", murilovers.endereço.cidade, "Localizada no estado de ", murilovers.endereço.estado);
    },
}
delete murilovers.profissao