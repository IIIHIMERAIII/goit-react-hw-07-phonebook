import { Label, Input } from './styled'
import { useDispatch } from "react-redux";
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
    const dispatch = useDispatch();
    const onChange = event => {
        const filtered = event.target.value;
        dispatch(setFilter(filtered));
    };
    return (
        <Label>
            Fint contacts by name
            <Input
                type="text"
                name="filter"
                onChange={onChange}
            >
            </Input>
        </Label>
    );
};