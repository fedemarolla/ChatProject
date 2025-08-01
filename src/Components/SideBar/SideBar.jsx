import "./SideBar.css";
import contacts from "../../data/contacts";
import { useNavigate } from "react-router";
const Sidebar = ({ setSelectedContact, selectedContact }) => {
    const navigate = useNavigate();
//     return (
//         <div className="sidebar">
//             <button onClick={() => navigate("/")}>whatsapp</button>
//             <div className="sidebar-header">WhatsApp</div>
//             <ul className="contact-list">
//                 {contacts.map((contact) => (
//                 <li
//                     key={contact.id}
//                     className={`contact-item ${selectedContact && selectedContact.id === contact.id ? 'selected' : ''}`}
//                     onClick={() => {
//                         setSelectedContact(contact);
//                         navigate(`/chat/${contact.id}`);
//                     }}
//                 >
//                     <img src={contact.imageProfile} alt={contact.name} className="image-profile" />

//                 <div className="contact-info">
//                     <div className="contact-header">
//                         <span className="contact-name">{contact.name}</span>
//                         <span className="last-connection">{contact.lastConection}</span>
//                     </div>
//                     <div className="contact-footer">
//                         <span className="last-message">{contact.lastMessage}</span>
//                         {contact.silence && <span className="silence">{contact.silence}</span>}
//                     </div>
//                 </div>

//                 </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };
return (
    <div className="sidebar">
        <button onClick={() => navigate("/")}>whatsapp</button>
        <div className="sidebar-header">WhatsApp</div>
        <ul className="contact-list">
            {contacts.map((contact) => (
                <li
                    key={contact.id}
                    className={`contact-item ${selectedContact && selectedContact.id === contact.id ? 'selected' : ''}`}
                    onClick={() => {
                        setSelectedContact(contact);
                        navigate(`/chat/${contact.id}`);
                    }}
                >
                    <img src={contact.imageProfile} alt={contact.name} className="image-profile" />

                    <section className="contact-info">
                        <header className="contact-header">
                            <span className="contact-name">{contact.name}</span>
                            <span className="last-connection">{contact.lastConection}</span>
                        </header>
                        <footer className="contact-footer">
                            <span className="last-message">{contact.lastMessage}</span>
                            {contact.silence && <span className="silence">{contact.silence}</span>}
                        </footer>
                    </section>
                </li>
            ))}
        </ul>
    </div>
);
};

export default Sidebar;