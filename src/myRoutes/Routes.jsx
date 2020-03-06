import React from 'react';
import Navs from '../components/Navs'
import Contact from '../components/Contact'
import { Route } from 'react-router-dom';
import Main from '../components/main';


const Routes = (props) => {


    return (
        <div>

            <Navs history={props.history}/>
            <Route exact path='/' render={props => ( <Main {...props} /> )} />
            <Route path='/contact' component={Contact} />

        </div>
    )
}

export default Routes;