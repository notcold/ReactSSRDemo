/**
 * Created by shikuan on 2017/11/13.
 */
import  React,{Component} from 'React'

class ProductBox extends Component{

    constructor(){
        super()
        this.state={
            value:1
        }
    }

    componentDidMount(){
        this.setState({
            value: this.state.value+1
        })
        console.log(this.state)
        // document.getElementById('test').addEventListener('click',(e)=>{
        //     console.log(this.state.value)
        //     this.setState({
        //         value: this.state.value+1
        //     })
        //     console.log(this.state.value)
        // })
    }
    bindClick(){
        console.log(this.state.value)
        this.setState({
            value: this.state.value+1
        })
        this.setState({
            value: this.state.value+1
        })
        console.log(this.state)
        setTimeout(()=>{
            console.log(this.state)
            this.setState({
                value: this.state.value+1
            })
            console.log(this.state)
        },2000)
        // var xhr = new XMLHttpRequest();
        // xhr.open('get','http://www.baidu.com');
        // xhr.onreadystatechange= (  )=> {
        //     if(xhr.readyState > 0){
        //         this.setState({
        //             value: this.state.value+1
        //         })
        //         console.log(this.state)
        //     }
        // }
        // xhr.send();
    }

    bindClick2(){
        console.log(this.state.value)
        this.setState({
            value: this.state.value+2
        })
        console.log(this.state)
    }

    render () {
        return (
            <div id={"test"} className="productBox" onClick={
                ()=>{
                    // store.dispatch({type:'ADD_TODO'})
                    this.bindClick();
                    this.bindClick2();
                }
            }>
                Hello World+{this.state.value}!
            </div>
        );
    }
}


export default ProductBox

