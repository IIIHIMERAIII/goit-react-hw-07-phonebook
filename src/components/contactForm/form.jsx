import { FormStyle, Label, FormInput, FormButton } from './form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';

export const Form = () => {
    const dispatch = useDispatch();
    const checkContacts = useSelector(getContacts);

    const onSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const formName = event.target.elements.name.value;
        const formNumber = event.target.elements.number.value;
        if (
            checkContacts.find(
                cont => cont.name.toLowerCase() === formName.toLowerCase()
            )
        ) {
            return alert(`${formName} is already in contacts`);
        }
        dispatch(addContact(formName, formNumber));
        form.reset();
    };

    return (
        <FormStyle onSubmit={onSubmit}>
            <Label>
                Name
                <FormInput
                    name="name"
                    type='text'
                    placeholder='Please enter the name'
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    required
                />
            </Label>
            <Label>
                Number
                <FormInput
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    placeholder='Please enter phone number'
                    minlength="7"
                    maxLength="10"
                />
            </Label>
            <FormButton type='submit'>Add contact</FormButton>
        </FormStyle>
    )
};
