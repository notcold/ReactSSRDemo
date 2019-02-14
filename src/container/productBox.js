/**
 * Created by shikuan on 2017/11/13.
 */
import  React,{Component} from 'React'
import {
    connect
} from 'react-redux'
import ProductBox from '../components/box/productBox'

const mapStateToProps = state => {
    return {
        value: state.value
    }
};

export default connect(mapStateToProps)(ProductBox);

