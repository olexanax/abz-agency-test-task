//images
import logo from "images/logo.svg"
//components
import Button from "components/UI/Button/Button"
//styels
import styles from "./styles.module.sass"

export const Header = () => {

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
      });
    }
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
