import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { LivroFisico } from "./src/model/LivroFisico";
import { LivroDigital } from "./src/model/LivroDigital";

export function main() {

    // Testes para visualização dos dados
    const livro1 = new LivroFisico(1, "Feliz Ano Velho", "Marcelo Rubens Paiva", "04/08/2015", "Alfaguara", 272, 58, 1, "23.37 x 14.99 x 1.52 cm", 300);
    livro1.visualizar();

    const livro2 = new LivroDigital(2, "Biblioteca da Meia-Noite", "Matt Haig", "30/09/2021", "Bertrand", 366, 15.95, 2, 3590);
    livro2.visualizar();

    let opcao: number;

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
                console.log(colors.fg.whitestrong, 
                    "\n\nListar Todos os Livros\n\n", colors.reset);
                
                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong, 
                    "\n\nListar Livro pelo ID\n\n", colors.reset);

                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong, 
                    "\n\nCadastrar Livro\n\n", colors.reset);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong, 
                    "\n\nAtualizar Livro\n\n", colors.reset);

                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong, 
                    "\n\nDeletar Livro\n\n", colors.reset);

                keyPress()
                break;
            default:
                console.log(colors.fg.whitestrong, 
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