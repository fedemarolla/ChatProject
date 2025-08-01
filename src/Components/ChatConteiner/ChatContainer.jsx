import  { useState, useEffect } from "react";
import Sidebar from "../SideBar/SideBar";
import Chats from "../Chats/Chats";
import "./ChatContainer.css"
import contacts from "../../data/contacts";
import { useParams, useNavigate} from "react-router-dom";

const ChatContainer = () => {

    const {contactId} = useParams(); /* recibe el id de la url */
    const navigate = useNavigate(); /* hook para navegar entre paginas */
    const [selectedContact, setSelectedContact] = useState(null);
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

    useEffect(() => {
        if (!contactId) {
            setSelectedContact(null);
            return;
        }

        const contactFound = contacts.find((contact) => contact.id === Number(contactId));

        if (contactFound) {
            setSelectedContact(contactFound);
        } else {
            navigate("/");
        }
    }, [contactId, navigate]);/*escucha el cambio si hay del  contact id traido de useparams
    si hay un cambio e contactid se monta el useeffect*/

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
        const confirmDelete = window.confirm("¿Estás seguro de que querés borrar todos los mensajes?");
        if (!confirmDelete) return;
        setMessages({
            ...messages,
            [selectedContact.id]: []
        });
    };

    const addNewMessage = (messageText) => {
        if (!selectedContact || !messageText.trim()) return;

        const newMessage = {
            id: Date.now(),
            autor: "Homero",
            texto: messageText.trim()
        };

        setMessages(prevMessages => ({
            ...prevMessages,
            [selectedContact.id]: [...(prevMessages[selectedContact.id] || []), newMessage]
        }));
    };

    return (
    <div className="chat-container">
        <Sidebar setSelectedContact={setSelectedContact} selectedContact={selectedContact} />

        <Chats
            selectedContact={selectedContact}
            messages={selectedContact ? messages[selectedContact.id] : []}
            deleteMessage={deleteMessage}
            deleteAllMessages={deleteAllMessages}
            addNewMessage={addNewMessage}
        />
    </div>
        

    );
};

export default ChatContainer;