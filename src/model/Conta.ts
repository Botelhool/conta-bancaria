import { colors } from "../util/colors";
export abstract class Conta{
    //atributos da classe
    // _ serve para identificar os atributos
    private _numero: number;
    private _agencia:number;
    private _titular:string;
    private _tipo:number;
    private _saldo:number;
    
    //metodo constructor

	constructor(numero: number, agencia:number,titular:string, tipo: number, saldo: number) {
		this._numero = numero;
		this._agencia = agencia;
        this._titular = titular
		this._tipo = tipo;
		this._saldo = saldo;
	}

    //métodos Get e Set

    /**
     * Getter numero
     * @return {number}
     */
	public get numero(): number {
		return this._numero;
	}

    /**
     * Getter agencia
     * @return {string}
     */
	public get agencia(): number {
		return this._agencia;
	}

    /**
     * Getter tipo
     * @return {number}
     */
	public get tipo(): number {
		return this._tipo;
	}

    /**
     * Getter saldo
     * @return {number}
     */
	public get saldo(): number {
		return this._saldo;
	}

    /**
     * Setter numero
     * @param {number} value
     */
	public set numero(value: number) {
		this._numero = value;
	}

    /**
     * Setter agencia
     * @param {string} value
     */
	public set agencia(value: number) {
		this._agencia = value;
	}

    /**
     * Setter tipo
     * @param {number} value
     */
	public set tipo(value: number) {
		this._tipo = value;
	}

    /**
     * Setter saldo
     * @param {number} value
     */





	public set saldo(value: number) {
		this._saldo = value;
	}

    public sacar(valor:number):boolean{
        if(valor > this.saldo){
            console.log(colors.fg.red,"Saldo insuficiente!!!",colors.reset);
            return false;
        }

        this.saldo -= valor;
        return true;
    }

    public depositar(valor:number): void{
        if(valor <=0){
            console.log(colors.fg.red,"O valor deve ser positivo",colors.reset)
            
        }else{
            this._saldo +=valor;
        }
    }

    

	
    public visualizar(): void{

        let tipo: string;

        switch(this._tipo){
           case 1:
            tipo = "conta corrente";
            break;
            case 2:
            tipo = "conta poupança";
            break;
            default:
                tipo ="tipo inválido"
            }
                
        

        console.log("*".repeat(30));
        console.log("");
        console.log("*".repeat(30));
        console.log(`O número da conta: ${this._numero}` );
        console.log(`O número da agência ${this._agencia}`);
        console.log(`Nome do titular: ${this._titular}`);
        console.log(`Tipo de conta ${tipo}`);
        console.log(`Saldo: ${this._saldo}`);
        




    }
    
}