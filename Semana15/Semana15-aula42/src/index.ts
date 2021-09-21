/* //1
const minhaString: string = 5
número não é atribuível a string */

//2
/* let meuNumero: [number, string] = [5, "clarice"] */

//3
/* type person = { name: string, age: number, corFavorita: string }
const Astrodev: person = {
    name: "Astrodev",
    age: 30,
    corFavorita: "rosa"
};

const Jorge: person = {
    name: "jorge",
    age: 30,
    corFavorita: "rosa"
}

const Clarice: person = {
    name: "Clarice",
    age: 30,
    corFavorita: "rosa"
} 
 console.log(Clarice)

const pessoas: person[] = [Astrodev, Jorge, Clarice]

console.log(pessoas) */

/*  enum cor {
    ROSA = "rosa",
    AZUL = "azul",
    VERDE = "verde",
    ROXO = "roxo"
}
type person = { name: string, age: number, corFavorita: cor }

const Jorge: person = {
    name: "jorge",
    age: 30,
    corFavorita: cor.ROSA
}

const Clarice: person = {
    name: "Clarice",
    age: 30,
    corFavorita: cor.ROXO
}

console.log(Jorge) */

/* function obterEstatisticas(numeros: number[]): {} {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

type estatisticas = {
    maior: number,
    menor: number,
    media: number
};

type numeros = {
    a: number;
    b: number
}


type amostra = {
    numeros: number[],
    obterEstatisticas: (numeros: number[]) => estatisticas
}

const amostraDeIdades: amostra = {
     numeros: [21, 18, 65, 44, 15, 18],
     obterEstatisticas: (numeros) => {...}
    }

 */
/* 
type postagem = 
    {
        autor: string,
        texto: string
    }
;

type arrayDePostagens = postagem[]


const posts: arrayDePostagens  = [
    {
        autor: "Alvo Dumbledore",
        texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
        autor: "Severo Snape",
        texto: "Menos 10 pontos para Grifinória!"
    },
    {
        autor: "Hermione Granger",
        texto: "É levi-ô-sa, não levio-sá!"
    },
    {
        autor: "Dobby",
        texto: "Dobby é um elfo livre!"
    },
    {
        autor: "Lord Voldemort",
        texto: "Avada Kedavra!"
    }
]

function  buscarPostsPorAutor (
    posts: postagem[], 
    autorInformado: string,
    )
    {
    return posts.filter(
      (post) => {
        return post.autor === autorInformado
      }
    )
    } 

 console.log(buscarPostsPorAutor(posts, "Lord Voldemort")) */
 