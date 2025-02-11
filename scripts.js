//cotação de moeda do dia
const USD = 5.79;
const EUR = 5.97;
const GBP = 7.15;
const CNY = 0.79;

//obtendo elementos do formulario
const form = document.querySelector('form')
const amount = document.getElementById('amount')
const currency = document.getElementById('currency')
const footer = document.querySelector('main footer')
const description = document.getElementById('description')
const result = document.getElementById ('result')


//Manipulando o input amount para receber apenas numeros
amount.addEventListener("input", () =>{
// criei um regex para  verificar o valor digitado no input e substituir os caracteres que forem letras para "" ou seja nao vai aparecer no input as letras só numeros
 const hasCharactersRegex = /\D+/g

 amount.value = amount.value.replace(hasCharactersRegex, "")
})

//capturando o evento de submit(eviar) do formulario
form.onsubmit = () =>{

    event.preventDefault() // desativa o evento padrao no caso do submit desativa o reload toda vez clicar

    switch(currency.value){
        case "USD":
            convertCurrency(amount.value,USD,"US$")
            break
        case "EUR":
            convertCurrency(amount.value,EUR,"€")
            break
        case "GBP":
            convertCurrency(amount.value,EUR,"£")
            break
         case "CNY":
            convertCurrency(amount.value,EUR,"¥")
            break
    }
    
}

//funçao para converter a moeda

function convertCurrency (amount,price,symbol){

   try{
    // exibindo a cotação da moeda selecionada
    description.textContent = `${symbol}1 = ${formatCurrencyBRL(price)}`
    // calcula o total 
    let total = amount * price
    
    //verifica se o valor é um numero
    if(isNaN(total)){
        return alert("Por favor,digite o valor corretamente para converter")
    }
    //formatar valor total 
    total = formatCurrencyBRL(total).replace("R$", "")
    result.textContent = `${total} Reais` 


    footer.classList.add ("show-result") 

   }catch (error){
    console.log(error)

    //remove o footer da tela tirando a classe
    footer.classList.remove('show-result')
    alert('Algo deu errado, tente novamente mais tarde')

   }



}
// Formata a moeda em real brasileiro
function formatCurrencyBRL (value){
     return Number(value).toLocaleString("pt-BR",{
        style: "currency",
        currency: "BRL"
     }) 
}