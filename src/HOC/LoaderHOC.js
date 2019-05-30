import React from 'react';
import './spinner.css'
const LoaderHOC =(Component)=>{
    return class LoaderHoc extends React.Component{
        state = {
            isLoading:true
        }

        componentDidMount() {
            setTimeout(
                ()=>this.setState({isLoading:false})
                ,1000)
        }

        render(){
            return this.state.isLoading ? <div class="sk-folding-cube">
            <div class="sk-cube1 sk-cube"></div>
            <div class="sk-cube2 sk-cube"></div>
            <div class="sk-cube4 sk-cube"></div>
            <div class="sk-cube3 sk-cube"></div>
          </div> 
          : <Component {...this.props}/>
        }

    }
}
export default LoaderHOC;