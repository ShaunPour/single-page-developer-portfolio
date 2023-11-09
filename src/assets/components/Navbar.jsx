import contacts from "../data/contacts";

const Navbar = () => {
    return (
        <nav>
            {contacts.map((contact) => {
                    return (
                        <a key={contact.id} href={contact.url} className={contact.name}><img src={contact.image} alt={contact.name} className={`${contact.name}-img`} /></a>
                    );
                }
                )}
        </nav>
    )
}

export default Navbar;