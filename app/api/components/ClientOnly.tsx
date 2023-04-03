'use client'
import React, { Children, useEffect, useState } from 'react'

interface ClientOnlyProps {
  children: React.ReactNode
}

const ClientOnly: React.FC<ClientOnlyProps> = (
    {children}
) => {
    const [hasMounted, setMounted] = useState(false)
    useEffect(()=>{
        setMounted(true)
    }, [])

    if(!hasMounted){
        return null;
    }

  return (
    <div>{children}</div>
  )
}

export default ClientOnly