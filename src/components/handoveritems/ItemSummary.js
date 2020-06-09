import React from 'react';

const ItemSummary = ({handoveritem}) => {
    return ( 
        <div className="card z-depth-2 item-summary">
            <div className="card-content grey-text text-darken-4">
                <span className=" bold-text">{handoveritem.QuestionTitle}</span>
                <p>{handoveritem.QuestionItem}</p>
                <p className="grey-text">{handoveritem.questionCode}</p>
            </div>
        </div>
    )
}

export default ItemSummary;