    import "./Chats.css";
    import NewMessageForm from "../NewMessageForm/NewMessageForm";
    import SinContactoImg from '../../imagenes/Sin-Contacto.png';


const Chats = ({ selectedContact, messages, deleteMessage, deleteAllMessages, addNewMessage, toggleProfile, isProfileOpen }) => {
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
                    <div className="contact-info-header" onClick={toggleProfile}>
                        <img src={selectedContact.imageProfile} alt={selectedContact.name} className="image-profile-chat" />
                        <h2>{selectedContact.name}</h2>
                    </div>
                    <div className="buttons-delete-header">
                        <button onClick={deleteAllMessages} className="delete-all-button" title="Borrar todo el historial de la conversación"> Borrar Todo</button>
                    </div>
                </div>        

                <div className="message-list">
                    {messages && messages.length > 0 ? (
                        messages.map((mensaje, index) => (
                            <p key={index} className={`message-bubble ${mensaje.autor === "Homero" ? "sent" : "received"}`}>
                                {mensaje.texto}
                                <button onClick={() => deleteMessage(index)} className="delete-message-button" title="Borrar este mensaje">🗑️</button>
                            </p>))) : (<p className="no-messages">No tienes mensajes con esta persona.</p>)}
                </div>

                <div className="enviar-msj">
                    <NewMessageForm
                        selectedContact={selectedContact}
                        addNewMessage={addNewMessage}
                    />
                </div>        
            </div>

                {isProfileOpen && (
                    <div className="profile-panel">
                        <button onClick={toggleProfile} className="close-profile-button"><svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 640 640"><path fill="#1dab62" d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM231 231C240.4 221.6 255.6 221.6 264.9 231L319.9 286L374.9 231C384.3 221.6 399.5 221.6 408.8 231C418.1 240.4 418.2 255.6 408.8 264.9L353.8 319.9L408.8 374.9C418.2 384.3 418.2 399.5 408.8 408.8C399.4 418.1 384.2 418.2 374.9 408.8L319.9 353.8L264.9 408.8C255.5 418.2 240.3 418.2 231 408.8C221.7 399.4 221.6 384.2 231 374.9L286 319.9L231 264.9C221.6 255.5 221.6 240.3 231 231z"/></svg>
                        </button>

                            <img src={selectedContact.imageProfile} alt={selectedContact.name} className="image-profile-panel"/>

                        <h2>{selectedContact.name}</h2>
                        <p>Última conexión:{selectedContact.lastConection}</p>
                        <p>Estado:{selectedContact.status || "Disponible"}</p>
                    </div>
                )}
        </div>
    );
};

    export default Chats;