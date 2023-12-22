//styles
import styles from "./styles.module.sass"
import global from "styles/global.sass"
//libs
import classNames from "classnames"
//components
import Button from "components/UI/Button/Button"

const Banner = () => {
  return (
    <section className={styles.container}>
      <h1 className={classNames(styles.sectionTitle, global.title)}>
        Test assignment for front-end developer
      </h1>
      <p className={styles.text}>
        What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.
      </p>
      <Button>
        <a className={styles.link} href="#sign-up">
          Sign up
        </a>
      </Button>
      <div className={styles.filter}></div>
    </section>
  )
}

export default Banner