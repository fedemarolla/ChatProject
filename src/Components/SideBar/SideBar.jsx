import "./SideBar.css";
import contacts from "../../data/contacts";
import { useNavigate } from "react-router-dom";


const Sidebar = ({ setSelectedContact, selectedContact }) => {
    const navigate = useNavigate();
    const isMobile = window.innerWidth < 768;
    const handleContactClick = (contact) => {
        setSelectedContact(contact);
        if (isMobile) {navigate(`/chat/${contact.id}`);}
        };

        return (
            <div className="sidebar">
                <button className="sidebar-header" onClick={() => navigate("/")}>whatsapp</button>
            
                <ul className="contact-list">
                    {contacts.map((contact) => (
                        <li
                            key={contact.id} className={`contact-item ${selectedContact && selectedContact.id === contact.id ? "selected" : ""}`}
                            onClick={() => {setSelectedContact(contact);
                            navigate(`/chat/${contact.id}`);
                            }}
                        >

                            <img src={contact.imageProfile} alt={contact.name} className="image-profile"/>

                            <section className="contact-info">
                                
                                <div className="contact-header">
                                    <span className="contact-name">{contact.name}</span>
                                    <span className="last-connection">{contact.lastConection}</span>
                                </div>
                                <div className="contact-footer">
                                    <span className="last-message">{contact.lastMessage}</span>
                                    {contact.silence && (
                                    <span className="silence">{contact.silence}</span>
                                    )}
                                </div>
                                
                            </section>
                        
                        </li>   
                    ))}
                </ul>
            </div>
        );  
};

    export default Sidebar;
