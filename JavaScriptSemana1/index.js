//JavaScript é uma linguagem de programação. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.
//JavaScript permite páginas da Web interativas e, portanto, é uma parte essencial dos aplicativos da web.
//A grande maioria dos sites usa, e todos os principais navegadores têm um mecanismo JavaScript dedicado para executá-lo.

	
	var int = 5; // variavel int
	var string = "Variavel2"; // variavel string
	var float = 3.5; // variavel float
	var array = [int, string, float]; //cria um array com 3 elementos de 3 variaveis
	// ou
	var array2 = new Array(5) // cria um array com 5 elementos indefinidos
	var objeto = {FirstName: "Gabriel", LastName: "Nunes"};
	var mixVariables = int + string; // variavel que junta 2 tipos de variaveis diferentes, variavel int + string
	var bool = true; //variavel do tipo bool;
	const variavelConstante = 10; // variavel constante. Não pode ser alterada. Apenas para leitura.
	var variavelNull = null; // variavel nula.
	var VariavelIndefinida; // variavel indefinida. Não contem qualquer informação na variável. Seja este String, int, bool, etc..


	document.getElementById("variavel").innerHTML = int; //escreve num elemento o valor da variavel


	//algumas funções predefinidas pelo JavaScript
	var toString = int.toString(); // transforma um numero inteiro numa variavel string | Função predefinida
	var length = string.length; // variavel com o tamanho de uma variavel string

	//comentar código (//) ou Ctrl + ~


	var variavelGlobal; // variavel global. Pode ser usada em qualquer parte do script

	function varLocal(){
		var variavelLocal; // variavel local. Pode ser apenas usada dentro desta função
	}

	function varParametro(variavelParametro){
		var varFuncao = variavelParametro + 3; // variavel que vem através da função pode ser usada apenas dentro da função;
	}

	function OperadoresAritmeticos(){
		var num1 = 5;
		var num2 = 10;
		var soma2 = 0;
		var subtracao = 1;

		var soma = num1 + num2; // soma duas variaveis
		soma2++; // soma mais 1 ao valor atual

		var subtracao = num2 - num1; // subtrai uma variavel por outra
		subtracao--; //subtrai 1 ao valor atual

		var divisao = num2 / num1; //divide uma variavel por outra
		var divisao2 = num2 % num1; // Retorna o inteiro restante da divisão dos dois operandos

		var multiplicacao = num1 * num2; //multiplica 2 variaveis
		var expoente = num1 ** num2; // Calcula a base elevada á potência da 2 variavel
	}

	function OperadoresRelacionais(){
		var Array2 = new Array(1, 2, 6, 8);
		var string2 = "string";

		if(6 in Array2){ 
			//executa este if se o numero 6 estiver incluido no array
		}

		if("teste" in Array2){
			// Nao executa o if
		}


		if(Array2 instanceof string2){
			//executa o if se ambas a variaveis forem do mesmo tipo de dados
		}

	}

	function OperadoresLogicos(){
		var int2 = 5;
		var int3 = 10;
		var int4 = 5;

		if(int2 == int4 && int3 >= int2){
			//executa este if se ambas as condições forem verdadeiras
		}


		if(int2 == int4 || int3 >= int2){
			//executa este if se uma das condições forem verdadeiras
		}


		if(int2 != int3){
			//executa este if se as variaveis tiverem valores diferentes
		}

	}


	//regras de nome de constantes e variaveis
	var variavel1;
	var variável_2$;
	//var variavel-3;
	const constante1 = 0;
	const constante_2$ = 0;
	//const constante-3 = 0;


	//regras de nome de funções
	function funcao(){
		//função1
	}

	function funcao2(){
		//funcao2
	}

	function função_3$(){
		//funcao3
	}

	// function função-4(){
	// 	//funcao4
	// }

	var VarInput;

	function btnInput(){
		VarInput = document.getElementById("input").value;
		EscreveInputNaPagina(VarInput);
	}

	function EscreveInputNaPagina(variavelInput){
		document.getElementById("varInput").innerHTML = variavelInput;
	}




