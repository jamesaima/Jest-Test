// hello.js

import React from 'react'

function Hello(props) {
    return (
        <>
            {
                <h1>Test Page</h1>
            }
            {
                props.name &&
                <h1 aria-label='page-header'>Hello, {props.name}!</h1>
            }
            {
                !props.name &&
                <span>Hey, stranger</span>
            }
        </>
    )
}

export default Hello



// export default function Hello(props) {
//     if (props.name) {
//         return
//         <>
//             <>
//                 <h1>Hello, {props.name}!</h1>;
//             </>
//     } else {
//         return <span>Hey, stranger</span>;
//     }
// }