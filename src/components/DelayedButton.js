// Code DelayedButton Component Here
import React from 'react'

export default class DelayedButton extends React.Component{
    callfn =(event) => {
        event.persist()
        return (event) => setTimeout(this.props.onDelayedClick, this.props.delay)
        // return this.props.onDelayedClick
    } 

    somefn = (event) => {
        event.persist()
        return ()=> this.props.onDelayedClick(event)
    }
    render(){
        
        // return <button onClick={(event)=>setTimeout(this.props.onDelayedClick, this.props.delay)} type='button' />
        // return <button onClick={this.callfn} type='button' />
        // return <button onClick={event=>setTimeout(this.callfn(event), this.props.delay)} type='button' />
        // return <button onClick={event => setTimeout(()=>this.props.onDelayedClick(event), this.props.delay)}/>
        return <button onClick={event => setTimeout(this.somefn(event), this.props.delay)}/>

    }



}