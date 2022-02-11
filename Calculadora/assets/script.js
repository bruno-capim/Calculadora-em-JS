
function Calculadora()
{
    alert("Olá, bem-vindo a calculadora básica");

    var escolha = Number(prompt("Escolha uma operação: \n1 - Adição (+) \n2 - Multiplicação (x) \n3 - Divisão (/) \n4 - Subtração (-)"));

    if(!escolha || escolha >= 5)
    {
        alert("Digite uma opção valida!");
        Calculadora();
    }
    else{
        var n1 = Number(prompt("Digite o primeiro valor: "));
        var n2 = Number(prompt("Dgite o segundo valor: "));
        var resultado;

        if(escolha == 1)
            {
                resultado = n1 + n2;
                alert(`O resultado de ${n1} + ${n2} é: ${resultado}`);
                retorna();
            }
            else if (escolha == 2)
            {
                resultado = n1 * n2;
                alert(`O resultado de ${n1} * ${n2} é: ${resultado}`)
                retorna();
            }
            else if (escolha == 3)
            {
                resultado = n1 / n2;
                alert(`O resultado de ${n1} / ${n2} é: ${resultado}`)
                returna();
            }
            else if (escolha == 4)
            {
                resultado = n1 - n2;
                alert(`O resultado de ${n1} - ${n2}é: ${resultado}`)
                retorna();
            }

        }
}
function retorna()
{
    var opcao = prompt("Deseja continuar? \n1 - Sim \n2 - Não");
    
    if(opcao == 1)
    {
        Calculadora();
    }
    else{
        alert("Até mais");
    }
    
}

Calculadora();
