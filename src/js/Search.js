import React from 'react';
export  default class Search extends React.Component{
    constructor(){
        super();
        this.state ={
            searchTerm:"React"
        }
    }

    handleChange(){
        this.setState({searchTerm: event.target.value})
    }

    handleSubmit(event){
        console.log(
            "Submitted values are: ", event.target.name.value, event.target.email.value
        );
        event.preventDefault();
    }

    render(){
        return(
            <div>
            Search Term: <input type="search" value={this.state.searchTerm}
            onChange={this.handleChange.bind(this)}
            />
             <form onSubmit={this.handleSubmit}>
                <div className="formGroup">
                Name: <input name="name" type="text" />
                </div>
                <div className="formGroup">
                E-mail: <input name="email" type="mail" />
                </div>
                <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
} 
