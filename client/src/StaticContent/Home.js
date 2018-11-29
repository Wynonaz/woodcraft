import React from 'react';
import LazyHero from 'react-lazy-hero';

export default class Home extends React.Component{
    render(){
        return(
            <div>
            <LazyHero imageSrc="https://www.woodcraft.ca/wp-content/uploads/2018/03/010_Woodcraft_Furniture_MalmoTable_FrtB-500x375.jpg" 
                    minHeight= '100vh'
                    opacity= '0.5'
                    color= '#A9A9A9'
                    position = ''>
                <h1>WOODCRAFT</h1>
                <h2>fourtythree years of solid wood furniture</h2>
            </LazyHero>
 </div>

        )
    }
}