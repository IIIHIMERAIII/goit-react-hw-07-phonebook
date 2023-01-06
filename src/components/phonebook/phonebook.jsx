
import { StyledDiv, List, ListItem, ListButton } from "./phonebook.style"
import { useSelector, useDispatch } from "react-redux";
import { deleteContacts } from "redux/operations";

export const Phonebook = ({ filterContacts }) => {
    const dispatch = useDispatch();

    const isLoading = useSelector(state => state.contacts.contacts.isLoading);

    const deleteContact = contactId => {
        dispatch(deleteContacts(contactId));
    };

    return (
        <StyledDiv>
            <List>
                {filterContacts.map(contact => (
                    <ListItem key={contact.id}>
                        <span>{contact.name}: {contact.phone}</span>
                        <ListButton
                            onClick={() => {
                                deleteContact(contact.id);
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


