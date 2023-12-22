//styles
import styles from "./styles.module.sass"
//types
import { UserType } from "types"
//compoents
import UserCard from "./UserCard/UserCard"
import Button from "components/UI/Button/Button"

const USERS: Partial<UserType>[] = [
  {
    id: "1",
    name: "Takamaru Ayako Jurrien",
    email: "Takamuru@gmail.com",
    phone: "+38 (098) 278 90 24",
    position: "Lead Independent Director ",
    photo: "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
  },
  {
    id: "2",
    name: "Takamaru Ayako Jurrien",
    email: "Takamuru@gmail.com",
    phone: "+38 (098) 278 90 24",
    position: "Lead Independent Director ",
    photo: "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
  },
  {
    id: "3",
    name: "Takamaru Ayako Jurrien",
    email: "Takamuru@gmail.com",
    phone: "+38 (098) 278 90 24",
    position: "Lead Independent Director ",
    photo: "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
  },
  {
    id: "4",
    name: "Takamaru Ayako Jurrien",
    email: "Takamuru@gmail.com",
    phone: "+38 (098) 278 90 24",
    position: "Lead Independent Director ",
    photo: "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
  },
  {
    id: "5",
    name: "Takamaru Ayako Jurrien",
    email: "Takamuru@gmail.com",
    phone: "+38 (098) 278 90 24",
    position: "Lead Independent Director ",
    photo: "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
  },
  {
    id: "6",
    name: "Takamaru Ayako Jurrien",
    email: "Takamuru@gmail.com",
    phone: "+38 (098) 278 90 24",
    position: "Lead Independent Director ",
    photo: "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
  }
]

const UsersBlock = () => {

  const onLocadMore = () => console.log("more")
  return (
    <section id="users" className={styles.container}>
      <h2 className={styles.sectionTitle}>
        Working with GET request
      </h2>
      <div className={styles.usersList}>
        {
          USERS.map((user) => <UserCard key={user.id} {...user} />)
        }
      </div>
      <Button onClick={onLocadMore}>
        Show more
      </Button>
    </section>
  )
}

export default UsersBlock