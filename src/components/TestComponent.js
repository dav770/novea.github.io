// import React from 'react'
// import { useDrag } from 'react-dnd'
// // import { ItemTypes } from './Constants'

// function TestComponent({ isDragging, text }) {
//     const [{ opacity }, dragRef] = useDrag({
//       item: { type: ItemTypes.CARD, text },
//       collect: monitor => ({
//         opacity: monitor.isDragging() ? 0.5 : 1,
//       }),
//     })
//     return (
//       <div ref={dragRef} style={{ opacity }}>
//         {text}
//       </div>
//     )
//     }
// export default TestComponent
import React, { Component } from 'react'

export class TestComponent extends Component {
constructor(props) {
    super(props)

    this.state = {
         name:'toto'
    }
}
// let mydip = 

    render() {


        return (
            <div>
                {console.log('ff',this.state.name)}
            </div>
        )
    }
}

export default TestComponent

