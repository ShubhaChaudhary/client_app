import React from 'react'
import { connect } from 'react-redux'
import {setTagFilter} from './../Action/filters'
import {sortByTag} from './../Action/filters'
import {sortByDate} from './../Action/filters'
const PhotoFilter=(props)=>(
    <div>
    <input type='text' name='input' value={props.filters.tag} onChange={(e)=>
      props.dispatch(setTagFilter(e.target.value)) }placeholder='search'/>
    <select value={props.filters.sortBy} onChange={(e)=>{
        if (e.target.value ==='tag'){
            props.dispatch(sortByTag())
        }else if (e.target.value==='date'){
            props.dispatch(sortByDate())
        }
    }}>
    <option value='tag'> Tag </option>
    <option value='date'> Date </option>
    </select>
    </div>
);

const mapStateToProps=(state)=>{
    return{
        filters: state.filters
    }
}
export default connect(mapStateToProps)(PhotoFilter);