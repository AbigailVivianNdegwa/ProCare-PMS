import React from 'react'

const page = ({params}) => {
    return (
        <div>
            <h1>Hello {params.name} </h1>
        </div>
    )
}

export default page