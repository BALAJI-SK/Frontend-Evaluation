/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Fields  from '../Fields';
import './ContentType.css';
import PropTypes from 'prop-types';
import { CREATE_CONTENT } from '../../util/constants';
import { makeRequest } from '../../util/makeRequest/index';


export const ContentType = ({typeData}) => {
    const [fieldName, setFieldName] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [newType, setNewType] = useState('');
    const [contentData, setContentData] = useState({});

    const handleClick = (name, contentData1) => {
    
        console.log(name , contentData1);
        setFieldName(name);
        setContentData(contentData1);
    };

    const handleAddType = () => {
        setIsOpen(true);
    };

    const handleAddTypeButton = () => {
        if(newType === ''){
            setIsOpen(false);  
            return;
        }

        makeRequest(CREATE_CONTENT({
            contentName: newType,
            contentField: {} 
        }))
            .then((response) => {
                console.log(response);
                window.location.reload();
            }).catch((error) => {
                console.log(error);
            });

    
        setIsOpen(false);
    };
    console.log(typeData);
    const handleNewTypeInput = (e) => {
        setNewType(e.target.value);
    };

  

    return (
        <div className='contentmain'>
     
            <div className='contentheader'>
                <a id='contentheading'>Content Types</a>
            </div>
            <div className='contentbody'>
                <div className="body-left">
                    <div className="bodyleftheader">
                        <a id='body-left-heading'>{typeData.length} Types</a>
                        <img id="search-img" src={require('../../assets/icon-search-dark_2023-03-09/icon-search-dark.png')} alt="" />
                    </div>
                    <button onClick={handleAddType} id="new-btn" >+New Type</button>
                    { isOpen &&<div className="add-type-container">
                        <label >Enter new type</label>
                        <input onChange={handleNewTypeInput} type="text" />
                        <button onClick={handleAddTypeButton}>Save</button>
                    </div>
                    }
                  
                    {typeData.map(item=>{
                        return <div onClick={()=>handleClick(item.id,item)} id="list-content" key={item.id} >
                            <a name={item.contentName}>{item.contentName}</a>
                            <a>{Object.keys(item.contentField).length}</a>
                        </div>;
                    }
                    )}



                </div>    
                <div className="body-right">
                    { fieldName !== '' && <Fields fieldName={fieldName} setFieldName= {setFieldName} contentData={contentData} setContentData={setContentData} /> }  
                </div>
            </div>


        </div>
    );
};

ContentType.propTypes = {
    typeData: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default ContentType;