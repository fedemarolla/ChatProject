import React from "react"; 
import "./Chats.css";


const Chats = ({ selectedContact, messages, deleteMessage, deleteAllMessages }) => {
    if (!selectedContact) {
        return (
            <h2 className="no-contact-selected">
                Seleccioná un contacto para empezar a chatear
            </h2>
        );
    }

    return (
        <div className="chat-window">
            <div className="chat-header">
                <h2>Estás hablando con: {selectedContact.name}</h2>
                <button
                    onClick={deleteAllMessages}
                    className="delete-all-button" 
                    title="Borrar todo el historial de la conversación"
                >
                    🧹 Borrar Historial
                </button>
            </div>

            <div className="message-list">
                {messages && messages.length > 0 ? (
                    messages.map((mensaje, index) => (
                        <p
                        key={index} className={`message-bubble ${mensaje.autor === "Homero" ? "sent" : "received"}`}
                        >
                            <strong>{mensaje.autor}:</strong> {mensaje.texto}
                            <button
                                onClick={() => deleteMessage(index)}
                                className="delete-message-button" 
                                title="Borrar este mensaje">🗑️
                            </button>
                        </p>
                    ))
                ) : (
                    <p className="no-messages">No tienes mensajes con esta persona.</p>
                )}
            </div>
            {/* llamar al componente newmessageform */}
        </div>
    );
};

export default Chats;