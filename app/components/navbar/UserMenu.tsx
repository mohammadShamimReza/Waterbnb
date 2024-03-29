'use client'
import React, { useCallback, useState } from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import Avater from '../Avater'
import MenuItem from './MenuItem'
import useRegisterModal from '@/app/hooks/useRegisterModal'

const UserMenu = () => {
  const registerModal = useRegisterModal();
  const [isOpen, setIsOpen] = useState(false)
  console.log(isOpen)
  const toggleOpen = useCallback(() => {
    
    setIsOpen((value) => !value);
  }, [])
  return (
    <div className='relative'>
      <div className="flex flex-row items-center gap-3">
          <div className="
            hidden
            md:block
            text-sm
            font-semibold
            py-3
            px-4
            rounded-full
            hover:bg-neutral-100
            transition
            cursor-pointer
          "
          onClick={() => {}}
          >
            Waterbnb you hone
          </div>
          <div className="
            p-4
            md:py-1
            md:px-2
            border-[1px]
            border-netural-200
            flex
            flex-row
            items-center
            gap-3
            rounded-full
            cursor-pointer
            hover:shadow-md
            transition
          "
          onClick={toggleOpen}

          >
            <AiOutlineMenu />
            <div className="hidden md:block">
            <Avater />
          </div>
          </div>
          
      </div>
      {
        isOpen && (
          <div className="
          absolute 
          rounded-xl s
          hadow-md 
          w-[40vw] 
          md:w-3/4 
          bg-white 
          overflow-hidden 
          right-0 
          top-12 
          text-sm">
            <div className="flex flex-col cursor-pointer">
              <>
                <MenuItem onClick={() => {}} label="Login" />
              </>
            </div>
            <div className="flex flex-col cursor-pointer">
              <>
                <MenuItem onClick={registerModal.onOpen} label="Signup" />
              </>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default UserMenu