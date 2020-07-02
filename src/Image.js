import React, { Component } from 'react'
import greece from "./images/greece.jpg"
export default class Image extends Component {
    render() {
        return (
            <div>
                <img src={greece} alt="mypic" width="100%" height="350px" />
            </div>
        )
    }
}
