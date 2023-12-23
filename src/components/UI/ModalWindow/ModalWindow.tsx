import { FC, useEffect } from "react";
import { motion } from "framer-motion";
//styles
import styles from "./styles.module.sass";
import classNames from "classnames";
//images

type Props = {
  title: string;
  image: string;
  onClose: () => void;
};

const ModalWindow: FC<Props> = ({
  title,
  image,
  onClose,
}) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    document.documentElement.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "unset";
      document.documentElement.style.overflowY = "unset";
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={styles.overlay}
      onClick={onClose}
    >
      <div className={styles.container}>
        <div onClick={onClose} className={styles.closeIcon}>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
            <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
          </svg>
        </div>
        <h2 className={classNames(styles.title)}>
          {title}
        </h2>
        {<img className={styles.banner} alt={""} src={image} />}
      </div>
    </motion.div>
  );
};

export default ModalWindow;
