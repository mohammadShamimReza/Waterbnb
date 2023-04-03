'use client'
import React from 'react'
import Image from 'next/image'

const Avater = () => {
  return (
    <Image
    alt='Avater'
    height='30'
    width='30'
        className='rounded-full'
        src='/images/placeholder.jpg'

    />
    )
}

export default Avater