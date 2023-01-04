
import { StyledDiv, List, ListItem, ListButton } from "./phonebook.style"
import { useSelector, useDispatch } from "react-redux";
import { getContacts, getFilter } from "redux/selectors";
import { delContact } from "redux/contactsSlice";



export const Phonebook = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    const filteredContacts = () => {
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
        );
    };

    const filtered = filteredContacts();
    return (
        <StyledDiv>
            <List>
                {filtered.map(contact => (
                    <ListItem key={contact.id}>
                        <span>{contact.name}: {contact.number}</span>
                        <ListButton
                            onClick={() => {
                                dispatch(delContact(contact.id));
                            }}
                            type="button">
                            Delete
                        </ListButton>
                    </ListItem>
                ))}
            </List>
        </StyledDiv>
    )
}


