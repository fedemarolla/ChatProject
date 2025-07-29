
import React from "react"; 
import "./NewMessagesForm.css";

const NewMessageForm = ({addNewMessage}) => {
    const handleSubmitSendMessageForm = (event) => {
        event.preventDefault()
        let new_message_text = event.target.message.value
        // Llamamos a la funcion de agregar nuevo mensaje
        addNewMessage(new_message_text)
        // Reseteamos el campo
        event.target.message.value = ''
    }

    return (
        <form onSubmit={handleSubmitSendMessageForm} className="new-message-form">
            <div className="form-input-group">
                <label htmlFor="message">Escribe un mensaje:</label>
                <input type="text" placeholder='Escribe un mensaje...' id='message' name='message' required />
            </div>
            <button type='submit' className="send-message-button">Enviar mensaje</button>
        </form>
    )
}

export default NewMessageForm;