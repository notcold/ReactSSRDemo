/**
 * Created by shikuan on 2017/11/10.
 */
import  React from 'React';
import  {render} from 'React-DOM';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import reducers from './reducers/todo'
import {
    HashRouter,
    Route
} from 'react-router-dom';

import AppComponent from './container/productBox';

export const store = createStore(reducers);
console.log(store)
export const service = 123;


const Root=({store})=>{
    return (<Provider store={store}>
        <HashRouter >
            <Route path="/" component={AppComponent}/>
        </HashRouter>
    </Provider>)
}

render((
    <Root store={store} />
), document.getElementById('app'));



/*if (module.hot) {
      module.hot.accept('./print.js', function() {
          render(<AppComponent />, document.getElementById('app'));

      })
}*/
