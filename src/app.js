/**
 * Created by shikuan on 2017/11/10.
 */
import  React from 'React';
import  ReactDOM from 'React-DOM';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import reducers from './reducers/todo'
import {
    BrowserRouter,
    Route
} from 'react-router-dom';

import AppComponent from './components/box/productBox';


const Root=()=>{
    return (
        <BrowserRouter >
            <Route path="/" component={AppComponent}/>
        </BrowserRouter>
    )
}

ReactDOM.hydrate(<Root />, document.querySelector('#app'));

/*if (module.hot) {
      module.hot.accept('./print.js', function() {
          render(<AppComponent />, document.getElementById('app'));

      })
}*/
