export abstract class Livro{

    private _id: number;
    private _nome: string;
    private _autor: string;
    private _dataPublicacao: string;
    private _editora: string;
    private _numPaginas: number;
    private _preco: number;
    private _tipo: number;


    constructor(id: number, nome: string, autor: string, dataPublicacao: string, editora: string, numPaginas: number, preco: number, tipo: number) {
		this._id = id;
		this._nome = nome;
		this._autor = autor;
		this._dataPublicacao = dataPublicacao;
		this._editora = editora;
		this._numPaginas = numPaginas;
		this._preco = preco;
		this._tipo = tipo;
	}

	public get id(): number {
		return this._id;
	}

	public get nome(): string {
		return this._nome;
	}

	public get autor(): string {
		return this._autor;
	}

	public get dataPublicacao(): string {
		return this._dataPublicacao;
	}

	public get editora(): string {
		return this._editora;
	}

	public get numPaginas(): number {
		return this._numPaginas;
	}

	public get preco(): number {
		return this._preco;
	}

	public get tipo(): number {
		return this._tipo;
	}

	public set id(value: number) {
		this._id = value;
	}

	public set nome(value: string) {
		this._nome = value;
	}

	public set autor(value: string) {
		this._autor = value;
	}

	public set dataPublicacao(value: string) {
		this._dataPublicacao = value;
	}

	public set editora(value: string) {
		this._editora = value;
	}

	public set numPaginas(value: number) {
		this._numPaginas = value;
	}

	public set preco(value: number) {
		this._preco = value;
	}

	public set tipo(value: number) {
		this._tipo = value;
	}

    public visualizar(){

        let tipo: string;

        switch(this._tipo){
            case 1:
                tipo = "Livro Físico";
                break;
            case 2:
                tipo = "Livro Digital";
                break;
            default:
                tipo = "Tipo Invalido!"

        }

        console.log('\n***********************************************');
        console.log("");
        console.log('Dados do Livro:');
        console.log("");
        console.log('***********************************************');
        console.log(`ID do Livro: ${this._id}`);
        console.log(`Nome do Livro: ${this._nome}`);
        console.log(`Autor(a) do Livro: ${this._autor}`);
        console.log(`Data de Publicação do Livro: ${this._dataPublicacao}`);
        console.log(`Editora do Livro: ${this._editora}`);
        console.log(`Número de Páginas do Livro: ${this._numPaginas} páginas`);
        console.log(`Preço do Livro: R$${this._preco}`);
        console.log(`Tipo: ${tipo}`);
    }
}