import React, { Component } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import PageContent from './PageContent';

class MainPage extends Component {
    render() {
        return (
            <div className="mainpage">
                <Navbar />
                <Sidebar />
                <PageContent />
            </div>
        )
    }
}

export default MainPage;

