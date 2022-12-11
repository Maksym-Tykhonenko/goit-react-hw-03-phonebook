import {Component } from "react";
import { nanoid } from 'nanoid';

import css from './Form.module.css';

class Form extends Component {
    state = {
        name: '',
        number: '',
        id: ''
    }

    handleInputContact = (e) => {
        const {value, name}= e.currentTarget
        this.setState({
            [name]: value,
            id: nanoid(10)
        });
    };

    handleAddContact = (e) => {
        e.preventDefault();
        
        const { onSubmit } = this.props;

        onSubmit(this.state);

        this.reset();
    };

    reset = () => {
        this.setState({
            name: '',
            number: ''
        })
    }
    
    render() {
        return (
         <form className={css.form} onSubmit={this.handleAddContact}>
            <label htmlFor="">Name
                    <input
                    placeholder="Name"
                    value={this.state.name}
                    onChange={this.handleInputContact}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required />
            </label> 
                
            <label htmlFor="">Number
                    <input
                    placeholder="Number"
                    value={this.state.number}
                    onChange={this.handleInputContact}
                    type="tel"
                    name="number" />
            </label>
              
            <button className={css.btn} type="submit">Add</button>
              
          </form>
        );
    };
};


export default Form;