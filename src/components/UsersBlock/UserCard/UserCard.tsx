//styles
import styles from "./styles.module.sass"
//types
import { UserType } from "reduxFolder/api/users/types"
//libs
import { motion } from "framer-motion"
import { FC } from "react"
//images
import userPlaceholder from "images/userPlaceholder.svg"

const variants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
    }
  },
};

const UserCard: FC<Partial<UserType>> = ({ phone, photo, email, name, position }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={variants}
      viewport={{ once: true, amount: 0.8 }}
      className={styles.card}>
      <img alt={name} src={photo || userPlaceholder} className={styles.image} />
      <h6 className={styles.name}>
        {name}
      </h6>
      <div className={styles.dataBlock}>
        <p className={styles.position}>
          {position}
        </p>
        <p className={styles.email}>
          {email}
        </p>
        <p className={styles.phone}>
          {phone}
        </p>
      </div>
    </motion.div>
  )
}

export default UserCard