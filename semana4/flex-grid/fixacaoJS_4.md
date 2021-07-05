const counter = arrayDeNumeros.filter((numero) => numero === numeroEscolhido).length;

if (counter === 0) return "Número não encontrado";

return `O número ${numeroEscolhido} repete ${counter}x`;
}