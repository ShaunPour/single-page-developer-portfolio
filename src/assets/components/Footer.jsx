import contacts from "../data/contacts";

const Footer = () => {
    return (
        <footer>
            <h3 className="footer-title">Contact</h3>
            <p className="footer-txt">
                I would love to hear about your project and how I could help. Please fill in the
                form, and I’ll get back to you as soon as possible.
            </p>
            <form className="footer-form">
                <input type="text" className="name-input" placeholder="NAME"/>
                <input type="email" className="email-input" placeholder="EMAIL"/>
                <textarea className="message-input" cols="30" rows="10" placeholder="MESSAGE"></textarea>
                <button className="contact-lower">Send Message</button>
            </form>
            <hr />
            <h3 className="name-footer">shaunpour</h3>
            <div className="social">
            {contacts.map((contact) => {
                    return (
                        <a key={contact.id} href={contact.url} className={contact.name} target="_blank" rel="noreferrer"><img src={contact.image} alt={contact.name} className={`${contact.name}-img`} /></a>
                    );
                }
                )}
            </div>
        </footer>
    )
}

export default Footer;