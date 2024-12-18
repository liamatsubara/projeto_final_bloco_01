import { Livro } from "../model/Livro";

export interface LivroRepository{

    listarLivros(): void;
    listarLivroPorID(id: number): void;
    cadastrarLivro(livro: Livro): void;
    atualizarLivro(livro: Livro): void;
    deletarLivro(id: number): void;
    
}