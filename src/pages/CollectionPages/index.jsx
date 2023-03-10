import React,{} from 'react';
import { useParams  } from 'react-router-dom';
import SideNavCollection from '../../components/SideNavCollection';

import './CollectionPages.css';

export default function CollectionPages() {

    const {id}=useParams();
   
    return (
        <div className='content-type-super'>
            <SideNavCollection id={id}  />
        </div>
        
    );
}