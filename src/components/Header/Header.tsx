//images
import logo from "images/logo.svg"
//components
import Button from "components/UI/Button/Button"
//utlis
import scrollTo from "lib/utils/scrollTo"
//styels
import styles from "./styles.module.sass"

export const Header = () => {

  const scrollToSection = (sectionId: string) => {
    scrollTo(sectionId)
  };
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <img alt="logo" src={logo} />
        <nav className={styles.nav}>
          <Button onClick={() => scrollToSection('users')}>
            Users
          </Button>
          <Button onClick={() => scrollToSection('sign-up')}>
            Sign up
          </Button>
        </nav>
      </div>
    </header>
  )
}
