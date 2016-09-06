import React , {Component,PropTypes} from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';

class ContactsAppContainer extends React.Component{
    constructor(){
        super();
        this.state={
            contacts:[]
        };
    }
    componentDidMount(){
        fetch('./contacts.json')
        .then((response) => response.json())
        .then((responseData) => {
            this.setState({contacts: responseData})
            console.log('Success fetching and parsing data');
        }).catch((error => {
            console.log('Error fetching and parsing data!',error)
        }));
    }
    render(){
        return(
            <ContactsApp contacts={this.state.contacts}/>     
        )
    }

}

class ContactsApp extends React.Component{
    constructor(){
        super();
        this.state={
            filterText:""
        };
    }

    handleUserInput(searchTerm){
        this.setState({filterText:searchTerm})
    }

    render(){
        return(
            <div>
            <SearchBar filterText={this.state.filterText}
            onUserInput={this.handleUserInput.bind(this)}/>
            <ContactList 
            contacts={this.props.contacts}
            filterText={this.state.filterText}
            />
            </div>
        )
    }
}

ContactsApp.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object)
};

class SearchBar extends React.Component{
    handleChange(event){
        this.props.onUserInput(event.target.value)
    }

    render(){
        return(
            <input type="search" placeholder="search" 
            value={this.props.filterText}
            onChange={this.handleChange.bind(this)
            }/>
        )
    }
}

SearchBar.propTypes= {
    onUserInput: PropTypes.func.isRequired,
    filterText: PropTypes.string.isRequired
}

class ContactList extends React.Component {
    render(){
        let filteredContacts =  this.props.contacts.filter(
            (contact) => contact.name.indexOf(this.props.filterText) !== -1
        );
        return (
            <ul> 
               {filteredContacts.map(
                (contact) => <ContactItem key={contact.email}
                name={contact.name}
                email={contact.email} />
                )}
            </ul>
        )
    }
}
ContactList.PropTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object)
}

class ContactItem extends React.Component{
    render(){
        return <li>{this.props.name} - {this.props.email}</li>
    }
}

ContactItem.PropTypes ={
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
}

const app = document.getElementById('app');
ReactDOM.render(<ContactsAppContainer/>, app);