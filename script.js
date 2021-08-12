// MAIOR_MENOR

const form1 = document.getElementById('maior-menor');
form1.addEventListener('submit', (event) => {
  event.preventDefault();

  let numeros = [];
  form1.querySelectorAll('[name]').forEach((elem) => {
    if (elem.value)
      numeros.push(parseInt(elem.value));
  });


  function MAIOR_MENOR(a, b, c, d, e) {
    let maior = Math.max(a, b, c, d, e)
    let menor = Math.min(a, b, c, d, e)

    alert("Maior número: "+maior+ "\n Menor número: "+menor)
  }

  MAIOR_MENOR(numeros[0], numeros[1], numeros[2], numeros[3], numeros[4])
});


// VOGAL

const form2 = document.getElementById('vogal');
form2.addEventListener('submit', (event) => {
  event.preventDefault();

  VOGAL(document.getElementById("letra").value)

  function VOGAL(c) {
    const vogais = ["a", "e", "i", "o", "u"]
    alert(vogais.includes(c) ? 1 : 0)
  }
});


// LIMITES

const form3 = document.getElementById('limites');
form3.addEventListener('submit', (event) => {
  event.preventDefault();

  const inicial = document.getElementById("inicial").value
  const final = document.getElementById("final").value

  LIMITES(parseInt(inicial), parseInt(final))

  function LIMITES(li, ls) {
    let numeros_pares = []
    let soma = 0

    for (let i = li+1; i < ls; i++) {
      if (i % 2 == 0) {
        numeros_pares.push(i)
        soma += i;
      }
    }

    alert("Números pares: "+numeros_pares.join(", ")
    +"\n Resultado da soma dos números pares: "+soma)
  }
});


// ORDEM

const form4 = document.getElementById('ordem');
form4.addEventListener('submit', (event) => {
  event.preventDefault();

  let numeros = [];
  form4.querySelectorAll('[name]').forEach((elem) => {
    if (elem.value)
      numeros.push(parseInt(elem.value));
  });

  ORDEM(numeros[0], numeros[1], numeros[2])

  function ORDEM(a, b, c) {
    
    const ordem = [a, b, c].sort(function(a, b) {
                      return a - b;
                    })
    alert("Ordem crescente: "+ordem.join(", "))
  }
});


// POSITIVO_NEGATIVO

const form5 = document.getElementById('positivo-negativo');
form5.addEventListener('submit', (event) => {
  event.preventDefault();

  function POSITIVO_NEGATIVO(x) {
    return x >= 0 ? true : false
  }

  const resultado = POSITIVO_NEGATIVO(document.getElementById("numero").value)
  alert(resultado ? "Positivo" : "Negativo")
});


// PAR_IMPAR

const form6 = document.getElementById('par-impar');
form6.addEventListener('submit', (event) => {
  event.preventDefault();

  function PAR_IMPAR(x) {
    return x % 2 == 0 ? true : false
  }

  const resultado = PAR_IMPAR(document.getElementById("numero2").value)
  alert(resultado ? "Par" : "Impar")
});