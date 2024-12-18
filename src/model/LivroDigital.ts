import { Livro } from "./Livro";

export class LivroDigital extends Livro{

    private _tamanhoArquivo: number;

    constructor(id: number, nome: string, autor: string, dataPublicacao: string, editora: string, numPaginas: number, preco: number, tipo: number, tamanhoArquivo: number){
        super(id, nome, autor, dataPublicacao, editora, numPaginas, preco, tipo);
        this._tamanhoArquivo = tamanhoArquivo;
    }

	public get tamanhoArquivo(): number {
		return this._tamanhoArquivo;
	}

	public set tamanhoArquivo(value: number) {
		this._tamanhoArquivo = value;
	}

    public visualizar(){
        super.visualizar();
        console.log(`Tamanho do Livro: ${this._tamanhoArquivo} KB`);
    }

}