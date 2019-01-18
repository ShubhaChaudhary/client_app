import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom'
const Header=()=>(
    <div>
    <h1> Profile </h1>
    <NavLink to='/'> Profile</NavLink>
    <NavLink to='/resume'> || Resume</NavLink>
    <NavLink to='/project'> || Project</NavLink>
    </div>
)
const AboutPage=()=>(
    <h3> About me is still working</h3>
)
const ResumePage=()=>(
    <h3> Resume Details </h3>
)

const Project=(props)=>(
    <h3> Project Details {props.match.params.id}</h3>
)

const route=(
    <BrowserRouter>
    <div>
    <Header />
    <Switch>
    <Route path='/'  exact component={AboutPage}/>
    <Route path='/resume' component={ResumePage}/>
    <Route path='/project/:id' component={Project}/>
    </Switch>
    </div>
    </BrowserRouter>
)

ReactDOM.render(route,document.getElementById('para'))