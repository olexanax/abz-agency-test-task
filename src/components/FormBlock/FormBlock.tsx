//styles
import styles from "./styles.module.sass"
//components
import Form from "./Form/Form";
//libs
import { toast } from 'sonner';
import { useEffect } from "react"
import { motion } from "framer-motion";
//redux
import { useGetPositionsQuery } from "reduxFolder/api/positions/slice";

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6 } },
};

const FormBlock = () => {
  const { data: positionsData, isError: positionsError, isLoading: positionsLoading } = useGetPositionsQuery({})

  useEffect(() => {
    if (positionsError) {
      toast('Oops, something went wrong (positions)', {
        position: 'top-right',
        duration: 4000
      })
    }

  }, [positionsError])


  return (
    <section id="sign-up" className={styles.container}>
      <motion.h2
        initial="hidden"
        animate="visible"
        variants={titleVariants}
        className={styles.sectionTitle}>
        Working with POST request
      </motion.h2>
      <Form
        positionsData={positionsData?.positions}
        {...{ positionsError, positionsLoading }} />
    </section >
  )
}

export default FormBlock