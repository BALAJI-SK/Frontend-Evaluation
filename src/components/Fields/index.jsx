/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Fields.css';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import ModalField  from '../ModalField';
import { makeRequest } from '../../util/makeRequest';
import { DELETE_FIELD } from '../../util/constants';

const Fields = ({fieldName,setFieldName, contentData , setContentData}) => {

    const [showAddField, setShowAddField] = useState(false);
    const [newField, setNewField] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [fieldData, setFieldData] = useState();
    const [inputModal, setInputModal] = useState('');
    const [addIsOpen, setAddIsOpen] = useState(false);


    const handleAddField = () => {
        setAddIsOpen(true);
    };
    const handleDelete= (item) => {
        console.log('delete button clicked',item);
        makeRequest(DELETE_FIELD(contentData.id ,item)).then((response) => {
            console.log(response);
            if(response.message === 'PASS');
            else{
                setContentData(prev => {
                    delete prev.contentField[item];
                    return {
                        ...prev
                    };});
            }
        }).catch((error) => {
            console.log(error);
        });
    };

            
    const handleEditButton = (item) => {
        console.log('edit button clicked',item);
        setFieldData(item);
        setIsOpen(true);
     
       
    };
    const handleAddFieldButton = () => {
        console.log('add field button clicked');
     
        setShowAddField(false);
    };

    const handleNewFieldInput = (e) => {
        setNewField(e.target.value);
    };




    return (
        <div className='fields-main'>
            <div className='fields-heading' >
                <a id='fields-heading'>{contentData.contentName}</a>
                <a>{Object.keys(contentData.contentField).length} Fields</a>
            </div>
            <button onClick={handleAddField}id="add-field-btn">Add another field</button>
            { showAddField &&<div className="add-type-container">
                <label >Enter new type</label>
                <input onChange={handleNewFieldInput} type="text" />
                <button onClick={handleAddFieldButton}>Save</button>
            </div>
            }
            {
                addIsOpen && <ModalField isOpen={setAddIsOpen}  labelText={fieldData} onSave={setInputModal} onCancel= {setIsOpen} contentData={contentData} setContentData= {setContentData}  />
            }
            <div className='fields-content'>
                { Object.keys(contentData.contentField).map(item=>{
                    return (
                        <div key={contentData.contentField[item]} className="fields-list">
                            <a>{contentData.contentField[item]}</a>
                            <a>string</a>
                            <div className="edit-options">
                                <img src={require('../../assets/user-edit-text-message-note_2023-03-09/user-edit-text-message-note.png')} alt="" onClick={ () =>handleEditButton(item)} />
                                <img src={require('../../assets/trash-delete-recycle-bin-bucket-waste_2023-03-09/trash-delete-recycle-bin-bucket-waste.png')} alt="" onClick={()=>handleDelete(contentData.contentField[item])}  />
                            </div>
                        </div>
                    );
                })
                } 
               
            </div>
            { isOpen && <Modal isOpen={setIsOpen}  labelText={fieldData} onSave={setInputModal} onCancel= {setIsOpen} contentData={contentData} setContentData= {setContentData}  />
            }
            
        </div>
    );
    
};

Fields.propTypes = {
    fieldName: PropTypes.number.isRequired,
    setFieldName: PropTypes.func.isRequired,
    contentData: PropTypes.object.isRequired,
    setContentData: PropTypes.func.isRequired
};

export default Fields;
