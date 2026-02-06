import { colors } from "../util/colors";
import { Conta } from "./Conta";
import { Input } from "../util/Input";

export class ContaPoupanca extends Conta{
    private _aniversario:Date;

	constructor(numero: number,
        agencia:number,
        titular:string, 
        tipo: number,
        saldo: number,
        limite: number,
        aniversario:string) {
        
        
        super(numero,agencia,titular,tipo,saldo);
        this._aniversario = new Date(aniversario);
	}

    /**
     * Getter aniversario
     * @return {Date}
     */
	public get aniversario(): Date {
		return this._aniversario;
	}

    /**
     * Setter aniversario
     * @param {Date} value
     */
	public set aniversario(value: Date) {
		this._aniversario = value;
	}
    

    public aplicarRendimento(data:Date):boolean{
        const diaHoje = data.getDate();
        const mesHoje =data.getMonth();

        const diaAniversario = this._aniversario.getDate();
        const mesAniversario = this._aniversario.getMonth();

        if(diaHoje === diaAniversario && mesHoje === mesAniversario){
            this.saldo +=this.saldo *0.05;
            console.log("Rendimento aplicado!");
            return true;
        }

        console.log("Hoje não é o aniversário da poupança ");
        return true;
    }
    
     public visualizar(): void {
        super.visualizar();
        console.log(`Limite da conta : ${this.saldo}`);
    }


}