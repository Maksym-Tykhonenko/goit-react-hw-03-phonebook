import css from './Filter.module.css';


const Filter = ({ filter, addToFilterContact }) => {

    return (
        <input
            placeholder='Filter'
            className={css.filter}
            value={filter}
            onChange={addToFilterContact}
            type="filter"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required />
    );
    
}
export default Filter;