import React from 'react'

interface IButtonProps {
  title?: string
}

export const Button = ({ title = 'Local Button' }: IButtonProps) => {
  return <button>{title}</button>
}
