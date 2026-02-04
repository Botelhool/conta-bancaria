import leia from "readline-sync";
import { colors } from "../src/util/colors";
import { Conta } from "../src/model/Conta";
//Menu 


export function main(){
    let opcao : number;

    //instanciar objetos da classe conta
    const c1 = new Conta(1,1234,"sofia",1,100000.00);
    c1.visualizar();

    //teste do método sacar
    console.log("sacar 100,00",c1.sacar(100.00));
    console.log("sacar 100,00",c1.sacar(20000.00));
    console.log("sacar 100,00",c1.sacar(0));
    
        



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

        opcao = leia.questionInt("Qual operação deseja realizar: ");
        if(opcao === 0){
            break;
        }

      switch (opcao) {
            case 1: console.log(colors.fg.whitestrong, `\nCriar Conta\n`,colors.reset);
                
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
    leia.prompt();
}



function sobre():void{
    console.log("Projeto desenvolvido por: Leonardo Botelho",
        "\nEmail : leo.obotelho@outlook.com",
        "\ngithub: github.com/botelhool"
    );
}


