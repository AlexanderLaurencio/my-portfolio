import "./contact.modules.css"
import { ContactType } from "@/types/types";

export default function Contact(contact: ContactType) {
    return(
        <article className="contact">
            <h3 className="contact_type">{contact.contactType}</h3>
            <a target="blank" href={contact.url} className="contact_link">
                <img src={contact.image} alt={contact.contactType.toUpperCase()} title={contact.contactType.toUpperCase()}/>
            </a>
        </article>
    )
};