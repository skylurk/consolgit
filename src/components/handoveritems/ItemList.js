import React from 'react';
import ItemSummary from './ItemSummary';
import { Link } from 'react-router-dom';

const ItemList = ({handoveritems}) => {
    return (
        <div className="item-list section">
            <div className="card z-depth-2 user-summary">
                { handoveritems && handoveritems.map(handoveritem =>{
                        return (
                            <Link to={'/handoveritems/itemdata/' + handoveritem.id} key={handoveritem.id}>
                                <ItemSummary handoveritem={handoveritem}  />
                            </Link>
                        )
                    })}
            </div>
        </div>
    )
}

export default ItemList;