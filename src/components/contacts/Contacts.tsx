import "./contacts.modules.css"
import Contact from "../contact/Contact";
import { Suspense } from "react";
import ContactSkeleton from "../contact/ContactSkeleton";

export default function Contacts() {
    return(
        <section className="contacts">
            <h2 className="contacts_title">Contacts</h2>
            <div className="contacts_container">
                <Suspense fallback={<ContactSkeleton />}>
                    <Contact contactType="github" image="/icons/github.svg" url="https://github.com/AlexanderLaurencio/"/>
                </Suspense>
                <Suspense fallback={<ContactSkeleton />}>
                    <Contact contactType="email" image="/icons/gmail.svg" url="mailto:alexandermiranda2306@gmail.com"/>
                </Suspense>
                <Suspense fallback={<ContactSkeleton />}>
                    <Contact contactType="whatsapp" image="/icons/whatsapp.svg" url="tel:8498731354"/>
                </Suspense>
                <Suspense fallback={<ContactSkeleton />}>
                    <Contact contactType="instagram" image="/icons/instagram.svg" url="https://www.instagram.com/alexander_neftali_miranda/"/>
                </Suspense>
            </div>
        </section>
    )
};