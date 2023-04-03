
import React from 'react'
import { IconType } from 'react-icons';
interface ButtonProps {
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    small?: boolean;
    icon?: IconType
}


const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    disabled,
    small,
    icon

}) => {
  return (
      <button className={`
        relative
        disabled:opacity-70
        disa
      `}>
          {label}
    </button>
    )
}

export default Button