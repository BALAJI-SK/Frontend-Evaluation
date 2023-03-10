import React, { useState } from 'react';
import './Modal.css';
import PropTypes from 'prop-types';
import { makeRequest } from '../../util/makeRequest';
import { PUT_FIELD_BY_TYPENAME } from '../../util/constants';

function Modal(props) {
    const [inputValue, setInputValue] = useState('');

    function handleInputChange(event) {
        setInputValue(event.target.value);
    }

    function handleSave() {
        props.onSave(inputValue);
        setInputValue('');
       
        const tempContentData = props.contentData;
      
        tempContentData.contentField[props.labelText]= inputValue;
           
        console.log( 'temp : ',tempContentData ,'real', props.contentData);
        makeRequest(PUT_FIELD_BY_TYPENAME(tempContentData)).then((response) => {
            
            if((response) === ('Failed')){
                console.log('Content NOT Updated');
                props.setContentData(prev => {
                    prev.contentField[props.labelText]= props.labelText;
                    return {
                        ...prev
                    };});
            }
            else{
                props.setContentData(prev => {
                    prev.contentField[inputValue]= inputValue;
                    delete prev.contentField[props.labelText];
                    return {
                        ...prev
                    };});
            }
            props.isOpen(false);
        // setContentData(response.data);
        }).catch((error) => {
            console.log(error);
        });
        props.isOpen(false); 
    }

    function handleCancel() {
        props.isOpen(false);
        setInputValue('');
    }

    return (
        <div className="modal-container">
            <div className="modal">
                <h2>Edit Content Field Name</h2>
                <label htmlFor="input-field">{props.labelText}</label>
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

Modal.propTypes = {
    labelText: PropTypes.string.isRequired,
    onSave: PropTypes.func.isRequired,
    isOpen: PropTypes.func.isRequired,
    contentData: PropTypes.object.isRequired,
    setContentData: PropTypes.func.isRequired
};

export default Modal;