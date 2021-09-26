import React from 'react';
import './Home.css';
import './Card.css'
import Card1 from './Cardbig'

function AttendOrganize() {
    return(
        <>
            <div className='home__section'>
            <Card1
                src="https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/8/2019/09/how-to-plan-an-event.png"
                title="Organize an Event"
                description="Initiate the event for Environment"
            />
            <Card1
                src="https://www.wealthmanagement.com/sites/wealthmanagement.com/files/group-hug-illustration.jpg"
                title="Attend an Event"
                description="Volunteer or sponsor events."
            />
            {/* <Card
                src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                title="Entire homes"
                description="Comfortable private places, with room for friends or family."
            /> */}
            </div>
        </>
    )
}

export default AttendOrganize;