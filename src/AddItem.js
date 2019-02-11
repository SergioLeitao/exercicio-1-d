import React, {Component} from 'react'
import PropTypes from 'prop-types'

class AddItem extends Component {

    state = {
        firstName:'',
        lastName:'',
        userName:'',
        existeUserName:false
        
    }

    addNewItems = (event)=>{
        event.preventDefault()
        if(this.props.existUserName(this.state.userName)){
            console.log('esse cara já existe')
            this.setState({existeUserName: true})
        }else{
            this.props.onAddItem({...this.state,played:0})
            this.setState({
                firstName:'',
                lastName:'',
                userName:'',
                existeUserName: false
            })
        }
    }

    onInputValue = (event)=>{
        if(event.target.id === 'firstName')
            {this.setState({firstName: event.target.value})}
        else if(event.target.id === 'lastName')
            {this.setState({lastName: event.target.value})}
        else if(event.target.id === 'userName')
            {this.setState({userName: event.target.value})}
    }

    allInputIsEmpty = ()=>{
        return (this.state.firstName === '' || this.state.lastName === '' || this.state.userName === '')
    }


    render(){

        const {firstName, lastName, userName} = {...this.state}

        return(
            <div>
            <form onSubmit={this.addNewItems}>
                <input id='firstName' placeholder='First Name' value={firstName} onChange={this.onInputValue}></input>
                <input id='lastName' placeholder='Last Name' value={lastName} onChange={this.onInputValue}></input>
                <input id='userName' placeholder='UserName' value={userName} onChange={this.onInputValue}></input>
                <button disabled={this.allInputIsEmpty()}>Add</button>
            </form>
            {(this.state.existeUserName) &&(
                <span>Esse cara ja existe</span>
            )}
            </div>
        )

    }


}

AddItem.propTypes = {

    onAddItem: PropTypes.func.isRequired,
    existUserName: PropTypes.func.isRequired

}

export default AddItem