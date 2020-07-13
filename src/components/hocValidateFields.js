import React, { Component } from 'react'

const hocValidateFields = (WrappedComponent)=> {

class HocValidateFields extends Component {
    render() {
        return (
            <WrappedComponent ></WrappedComponent>
        )
    }

}

    
return HocValidateFields
}

export default hocValidateFields
