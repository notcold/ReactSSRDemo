/**
 * Created by shikuan on 2019/2/27.
 */
import React from 'react';
import { StaticRouter } from 'react-router'
import { Route } from "react-router-dom";
import AppComponent from "./components/box/productBox";

function ServerRender(req, initStore) {

    return (props, context) => {
        return (
                <StaticRouter location={req.url} context={context} >
                    <Route path="/" component={AppComponent}/>
                </StaticRouter>
        )
    }
}

export default ServerRender;
