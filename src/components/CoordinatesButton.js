// Code CoordinatesButton Component Here
import React from 'react'

export default class CoordinatesButton extends React.Component{

    arrray = (event) => {
        return [event.clientX, event.clientY]
    }
    render(){
        return <button onClick={(e)=> this.props.onReceiveCoordinates(this.arrray(e))} type='button' />
    }
}
