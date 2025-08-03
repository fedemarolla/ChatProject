import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../SideBar/SideBar";
import Chats from "../Chats/Chats";
import "./ChatContainer.css";
import contacts from "../../data/contacts";

const ChatContainer = () => {
    const { contactId } = useParams();
    const navigate = useNavigate();
    
    const [messages, setMessages] = useState({
        1: [
            { id: 2, autor: "Homero", texto: "¡Hola Homero!" },
            { id: 2, autor: "Homero", texto: "tu eres homero!" },
            { id: 2, autor: "Homero", texto: "d'ouh!" }
        ],
        2: [
            { id: 1, autor: "Marge", texto: "Homero, hay un hombre que puede ayudarte" },
            { id: 2, autor: "Homero", texto: "Batman!?"},
            { id: 1, autor: "Marge", texto: "No!, es un cientifico." },
            { id: 2, autor: "Homero", texto: "Batman es un cientifico" },
            { id: 1, autor: "Marge", texto: "Que no es Batman!" },
        ],
        3: [
            { id: 1, autor: "Bart", texto: "👶" },
            { id: 2, autor: "Homero", texto: "Tengo tu nariz 👃." },
            { id: 1, autor: "Bart", texto: "Y yo tu billetera." },
            { id: 2, autor: "Homero", texto: "Noooooo!!🏃‍♂️" },
            { id: 1, autor: "Bart", texto: "Jaja" }
        ],
        4: [
            { id: 1, autor: "Lisa", texto: "Hola papá!." },
            { id: 2, autor: "Homero", texto: "Estas preciocia mi amor." },
            { id: 1, autor: "Lisa", texto: "Gracias!." },
            { id: 2, autor: "Homero", texto: "Mi pequeña Lisa, Lisa Simpson. Eres lo mejor que ha acompañado a mi apellido, ¿sabes?. Desde que aprendiste a ponerte los pañales, has sido mas inteligente que yo. Siempre he estado orgulloso de ti. Eres mi mejor logro y lo hiciste tu solita. Me hiciste entender mejor a mi esposa y a ser mejor como persona, y también eres mi hija. Nadie podrá tener una hija mejor de lo que eres tú" },
            { id: 1, autor: "Lisa", texto: "Papa exageras!." },
            { id: 2, autor: "Homero", texto: "Ves! todavia me ayudas!."},
            { id: 2, autor: "Homero", texto: "mmuah 😘👨‍👧." },
        ],
        5: [
            { id: 1, autor: "Maggie", texto: "👶👶👶👶(sonido bebe)" },
            { id: 2, autor: "Homero", texto: "Una niña 😍, Marge tenemos una preciosa bebita mira, no no es una bebita, es la bebita mas hermosa de todo el mundo."},
        ],
        6: [
            { id: 2, autor: "Homero", texto: "Ned Flanders me burlo de tus valores, todo el mundo se rie de ti, eres un tonto!."},
            { id: 1, autor: "Ned", texto: "Jaja Vaya! que tal Homero?, Gracias por la visitiyya."},
            { id: 2, autor: "Homero", texto: "Ciertas ocasiones en las que decia que me agradabas, estaba mintiendo."},
            { id: 1, autor: "Ned", texto: "Bueno tendre que esforzarme un poquiyyo jaja."},
            { id: 2, autor: "Homero", texto: "Tuve relaciones carnales con tu esposa y/o pareja."},
            { id: 2, autor: "Homero", texto: "Aaayyy que linda es la psiquiatria, o que , o como"},
            { id: 1, autor: "Ned", texto: "Que hay vecinillo?!"},
            { id: 2, autor: "Homero", texto: "Vamos Flanders!🤷‍♂️, tiene que haber algo que odies!"},
            { id: 1, autor: "Ned", texto: "No me gusta el servicio de la oficina de correos, ya sabes, puras prisas, entra sale, entra sale, luego con esas maquinas en el vestibulo, son muy rapidas, nadie te ayuda."},
            { id: 1, autor: "Ned", texto: "Sep podria decir, que odio la oficina de correos!!"},
            { id: 1, autor: "Ned", texto: "Y a mis padres!!"},
            { id: 1, autor: "Ned", texto: "BEATNICKS MUGROSOS!!"},
        ],
        7: [
            { id: 1, autor: "Burns", texto: "Bueno si es delito amar a nuestro pais, pues soy culpable.!" },
            { id: 1, autor: "Burns", texto: "Y si es delito, robar un Trillon de Dolares y darselo a la Cuba Comunista, pues tmb soy culpable de ello"},
            { id: 1, autor: "Burns", texto: "Y si es delito sobornar a un Jurado, juro ante dios que pronto sere culpable de ello!"},
            { id: 2, autor: "Homero", texto:"Viva mi país!!"},
        ],
        8: [
            { id: 1, autor: "Krusty", texto: "Hola muchachos!!, vine aaaaa.....,veo que estan ocupadoos..😬😬" },
            { id: 2, autor: "Homero", texto: "Krusty!!, viniste a salvarme!!!." },
            { id: 1, autor: "Krusty", texto: "Ehhhhhhhh si, asi es 🙄🙄." },
            { id: 1, autor: "Krusty", texto: "Momento!!, no puede matarnos sino sabe cual es el Krusty de verdad!" },
            { id: 1, autor: "Krusty", texto: "De tin marín de do pingüé, cúcara, mácara, títere fue" },
            { id: 2, autor: "Homero", texto: "Jaja eres mi heroe krusty!." },
        ],
    });

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [showChat, setShowChat] = useState(!!contactId);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const toggleProfile = () => {
    setIsProfileOpen(prev => !prev);
    };

    useEffect(() => {
        const handleResize = () => {setIsMobile(window.innerWidth <= 768);};
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {setShowChat(!!contactId);},[contactId]);

    useEffect(() => {
        if (!contactId) {navigate("/");
        return;}

        const contactFound = contacts.find((contact) => contact.id === Number(contactId));
        if (!contactFound) {navigate("/");}}, [contactId, navigate]);

    const selectedContact = contacts.find((c) => c.id === Number(contactId)) || null;

    const deleteMessage = (index) => {
            if (!selectedContact) return;
            const mensajesActualizados = [...messages[selectedContact.id]];
            mensajesActualizados.splice(index, 1);
            setMessages({
                ...messages,
                [selectedContact.id]: mensajesActualizados
            });
        };

    const deleteAllMessages = () => {
        if (!selectedContact) return;
        if (!window.confirm("¿Estás seguro de que querés borrar todos los mensajes?")) 
            return;
        setMessages({...messages,[selectedContact.id]: [], });
    };

    const addNewMessage = (messageText) => {
        if (!selectedContact || !messageText.trim()) return;
        const newMessage = {id: Date.now(),  
        autor: "Homero",
        texto: messageText.trim(),
        };
        setMessages((prevMessages) => ({
        ...prevMessages,
        [selectedContact.id]: [...(prevMessages[selectedContact.id] || []), newMessage],
        }));
    };

    return (
        <div className="chat-container">            
        
        {isMobile && showChat && (
            <button className="back-button" onClick={() => navigate("/")}>
                <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 640 640"><path fill="#1dab62" d="M112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320zM576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320zM188.7 308.7C182.5 314.9 182.5 325.1 188.7 331.3L292.7 435.3C297.3 439.9 304.2 441.2 310.1 438.8C316 436.4 320 430.5 320 424L320 352L424 352C437.3 352 448 341.3 448 328L448 312C448 298.7 437.3 288 424 288L320 288L320 216C320 209.5 316.1 203.7 310.1 201.2C304.1 198.7 297.2 200.1 292.7 204.7L188.7 308.7z"/></svg>           
            </button>   
        )}
        
        {(!isMobile || !showChat) && (
            <Sidebar
            selectedContact={selectedContact}
            setSelectedContact={(contact) => navigate(`/chat/${contact.id}`)}
            />
        )}



        {(!isMobile || showChat) && (
            <Chats
            selectedContact={selectedContact}
            messages={selectedContact ? messages[selectedContact.id] || [] : []}
            deleteMessage={deleteMessage}
            deleteAllMessages={deleteAllMessages}
            addNewMessage={addNewMessage}
            toggleProfile={toggleProfile}
            isProfileOpen={isProfileOpen}
            />
        )}
        </div>
    );
};

export default ChatContainer;