import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createHandoverItem } from '../../store/actions/handoverItemActions';

class CreateItem extends Component {
    state = {
        QuestionTitle : '',
        QuestionItem : '',
        questionCode : '',
        hasAttachment : '',
        positionQuestion : '',
        stationQuestion : '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        this.props.createHandoverItem(this.state)
    }

    render() {
        return(
            <div className="create-handover-item">
                <div className="create-item z-depth-2">
                <form onSubmit={this.handleSubmit} className="white add-user-form">
                    <h5 className="grey-text text-darken-3">Add Handover Item</h5>
                    <div className="input-field">
                        <label htmlFor="QuestionTitle">Question Title</label>
                        <input type="text" id="QuestionTitle" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="QuestionItem">Question Item</label>
                        <input type="text" id="QuestionItem" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="questionCode">Question Code</label>
                        <input type="text" id="questionCode" onChange={this.handleChange}/>
                    </div>

                    <label>Has Attachment</label>
                    <select
                    id="hasAttachment"
                     className="browser-default" 
                     onChange={this.handleChange}>
                        <option value="none">None</option>
                        <option value="gallery">Gallery</option>
                        <option value="camera">Camera</option>
                        <option value="file">File</option>
                        <option value="userSelect">User Choice</option>
                    </select><br></br>

                    <label>Question For</label>
                    <select
                    id="positionQuestion"
                     className="browser-default" 
                     onChange={this.handleChange}>
                        <option value="AllPositions">General</option>
                        <option value="Captain">Captain</option>
                        <option value="Co-Pilot">Co-Pilot</option>
                        <option value="Operations">Operations</option>
                        <option value="Engineer">Engineer</option>
                    </select>


                    <label>Station Select</label>
                    <select
                    id="stationQuestion"
                     className="browser-default" 
                     onChange={this.handleChange}>
                        <option value="AllStations">General</option>
                        <option value="Juba">Juba</option>
                        <option value="Co-Kalemie">Co-Kalemie</option>
                        <option value="Bamako">Bamako</option>
                        <option value="Mogadishu">Mogadishu</option>
                        <option value="Nairobi">Nairobi</option>
                    </select>

                    <div className="input-field">
                        <button className="login-btn  lighten-1 z-depth-0">Add Item</button>
                    </div>
                </form>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createHandoverItem: (handoveritem) => dispatch(createHandoverItem(handoveritem))
    }
}

export default connect(null, mapDispatchToProps)(CreateItem);