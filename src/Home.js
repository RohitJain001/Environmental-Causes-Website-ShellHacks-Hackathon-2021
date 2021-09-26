import React from 'react';
import './Home.css';
import Banner from './Banner'
import AllEvents  from './AllEvents'
import AttendOrganize from './AttendOrganize'

// ES7 snippets to do 'rfce'

function Home() {

    // var [currentView, sendSignin] = React.useState("No");
    // sendSignin=(val)=>{
    //     sendSignin(val)
    // }
    return (
        <div className='home'>
            <>
        
                    <Banner />
                    <h3 style={{"margin":"30px 15%"}}>Everyone has different amounts of time and energy that they can lend to the community, but a lot of people are concerned about the environment. Luckily, you can do a few simple things to help the community and the environment at the same time, without stretching your own personal resources too thin.</h3>
                    
                    <AttendOrganize /> 
                    <AllEvents/>
              </> 
            
        </div>
    )
}

export default Home
