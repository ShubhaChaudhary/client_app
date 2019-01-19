import React from 'react'
import { connect } from 'react-redux'
import PhotoListItem from './PhotoListItem'
import selectPhoto from './../selectors/visiblePhotos'
const Photos=(props)=>(
       <div>
       <h3>Photos</h3>
       { props.photos.map((photo)=>{
        return <PhotoListItem key={photo.id}{...photo} />      
       })}
       </div>
);

const MapStateToProps=(state)=>{
    return{
        photos: selectPhoto(state.photos,state.filters)
    }
};

export default connect(MapStateToProps)(Photos);