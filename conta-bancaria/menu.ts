
import { colors } from "../src/util/colors";
import { Conta } from "../src/model/Conta";
import { Input } from "../src/util/Input";
import { ContaCorrente } from "../src/model/ContaCorrente";
import { ContaPoupanca } from "../src/model/ContaPoupanca";
//Menu 


export function main(){
    let opcao : number;

    //instanciar objetos da classe conta
    //const c1 = new Conta(1,1234,"sofia",1,100000.00);
    //c1.visualizar();

    //teste do método sacar -Conta Corrente
   
    //console.log("sacar 100,00",c1.sacar(1000.00));
    //console.log("sacar 100,00",c1.sacar(200000.00));
    
     //teste da classe ContaCorrente
     //const cc1 = new ContaCorrente(1,5678,"Bianca",1,200000.00,2000.00);   
     //cc1.visualizar();

      //console.log("sacar 100,00",cc1.sacar(1000.00));
      //console.log("sacar 100,00",cc1.sacar(200000.00));
      
      //cc1.visualizar();

      const cp1 =new ContaPoupanca(1,5678,"bianca",2,200000.00,2000.00,"02-05");
      const hoje = new Date();
      
      cp1.aplicarRendimento(hoje);
      cp1.visualizar();

    do{
        console.log(colors.bg.white,colors.fg.bluestrong);
        console.log("*".repeat(40));
        console.log("          Banco do Brazil com z            ");
        console.log("*".repeat(40));
        console.log("          1- criar conta                    ");   
        console.log("          2 - Listar todas as Contas        ");
        console.log("          3 - Buscar Conta por Numero       ");   
        console.log("          4 - Atualizar dados da Conta      ");
        console.log("          5 - Apagar Conta                  "); 
        console.log("          6 - Sacar                         ");
        console.log("          7 - Depositar                     ");
        console.log("         8 - Transferir valores entre Contas")
        console.log("          9 - Buscar Conta por Titular      ");
        console.log("          0 - Sair         ",
        colors.reset);

        opcao = Input.questionInt("Qual operação deseja realizar: ");
        if(opcao === 0){
            console.log(colors.fg.yellowstrong, `Seu futuro é aqui`, colors.reset);
            sobre();
            break;
        }

      switch (opcao) {
            case 1: console.log(colors.fg.whitestrong, `\nCriar Conta\n`,colors.reset);
                console.log("Digite ume texto com acentos:");
                let teste = Input.question
                console.log(teste);

                keyPress();
                break;
            case 2: console.log(colors.fg.whitestrong, `\nListar todas as Contas\n`,colors.reset);
                keyPress();
                break;
            case 3: console.log(colors.fg.whitestrong, `\nBuscar Conta por Numero\n`,colors.reset);
                keyPress();
                break;
            case 4: console.log(colors.fg.whitestrong, `\nAtualizar dados da Conta\n`,colors.reset);
                keyPress();
                break;
            case 5: console.log(colors.fg.whitestrong, `\nApagar Conta\n`,colors.reset);
                keyPress();
                break;
            case 6: console.log(colors.fg.whitestrong, `\nSacar\n`,colors.reset);
                keyPress();
                break;
            case 7: console.log(colors.fg.whitestrong, `\nDepositar\n`,colors.reset);
                keyPress();
                break;
            case 8: console.log(colors.fg.whitestrong, `\nTransferir valores entre Contas\n`,colors.reset);
                keyPress();
                break;
            case 9: console.log(colors.fg.whitestrong, `\nBuscar Conta por Titular\n`,colors.reset);
                keyPress();
                break;
        }      
        
    }while(true);

    sobre();

}
   

main();


function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    Input.prompt();
}



function sobre():void{
    console.log("Projeto desenvolvido por: Leonardo Botelho",
        "\nEmail : leo.obotelho@outlook.com",
        "\ngithub: github.com/botelhool"
    );
}


