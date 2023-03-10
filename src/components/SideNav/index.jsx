/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { GET_ALL_CONTENTS } from '../../util/constants';
import { makeRequest } from '../../util/makeRequest/index';
import { useNavigate } from 'react-router-dom';
import  ContentType  from '../ContentType';
import './SideNav.css';

const Sidebar = () => {
    const navigate = useNavigate();
    const [typeData,setTypeData] = useState([]);
    const [contentShow, setShowContent] = useState(true);
    const [collectionShow, setShowCollection] = useState(false);

    const handleCollection = () => {
        setShowCollection(true);
        setShowContent(false);
    };

    useEffect(() => {
        makeRequest(GET_ALL_CONTENTS())
            .then((response) => {
                setTypeData(response);
            }).catch((error) => {
                navigate('/login');
            });

    }, []);

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
                            {typeData.map(item=>{
                                return <li key={item.id} id="sidebar-list">{item.contentName}</li>;
                            })
                            }
                        </ul>
                    </div>
                    <div className="">
                        <a><b>CONTENT TYPES BUILDER</b></a>
                    </div> 
                </div>
        
            </div>
            <ContentType typeData={typeData}/>
        </div>
    );
};
export  default Sidebar;
