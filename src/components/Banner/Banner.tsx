//styles
import styles from "./styles.module.sass"
//libs
import classNames from "classnames"
import { motion } from "framer-motion";
//utlis
import scrollTo from "lib/utils/scrollTo"
//components
import Button from "components/UI/Button/Button"

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6 } },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.6 } },
};

const Banner = () => {

  const scrollToSection = (sectionId: string) => {
    scrollTo(sectionId)
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <motion.h1
          className={classNames(styles.sectionTitle)}
          initial="hidden"
          animate="visible"
          variants={titleVariants}
        >
          Test assignment for front-end developer
        </motion.h1>
        <motion.p
          className={styles.text}
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.
        </motion.p>
        <Button onClick={() => scrollToSection('users')}>
          Sign up
        </Button>
        <div className={styles.filter}></div>
      </div>
    </section>
  )
}

export default Banner