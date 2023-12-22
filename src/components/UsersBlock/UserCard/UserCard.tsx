//styles
import styles from "./styles.module.sass"
//types
import { UserType } from "types"
//libs
import { FC } from "react"



const UserCard: FC<Partial<UserType>> = ({ phone, photo, email, name, position }) => {
  return (
    <div className={styles.card}>
      <img alt={name} src={photo} className={styles.image} />
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
    </div>
  )
}

export default UserCard