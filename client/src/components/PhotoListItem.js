import React from 'react'
import {connect} from 'react-redux'
import {removePhotos} from './../Action/photos'

const PhotoListItem=({dispatch,id,tag})=>(
     <div>
     <p>{tag}</p>
     <button onClick={()=>{
         dispatch(removePhotos({id}))
     }}>remove</button>
     </div>
);


export default connect()(PhotoListItem);
