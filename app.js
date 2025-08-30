function sortear()
{
 let quantidade = parseInt(document.getElementById('quantidade').value);
 let de = parseInt(document.getElementById('de').value);
 let ate = parseInt(document.getElementById('ate').value);
 

 let sorteados = [];
 let numero;

 let quantidadePossivel = (ate - de + 1);
  if (quantidade > quantidadePossivel) {
    alert(`Erro: você pediu ${quantidade} números, mas o intervalo só permite ${quantidadePossivel}.`);
    return; 
  }
 
 for (let i = 0; i < quantidade; i++)
    {
      numero = gerarNumeroAleatorio(de, ate)
      while(sorteados.includes(numero))
        {
          numero = gerarNumeroAleatorio(de, ate)

        }
      sorteados.push(numero)
    }

  let resultados = document.getElementById("resultado")
  resultados.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`
  alterarStatusBotao();
}

function gerarNumeroAleatorio(min, max)
{

return parseInt(Math.random() * (max- min + 1) +min);

}
function alterarStatusBotao()
{
 let botao = document.getElementById("btn-reiniciar");
 if (botao.classList.contains("container__botao-desabilitado"))    
{
 botao.classList.remove("container__botao-desabilitado")
 botao.classList.add("container__botao")

}else 
{
botao.classList.remove("container__botao")
botao.classList.add("container__botao-desabilitado")

}

}

function reiniciar()
{
  document.getElementById('quantidade').value = '';
  document.getElementById('de').value = '';
  document.getElementById('ate').value = '';
  document.getElementById("resultado").innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
  alterarStatusBotao();
}