import React from 'react'

export default function Box(props){
    const [on, setOn] = React.useState(props.on)
    function setColor() {
        setOn(!on)
    }

    const styles = { 
        backgroundColor: on ? "#222222" : "transparent"
    }
    return (
        <div className='grid--main'>
        
        <div className='grid' onClick={setColor} style={styles}></div>
        
        </div>
    )
}