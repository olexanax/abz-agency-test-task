//styles
import styles from "./styles.module.sass"
//types
//libs
import { useForm } from "react-hook-form";
//compoents
import Button from "components/UI/Button/Button"
import classNames from "classnames";

type Inputs = {
  name: string
  email: string
  phone: string
  position: string
  photo: File
}


const FormBlock = () => {
  const { register, handleSubmit, formState: { errors }, } = useForm<Inputs>();

  const onSubmit = (data: Inputs) => {
    // Обробка подання даних
    console.log(data);
  };

  return (
    <section id="sign-up" className={styles.container}>
      <h2 className={styles.sectionTitle}>
        Working with POST request
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.inputBlock}>
          <input
            {...register("name", { required: true })}
            placeholder="Your name"
            className={styles.input}
            type="text" />
        </div>
        <div className={styles.inputBlock}>
          <input
            {...register("email", { required: true })}
            placeholder="Email"
            className={styles.input}
            type="text" />
        </div>
        <div className={styles.inputBlock}>
          <input
            {...register("phone", { required: true })}
            placeholder="Phone"
            className={styles.input}
            type="text" />
          <span className={styles.fieldTemplate}>+38 (XXX) XXX - XX - XX</span>
        </div>
        <div className={classNames(styles.inputBlock, styles.radioBlock)}>
          <p className={styles.title}>Select your position</p>
          <div className={styles.radioBlock}>
            <label htmlFor="Frontend developer" className={styles.radio} >
              <input
                {...register("position")}
                type="radio"
                name="weather"
                value="rain"
                id="Frontend developer"
              />
              Frontend developer
            </label>
            <label htmlFor="Backend developer" className={styles.radio} >
              <input
                {...register("position")}
                type="radio"
                name="weather"
                value="rain"
                id="Backend developer"
              />
              Backend developer
            </label>
            <label htmlFor="Designer" className={styles.radio} >
              <input
                {...register("position")}
                type="radio"
                name="weather"
                value="rain"
                id="Designer"
              />
              Designer
            </label>
          </div>
        </div>
        <div className={classNames(styles.fileUploader)}>
          <div className={styles.uploadButton}>
            Upload
            <input    {...register("photo", { required: true })} type="file" className={styles.fileInput} />
          </div>
          <p className={styles.fileName}>
            <span className={styles.placeholder}>
              Upload your photo
            </span>
          </p>
        </div>
        <Button props={{ type: "submit" }} >
          Sign up
        </Button>
      </form>
    </section >
  )
}

export default FormBlock