import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const ItemData = (props ) => {
    const { handoveritem } = props;
    if (handoveritem){
        return(
            <div className="create-handover-item">
            <div className="create-item z-depth-2">
        {/* <div className="view-handover-item-data"> */}
        <h4>Handover Item Details</h4><hr /><br />
            <p><span className="item-text">Item Title: </span> { handoveritem.QuestionTitle } </p>
            <p><span className="item-text">Item Content: </span> { handoveritem.QuestionItem } </p>
            <p><span className="item-text">Handover for: </span> { handoveritem.positionQuestion } </p>
            <p><span className="item-text">Station: </span> { handoveritem.stationQuestion } </p>
            <p><span className="item-text">Question Code:  </span> { handoveritem.questionCode } </p>
        </div>
        </div>
        )
       
    } else {
        return(
            <div className="container center">
                <p>Loading...</p>
            </div>
        )
    }
     
    }

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    const id = ownProps.match.params.id
    const handoveritems = state.firestore.data.CaptainQuestionItems;
    const handoveritem = handoveritems ? handoveritems[id] : null
    return {
        handoveritem: handoveritem
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'CaptainQuestionItems' }
    ])
)(ItemData);
