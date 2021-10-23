import React, {Component} from 'react';
import YouTubeComp from '../../component/YouTubeComp/YouTubeComp';
import Product from "../Product/Product"

class Home extends Component {
    render(){
        return(
            <div>
                {/* <p>Youtube Component</p>
                <hr/>
                <YouTubeComp 
                    time="7.12" 
                    tittle = "Tutorial Bagian 1"
                    desc = "2 Kali Ditonton"/>
                <YouTubeComp 
                    time="4.20" 
                    tittle = "Tutorial Bagian 2"
                    desc = "13 Kali Ditonton"/>
                <YouTubeComp 
                    time="3.11" 
                    tittle = "Tutorial Bagian 3"
                    desc = "20 Kali Ditonton"/>
                <YouTubeComp 
                    time="9.32" 
                    tittle = "Tutorial Bagian 4"
                    desc = "19 Kali Ditonton"/>
                <YouTubeComp 
                    time="19.21" 
                    tittle = "Tutorial Bagian 5"
                    desc = "27 Kali Ditonton"/>
                <YouTubeComp/> */}
                <p>Counter</p>
                <hr/>
                <Product />
            </div>
        )
    }
}

export default Home;