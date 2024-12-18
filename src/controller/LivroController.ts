import { Livro } from "../model/Livro";
import { LivroRepository } from "../repository/LivroRepository";

export class LivroController implements LivroRepository{

    private listaLivros = new Array<Livro>();
    
    public numero: number = 0;

    listarLivros(): void {
        this.listaLivros.forEach(livro => livro.visualizar());
    }

    listarLivroPorID(id: number): void {
        const buscaLivro = this.buscarNoArray(id);

        if(buscaLivro != null){
            buscaLivro.visualizar();
        }else{
            console.log("\nLivro não encontrado!");
        }
    }

    cadastrarLivro(livro: Livro): void {
        this.listaLivros.push(livro);
        console.log("\nLivro Cadastrado com Sucesso!");
    }

    atualizarLivro(livro: Livro): void {
        let buscaLivro = this.buscarNoArray(livro.id);

        if(buscaLivro != null) {
            this.listaLivros[this.listaLivros.indexOf(buscaLivro)] = livro;
            console.log("\nLivro Atualizado com Sucesso!");
        }else{
            console.log("\nLivro não Encontrado!");
        }            
    }

    deletarLivro(id: number): void {
        const buscaLivro = this.buscarNoArray(id);

        if(buscaLivro !== null) {
            this.listaLivros.splice(this.listaLivros.indexOf(buscaLivro), 1);
            console.log("\nLivro Deletado com Sucesso!");
        }else
            console.log("\nLivro não encontrado!");
    }

    // Métodos Auxiliares

    public gerarNumero(): number{
        return ++this.numero;
    }
    
    public buscarNoArray(id: number): Livro | null {
        for(let livro of this.listaLivros){
            if(livro.id === id)
                return livro;          
        }

        return null;
    }

}