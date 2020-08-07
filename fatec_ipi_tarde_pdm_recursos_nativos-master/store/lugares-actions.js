export const ADD_LUGAR = 'ADD_LUGAR';

export const addLugar = (nomeLugar, imagem) =>{ //chamar funcao
    return{
      type: ADD_LUGAR, dadosLugar: {nomeLugar: nomeLugar, imagem: imagem}
    }
} 