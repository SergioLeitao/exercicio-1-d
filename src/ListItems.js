import React, {Component} from 'react'
import Item from './Item'
import PropTypes from 'prop-types'



class ListItems extends Component {

    render(){

        const items = this.props.items

        return(
            <ol>
                {items.map(item=>(
                    <Item item={item} key={item.userName}/>
                ))}
            </ol>
        )

    }

}

ListItems.propTypes = {
    items: PropTypes.array.isRequired,
}

export default ListItems
