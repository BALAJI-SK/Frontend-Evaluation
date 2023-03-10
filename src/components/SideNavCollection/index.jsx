/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import {  GET_ALL_DATA } from '../../util/constants';
import { makeRequest } from '../../util/makeRequest/index';
import { useNavigate } from 'react-router-dom';
import  ContentType  from '../ContentType';
import './SideNavCollection.css';
import CollectionType from '../CollectionType';

const SideNavCollection = (id ) => {
    const navigate = useNavigate();
    const [typeData,setTypeData] = useState([]);

    useEffect(()=>{
        makeRequest(GET_ALL_DATA())
            .then((response) => {
                setTypeData(response);
            }).catch(() => {
                navigate('/');
            });

       
    }, []);
    const handleCollection = (item) => {
        navigate(`/collection/${item}`);
    };


    return (
        <div className="super">
            <div className="sidebar-main">
                <div className="sidebar-header">
                    <a id="sidebar-heading">CMS+</a>
                </div>
                <div className="sidebar-content">
                    <div className="sidebar-header-text">

                        <a><b>COLLECTION TYPES</b></a>
                        
                        <img id="search-img" src={require('../../assets/icon-search-dark_2023-03-09/icon-search-dark.png')} alt="" />
                    </div>    
                    <div className="content">
                        <ul className='content'>
                            {typeData.map((item,index)=>{
                                return ( 
                                    <div id='list-items-effect' key={index} onClick={()=>handleCollection(item.id)}>
                                        <li  key={index} id="sidebar-list">
                                            {item.contentName}
                                        </li>
                                        
                                    </div>);
                                   
                            })
                            }
                        </ul>
                      
                                          
                        
                    </div>
                    <div className="Content-type-header">
                        <a><b>CONTENT TYPES BUILDER</b></a>
                    </div> 
                </div>
        
            </div>
            <CollectionType id={id} typeData={typeData}   />
        </div>
    );
};
export  default SideNavCollection;
