import "./SideBar.css";
import React from 'react';

const Sidebar = ({ setSelectedContact, selectedContact }) => {
    const contacts = [
        {id: 1,  name: "Homero Simpson" },
        { id: 2, name: "Marge Simpson" },
        { id: 3, name: "Bart Simpson" },
        { id: 4, name: "Lisa Simpson" },
        { id: 5, name: "Maggie Simpson" },
        { id: 6, name: "Ned Flanders" },
        { id: 7, name: "Mr. Burns" },
        { id: 8, name: "Krusty el Payaso" }
    ];

    return (
        <div className="sidebar">
            <div className="sidebar-header">WhatsApp</div>
            <ul className="contact-list">
                {contacts.map((contact) => (
                    <li
                        key={contact.id}
                        className={`contact-item ${selectedContact && selectedContact.id === contact.id ? 'selected' : ''}`}
                        onClick={() => {
                            console.log("click en: ", contact.name);
                            setSelectedContact(contact);
                        }}
                    >
                        {contact.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;