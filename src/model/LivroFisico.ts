import { Livro } from "./Livro";

export class LivroFisico extends Livro{

    private _dimensoes: string;
    private _quantidade: number;

	constructor(id: number, nome: string, autor: string, dataPublicacao: string, editora: string, numPaginas: number, preco: number, tipo: number, dimensoes: string, quantidade: number) {
        super(id, nome, autor, dataPublicacao, editora, numPaginas, preco, tipo);
		this._dimensoes = dimensoes;
        this._quantidade = quantidade;
	}

	public get dimensoes(): string {
		return this._dimensoes;
	}

	public set dimensoes(value: string) {
		this._dimensoes = value;
	}

    public get quantidade(): number {
		return this._quantidade;
	}

	public set quantidade(value: number) {
		this._quantidade = value;
	}

    public visualizar(){
        super.visualizar();
        console.log(`Dimensões do Livro: ${this._dimensoes}`);
        console.log(`Quantidade em Estoque do Livro: ${this._quantidade}`);
    }

}