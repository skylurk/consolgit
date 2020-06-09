import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import ItemList from '../../handoveritems/ItemList';
import CreateItem from '../CreateItem';
import EditItem from '../EditItem';
import ItemData from '../ItemData';

class ItemMain extends Component {
    render() {
        const { handoveritems } = this.props;
        return (
            <div className="handover-item-main-page">
                 <div className="row">
                     <div className="col s12 m7">
                         <Switch>
                             <Route path='/handoveritems/createitem' component={CreateItem} />
                             <Route path='/handoveritems/edititem' component={EditItem} />
                             <Route path='/handoveritems/itemdata/:id' component={ItemData} />
                         </Switch>
                     </div>

                     <div className="col s12 m5">
                         <ItemList handoveritems={handoveritems} />
                     </div>
                 </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);

    return {
        handoveritems: state.firestore.ordered.CaptainQuestionItems
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'CaptainQuestionItems', orderBy: 'questionCode' }
    ])
)(ItemMain);