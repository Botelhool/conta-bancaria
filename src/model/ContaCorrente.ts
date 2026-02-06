import { colors } from "../util/colors";
import { Conta } from "./Conta";

export class ContaCorrente extends Conta{

    

    //atributos específicos de Conta corrente
    private _limite:number; 

//construtor com a chamada para a super classe
	constructor(
        
        numero: number,
        agencia:number,
        titular:string, 
        tipo: number,
        saldo: number,
        limite: number) {

        super(numero,agencia,titular,tipo,saldo);
		this._limite = limite;
	}
//Métodos GET e SET específicos da classe ContaCorrente
    /**
     * Getter limite
     * @return {number}
     */
	public get limite(): number {
		return this._limite;
	}

    /**
     * Setter limite
     * @param {number} value
     */
	public set limite(value: number) {
		this._limite = value;
	}
    
    //método visualizar sobrescrito (polimorfismo)
     public sacar(valor:number):boolean{
            if(valor <=0){
                console.log(colors.fg.red,"Saldo insuficiente!!!",colors.reset);
                return false;
            }
            
           
            if(valor >(this.saldo + this._limite)){
                console.log( colors.fg.red,"saldo Insuficiente!",colors.reset);
            }
            this.saldo -=valor
            return false;
        }



    public visualizar(): void {
        super.visualizar();
        console.log(`Limite da conta : ${this._limite}`);
    }


}

