import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";

export function main() {

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