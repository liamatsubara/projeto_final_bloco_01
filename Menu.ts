import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { LivroFisico } from "./src/model/LivroFisico";
import { LivroDigital } from "./src/model/LivroDigital";
import { LivroController } from "./src/controller/LivroController";

export function main() {

    let opcao, id, numPaginas, preco, tipo, quantidade, tamanhoArquivo: number;
    let nome, autor, dataPublicacao, editora, dimensoes: string;
    let tipoLivros = ['Livro Fisico', 'Livro Digital'];

    const livros = new LivroController();

    // Novas Instâncias da Classe LivroFisico
    console.log("");
    livros.cadastrarLivro(new LivroFisico(livros.gerarNumero(), "Feliz Ano Velho", "Marcelo Rubens Paiva", "04/08/2015", "Alfaguara", 272, 58, 1, "23.37 x 14.99 x 1.52 cm", 300));
    livros.cadastrarLivro(new LivroFisico(livros.gerarNumero(), "Tudo é Rio", "Carla Madeira", "08/02/2021", "Record", 210, 47.40, 1, "15.5 x 1.1 x 23 cm", 200)); 


    // Novas Instâncias da Classe LivroDigital
    livros.cadastrarLivro(new LivroDigital(livros.gerarNumero(), "Biblioteca da Meia-Noite", "Matt Haig", "30/09/2021", "Bertrand", 366, 15.95, 2, 3590));
    livros.cadastrarLivro(new LivroDigital(livros.gerarNumero(), "Tudo Sobre o Amor: Novas Perspectivas", "Bell Hooks", "24/02/2021", "Elefante", 260, 42,75, 2050));


    while (true) {

        console.log(colors.bg.black, colors.fg.yellow, 
                    "\n*****************************************************");
        console.log("                                                     ");
        console.log(colors.bg.black, colors.fg.orange,
                    "                LIVRARIA GIRASSOL                    ");
        console.log("                                                     ");
        console.log(colors.bg.black, colors.fg.yellow)
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log(colors.bg.black, colors.fg.orange);
        console.log("            1 - Listar Todos os Livros               ");
        console.log("            2 - Listar Livro pelo ID                 ");
        console.log("            3 - Cadastrar Livro                      ");
        console.log("            4 - Atualizar Livro                      ");
        console.log("            5 - Deletar Livro                        ");
        console.log("            0 - Sair                                 ");
        console.log("                                                     ");
        console.log(colors.bg.black, colors.fg.yellow);
        console.log("*****************************************************");
        console.log("                                                     ", 
        colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 0) {
            console.log(colors.fg.gray, 
                "\nLIVRARIA GIRASSOL - Ilumine seu dia com boas histórias!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.orange, 
                    "\n\nListar Todos os Livros\n", colors.reset);
                    livros.listarLivros();

                keyPress()
                break;
            case 2:
                console.log(colors.fg.orange, 
                    "\n\nListar Livro pelo ID\n", colors.reset);
                    console.log("Digite o ID do Livro: ");
                    id = readlinesync.questionInt('');
                    livros.listarLivroPorID(id);

                keyPress()
                break;
            case 3:
                console.log(colors.fg.orange, 
                    "\n\nCadastrar Livro\n", colors.reset);

                    console.log("\nDigite o Nome do Livro: ");
                    nome = readlinesync.question('');

                    console.log("\nDigite o Autor(a) do Livro: ");
                    autor = readlinesync.question('');

                    console.log("\nDigite a Data de Publicação do Livro: ");
                    dataPublicacao = readlinesync.question('');

                    console.log("\nDigite a Editora do Livro: ");
                    editora = readlinesync.question('');

                    console.log("\nDigite o Número de Páginas do Livro: ");
                    numPaginas = readlinesync.questionInt('');

                    console.log("\nDigite o preço do Livro: ");
                    preco = readlinesync.questionFloat('');

                    console.log("\nEscolha o Tipo de Livro: ");
                    tipo = readlinesync.keyInSelect(tipoLivros, "", {cancel: false}) + 1;

                    switch(tipo){
                        case 1:
                            console.log("\nDigite as Dimensões do Livro: ");
                            dimensoes = readlinesync.question('');
                            console.log("\nDigite a Quantidade em Estoque do Livro: ");
                            quantidade = readlinesync.questionInt('');

                            livros.cadastrarLivro(new LivroFisico(livros.gerarNumero(), nome, autor, dataPublicacao, editora, numPaginas, preco, tipo, dimensoes, quantidade));
                        break;
    
                        case 2:
                            console.log("\nDigite o Tamanho do Arquivo do Livro (KB): ");
                            tamanhoArquivo = readlinesync.questionInt('');

                            livros.cadastrarLivro(new LivroDigital(livros.gerarNumero(), nome, autor, dataPublicacao, editora, numPaginas, preco, tipo, tamanhoArquivo));
                        break;
                    }

                keyPress()
                break;
            case 4:
                console.log(colors.fg.orange, 
                    "\n\nAtualizar Livro\n", colors.reset);

                    console.log("Digite o ID do Livro: ");
                    id = readlinesync.questionInt('');

                    let livro = livros.buscarNoArray(id);

                    if (livro !== null){

                        console.log("\nDigite o Nome Atualizado do Livro: ");
                        nome = readlinesync.question('');

                        console.log("\nDigite o Autor(a) Atualizado do Livro: ");
                        autor = readlinesync.question('');

                        console.log("\nDigite a Data de Publicação Atualizada do Livro: ");
                        dataPublicacao = readlinesync.question('');

                        console.log("\nDigite a Editora Atualizada do Livro: ");
                        editora = readlinesync.question('');

                        console.log("\nDigite o Número de Páginas Atualizada do Livro: ");
                        numPaginas = readlinesync.questionInt('');

                        console.log("\nDigite o preço Atualizado do Livro: ");
                        preco = readlinesync.questionFloat('');

                        tipo = livro.tipo;

                        switch(tipo){
                            case 1:
                                console.log("\nDigite as Dimensões Atualizadas do Livro: ");
                                dimensoes = readlinesync.question('');
                                console.log("\nDigite a Quantidade em Estoque Atualizada do Livro: ");
                                quantidade = readlinesync.questionInt('');
    
                                livros.atualizarLivro(new LivroFisico(livros.gerarNumero(), nome, autor, dataPublicacao, editora, numPaginas, preco, tipo, dimensoes, quantidade));
                            break;
        
                            case 2:
                                console.log("\nDigite o Tamanho do Arquivo Atualizado do Livro (KB): ");
                                tamanhoArquivo = readlinesync.questionInt('');
    
                                livros.atualizarLivro(new LivroDigital(livros.gerarNumero(), nome, autor, dataPublicacao, editora, numPaginas, preco, tipo, tamanhoArquivo));
                            break;
                        }

                    } else {
                        console.log("Livro não encontrado!");
                    }

                keyPress()
                break;
            case 5:
                console.log(colors.fg.orange, 
                    "\n\nDeletar Livro\n", colors.reset);

                    console.log("Digite o ID do Livro: ");
                    id = readlinesync.questionInt('');

                    livros.deletarLivro(id);

                keyPress()
                break;
            default:
                console.log(colors.fg.orange, 
                    "\nOpção Inválida!\n", colors.reset);
                keyPress()
                break;
        }
    }

}

function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Lia Matsubara - matsubaralia@gmail.com");
    console.log("https://github.com/liamatsubara");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();