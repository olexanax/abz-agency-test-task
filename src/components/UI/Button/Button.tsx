//libs
import { FC, ReactNode } from 'react'
import classNames from 'classnames'
//styles
import styles from "./styles.module.sass"

interface Props {
  children: ReactNode,
  disabled?: boolean,
  onClick?: () => void,
  props?: { [key: string]: string | number | boolean }
}


const Button: FC<Props> = ({ children, disabled, onClick, props }) => {
  return (
    <button {...props} onClick={onClick} className={classNames(styles.button, disabled ? styles.disabled : '')}>
      {children}
    </button>
  )
}

export default Button