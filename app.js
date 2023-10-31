alert('Boas vindas ao jogo do número secreto!');

let numero_secreto = parseInt(Math.random() * 10 + 1);
console.log(numero_secreto);

let chute;
let tentativas = 3;


while (chute != numero_secreto){
    alert(`Você tem ${tentativas} tentativas, ok? Vamos lá!`);
    chute = prompt('Digite um número entre 1 e 10: ');
    if(chute == numero_secreto || tentativas == 1) {
        break;
    } else {
        if(chute > numero_secreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
    }
    tentativas = tentativas - 1
    }

if(chute == numero_secreto) {
    alert('Parabéns! Você descobriu o número secreto.')
} else {
    alert('Game Over. Tente novamente')
}