import React, { useState } from 'react';
import './ModalField.css';
import PropTypes from 'prop-types';
import { makeRequest } from '../../util/makeRequest';
import { CREATE_FIELD } from '../../util/constants';

function ModalField(props) {
    const [inputValue, setInputValue] = useState('');

    function handleInputChange(event) {
        setInputValue(event.target.value);
    }

    function handleSave() {
        props.onSave(inputValue);
        setInputValue('');
       
        const tempContentData = props.contentData;
      
        tempContentData.contentField[inputValue]= inputValue;
        makeRequest(CREATE_FIELD(tempContentData)).then((response) => {
            if(response.message==='Pass'){
                console.log('Content Updated');
                props.setContentData(prev => {
                    prev.contentField[inputValue]= inputValue;
                    return {
                        ...prev
                    };});
            }
       
            props.isOpen(false); 
        });
    }
    function handleCancel() {
        props.isOpen(false);
        setInputValue('');
    }

    return (
        <div className="modal-container">
            <div className="modal">
                <h2>Edit Content Field Name</h2>
                <label htmlFor="input-field">Entry Field Name</label>
                <input
                    id="input-field"
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <div className="button-container">
                    <button onClick={handleCancel}>Cancel</button>
                    <button onClick={handleSave}>Save</button>
                </div>
            </div>
        </div>
    );
}


ModalField.propTypes = {
    onSave: PropTypes.func.isRequired,
    isOpen: PropTypes.func.isRequired,
    contentData: PropTypes.object.isRequired,
    setContentData: PropTypes.func.isRequired
};

export default ModalField;