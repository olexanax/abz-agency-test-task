//styles
import styles from "./styles.module.sass"
//compoents
import UserCard from "./UserCard/UserCard"
import Button from "components/UI/Button/Button"
import Skeleton from "components/UI/Skeleton/Skeleton"
//libs
import { toast } from 'sonner';
import { useEffect, useState } from "react"
import { motion } from "framer-motion";
//redux
import { useGetUsersQuery } from "reduxFolder/api/users/slice"

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6 } },
};

const UsersBlock = () => {
  const [page, setPage] = useState(1)
  const { data, error, isLoading, isFetching } = useGetUsersQuery({ page: 1, count: page * 6 })

  const preloader = isLoading || error ?
    (new Array(6).fill(null).map((_, i) => (
      <Skeleton key={i} className={styles.skeletonCard}>
        <Skeleton className={styles.skeletonImage} />
        <Skeleton className={styles.skeletonName} />
        <Skeleton className={styles.skeletonData} />
      </Skeleton>
    )))
    : null

  const content = data?.users && !error && !isLoading ?
    data?.users.map((user) => <UserCard key={user.id} {...user} />)
    : null

  useEffect(() => {
    if (error) {
      toast('Oops, something went wrong (users)', {
        position: 'top-right',
        duration: 4000
      })
    }
  }, [error])


  return (
    <section id="users" className={styles.container}>
      <motion.h2
        initial="hidden"
        animate="visible"
        variants={titleVariants}
        className={styles.sectionTitle}>
        Working with GET request
      </motion.h2>
      <div className={styles.usersList}>
        {preloader}
        {content}
      </div>
      {
        (data && data?.total_users > data?.users.length) &&
        <Button disabled={isFetching} onClick={() => setPage(page + 1)}>
          Show more
        </Button>
      }
    </section>
  )
}

export default UsersBlock