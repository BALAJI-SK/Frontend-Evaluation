import React,{useState} from 'react';
import {PropTypes} from 'prop-types';

import { useNavigate } from 'react-router-dom';

export default function CollectionType({id,typeData})  {
    const navigate = useNavigate();
    //   console.log(typeData.fields,'typeData');
    // const [collectionData,setcollectionData] = useState([]);
    const [showAddEntry,setShowAddEntry] = useState(false);
    const [contentData,setContentData] = useState(() => {
        return  typeData.map((item) => {
            if(item.id==id.id)
                return item;} );} );
    
    // const handleEntryDelete = (id) => {
    //     console.log(id,'id');
    //     // makeRequest(DELETE_collection_DATA_BY_ID(id),{
    //     //     headers: { Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJpdHZpa0BnbWFpbC5jb20iLCJpYXQiOjE2NzgzNzk2MTYsImV4cCI6MTY3ODU1MjQxNn0.DZQULkCxlCnZVPmT8dAkBc6f0p08YNzRpaoEqOnuyaE' }
    //     // });
    //     // const newcollectionData = collectionData.filter((item) => item.id !== id);
    //     // setcollectionData(newcollectionData);
    // };
      
    const handleAddNewEntry = () => {
        setShowAddEntry(!showAddEntry);
        navigate('/');
    };
    const dataProducer=()=>{
        return (  typeData.map((item) => {
            if(item.id==id.id)
                return item.collection.map((it) => {
                    return Object.keys( it.collectionFields).map((data,index) => {
                         
                        return (
                            <div key={index}className='add-entry-input'>
                                <label key={it}>{it}</label>
                                <input name={it.collectionFields[data]} type="text" id={it} />
                            </div>
                        );
                    });
                });
        }));
    };
    const handleAddNewEntrySubmit = (e) => {
        e.preventDefault();
        const data = {} ;
        setContentData(data);
        // typeData.map((item) => {
        //     if(item.id==id.id)
        //         return item.collectionFields.map((it) => {
        //             data[it] = e.target[it].value;
        //         });
        // });
        // makeRequest(POST_collection_DATA_BY_TYPE(id),{
        //     headers: { Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJpdHZpa0BnbWFpbC5jb20iLCJpYXQiOjE2NzgzNzk2MTYsImV4cCI6MTY3ODU1MjQxNn0.DZQULkCxlCnZVPmT8dAkBc6f0p08YNzRpaoEqOnuyaE' },
        //     data: {...data}
        // })
        //     .then((response) => {
        //         console.log(response,'response');
        //         setcollectionData([...collectionData,response]);
        //     });
      
      
        console.log(data.get('fname'));
    };
          
      
      
    return (
        <div className='collection-main'>
            <div className='collection-header'>
                <a id='collection-heading'>{contentData.contentName}</a>
            </div>
            <div className='collection-body'>
                <div className='collection-body-header'>
                    <a id='collection-body-heading'>Fields</a>
                    <a onClick={handleAddNewEntry} id="add-entry-btn">Add a new entry</a>
                </div>
                {showAddEntry && 
              <form onSubmit={handleAddNewEntrySubmit}>
                  <div className='add-entry'>
                      {() => dataProducer()
                      }
                      <button id="add-entry-btn">Add</button>
                  </div>
              </form>}
                <div className='collection-body-content'>
                    <div className='collection-body-content-header'>
                        {typeData.map((item) => {
                            if(item.id==id.id)
                                return item.collection.map((it) => {
                                    return Object.keys( it.collectionFields).map((data,index) => {
                                       
                                        return (
                                            <a key={index}>{ it.collectionFields[data]}</a>
                                        );
                                    });
                                });
                               
                                
                        })
                        }
                        <a>Actions</a>
                    </div>
               
                    {/* <div className='collection-body-content-body'>
                        {collectionData.map((item) => {
                            return (
                      
                                <div key={item.id} className="collection-list">
                                    {
                                        Object.values(item.data).map((value, index) => {
                                            return (<a key={index}>{value}</a>);
                                        })
                                    }
                                    <div className="edit-options">
                                        <img src={require('../../assets/user-edit-text-message-note_2023-03-09/user-edit-text-message-note.png')} alt="" />
                                        <img onClick={()=>handleEntryDelete(item.id)} src={require('../../assets/trash-delete-recycle-bin-bucket-waste_2023-03-09/trash-delete-recycle-bin-bucket-waste.png')} alt="" />
                                    </div>
                                </div>
                            );
                        })}
                  
                    </div> */}
                </div>
            </div>
      
      
        </div>
    );
}
CollectionType.propTypes = {
    id: PropTypes.object.isRequired,
    typeData: PropTypes.array.isRequired
};