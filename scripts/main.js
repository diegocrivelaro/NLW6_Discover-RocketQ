import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

/* Pegar todos botóes com a classe CHECK */
const checkButtons = document.querySelectorAll(".active a.check") 

checkButtons.forEach(button => {
    /* Ouvindo os botões */
    button.addEventListener("click", handleClick)
})

/* Quando o botão delete for clicado ele irá abrir a modal */
const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach(button =>{
    button.addEventListener("click", (event) => handleClick(event, check = false))
})

function handleClick(event, check = true){
    modalTitle.innerHTML = check ? "Marcar como lido" : "Excluir essa pergunta"
    /* Abril moda */
    modal.open()
}
