export default function Modal(){
    
    const modalWrapper = document.querySelector('.modal-wrapper')
    const cancelButoon = document.querySelector('.button.cancel')

    cancelButoon.addEventListener("click", close)
    
    function open(){
        /* Funcionalidade de aplicar a classe active na modal  */
        modalWrapper.classList.add("active")
    } 
    function close(){
        /* Funcionalidade de remover a classe active da modal  */
        modalWrapper.classList.remove("active")
    }

    return{
        open,
        close
    }
}