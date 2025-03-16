import React from 'react'
import sample_image from '../../assets/logo.png'
import Image from 'next/image'
const page = () => {
    return (
        <div>
            We will show the image here
            <Image src= {sample_image} alt = "sample image" />
            <Image src= {sample_image} alt = "sample image" width ={500}/>
        </div>
    )
} 

export default page 