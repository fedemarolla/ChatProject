    import React from "react"; 
    import "./Chats.css";
    import NewMessageForm from "../NewMessageForm/NewMessageForm";
    import SinContactoImg from '../../imagenes/Sin-Contacto.png';


const Chats = ({ selectedContact, messages, deleteMessage, deleteAllMessages, addNewMessage, lastMessage }) => {
    if (!selectedContact) {
        return (
            <div className="no-contact-selected">
                <img src={SinContactoImg} alt="Imagen sin contacto" />
                <h2>Descarga WhatsApp para Windows</h2>
                <p>Descarga la aplicacion de windows y haz llamadas, comparte pantalla y disfruta de una experiencia mas rapida.</p>
                <button className="Descargar">Descargar</button>
            </div>
        );
    }

    return (
        <div className="chat-mensajes">
            <div className="chat-window">
                <div className="chat-header">
                    <img src={selectedContact.imageProfile} alt={selectedContact.name} className="image-profile-chat" />
                    <h2>{selectedContact.name}</h2>
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
                <div className="enviar-msj">
                    <NewMessageForm
                        selectedContact={selectedContact}
                        addNewMessage={addNewMessage}
                        
                    />
                </div>        
            </div>
        </div>
    );
};

    export default Chats;