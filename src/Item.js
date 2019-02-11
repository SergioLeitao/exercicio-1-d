import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Item extends Component {

    state = {
        showPlayed: true
    }

    showHidePlayed = ()=>{
        this.setState(previus=>({showPlayed: !previus.showPlayed}))
    }


    render(){
        const {userName,played} = {...this.props.item}
        return(
            <li>
                <span>{userName} played {this.state.showPlayed?played:'*'} games</span>
                <button onClick={this.showHidePlayed} >{this.state.showPlayed?'Hide the Number of Games Played':'Show the Number of Games Played'}</button>
            </li>
        )
    }

}


Item.propTypes = {
    item: PropTypes.object.isRequired,
}

export default Item