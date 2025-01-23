const pesoMax = 23

const objs = {
  A: { 
    peso: 4,
    beneficio: 2 
  },
  B: { 
    peso: 5,
    beneficio: 1
  },
  C: { 
    peso: 7, 
    beneficio: 3 
  },
  D: { 
    peso: 10, 
    beneficio: 4 
  },
  E: { 
    peso: 6, 
    beneficio: 4 
  },
}

function razao(obj) {
  return obj.beneficio / obj.peso
}

let items = Object.keys(objs).map((key) => {
  return { nome: key, ...objs[key], razao: razao(objs[key]) }
})

items.sort((a, b) => b.razao - a.razao)

let pesoAtual = 0
let itemsEscolhidos = []

items.map((item) => {
  if (pesoAtual + item.peso > pesoMax) {
    return 
  }

  itemsEscolhidos.push(item)
  pesoAtual += item.peso
})

console.log(itemsEscolhidos)