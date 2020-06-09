import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import Dashboard from '../dashboard/Dashboard';
import ItemMain from '../handoveritems/itempages/ItemMain';
import UserMain from '../users/userpages/UserMain';

class PageContent extends Component {
    render(){
        return(
            <div className="page-content">
                <Switch>
                    <Route exact path='/' component={Dashboard} />
                    <Route path='/handoveritems' component={ItemMain} />
                    <Route path='/users' component={UserMain} />
                </Switch>
            </div>
        )
    }
}

export default PageContent;