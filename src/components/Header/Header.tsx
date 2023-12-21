//images
import logo from "images/logo.svg"
//components
import Button from "components/UI/Button/Button"
//styels
import styles from "./styles.module.sass"

export const Header = () => {
  return (
    <header className={styles.header}>
      <img alt="logo" src={logo} />
      <nav className={styles.nav}>
        <Button>
          <a href="#users">
            Users
          </a>
        </Button>
        <Button>
          <a href="#sign-up">
            Sign up
          </a>
        </Button>
      </nav>
    </header>
  )
}
