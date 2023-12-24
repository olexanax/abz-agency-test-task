//styles
import styles from "./styles.module.sass"
//components
import Skeleton from "components/UI/Skeleton/Skeleton";
import ModalWindow from "components/UI/ModalWindow/ModalWindow";
//libs
import { toast } from 'sonner';
import { useEffect, useState, FC } from "react"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
//compoents
import Button from "components/UI/Button/Button"
import classNames from "classnames";
//types
import {
  type UserFormSchema,
  UserFormValidator
} from "lib/validators/userForm";
import { PositionsType } from "reduxFolder/api/positions/types";
//redux
import { usePostUserMutation, useLazyGetTokenQuery } from "reduxFolder/api/users/slice";
//utils
import scrollTo from "lib/utils/scrollTo";
//imagesi
import successBanner from "images/success-image.webp"


type Props = {
  positionsData?: PositionsType[]
  positionsError: boolean
  positionsLoading: boolean
}


const Form: FC<Props> = ({ positionsData, positionsError, positionsLoading }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<UserFormSchema>({
    resolver: zodResolver(UserFormValidator)
  })

  const [postUser, { isError: postUserError, isLoading: postUserLoading }] = usePostUserMutation();
  const [getToken, { isLoading: isTokenLoading, isError: tokenError }] = useLazyGetTokenQuery();

  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);
  const [succesBannerConfig, setSuccesBannerConfig] = useState({
    isOpen: false,
    wasPostReq: false
  })


  const onSubmit = async (data: UserFormSchema) => {
    const { name, email, phone, photo, position } = data
    const formData = new FormData();

    formData.append('position_id', position);
    formData.append("name", name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('photo', photo[0])

    try {
      const tokenResult = await getToken();

      postUser({
        formData,
        token: tokenResult?.data?.token || "errorToken"
      })
        .then(() => {
          reset()
          setSelectedFileName(null)
          setSuccesBannerConfig({
            isOpen: true,
            wasPostReq: true
          })
        })
        .catch(() => {
          toast('Oops, user creating was failed', {
            position: 'top-right',
            duration: 4000
          })
        });
    } catch (error) {
      console.error("Error getting token:", error);
      toast('Oops, user creating was failed', {
        position: 'top-right',
        duration: 4000
      })
    }
  }

  useEffect(() => {
    if (!succesBannerConfig.isOpen && succesBannerConfig.wasPostReq) {
      scrollTo("users")
      setSuccesBannerConfig({
        isOpen: false,
        wasPostReq: false
      })
    }
  }, [succesBannerConfig])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setSelectedFileName(file ? file.name : null);
  };

  const positionsMarkup = positionsData?.map((pos) => (
    <label key={pos.id} htmlFor={pos.id} className={styles.radio} >
      <input
        {...register("position")}
        type="radio"
        name="position"
        value={pos.id}
        id={pos.id}
      />
      {pos.name}
    </label>
  ))

  const positionsPreloader = positionsError || positionsLoading ?
    (new Array(4).fill(null)).map((_, i) => (
      <Skeleton key={i} style={{ height: "26px", width: "100%" }} />
    )) : null

  const submitLoading = postUserLoading || isTokenLoading

  useEffect(() => {
    if (postUserError || tokenError) {
      toast('Oops, something went wrong (positions)', {
        position: 'top-right',
        duration: 4000
      })
    }
  }, [postUserError, tokenError])


  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.inputBlock}>
          <input
            {...register("name", { required: true })}
            placeholder="Your name"
            className={classNames(styles.input, errors.name ? styles.errorInput : "")}
            type="text" />
          {errors.name && (
            <p className={styles.formItemError}>{errors.name.message}</p>
          )}
        </div>
        <div className={styles.inputBlock}>
          <input
            {...register("email", { required: true })}
            placeholder="Email"
            className={classNames(styles.input, errors.email ? styles.errorInput : "")}
            type="text" />
          {errors.email && (
            <p className={styles.formItemError}>{errors.email.message}</p>
          )}
        </div>
        <div className={styles.inputBlock}>
          <input
            {...register("phone", { required: true })}
            placeholder="Phone"
            className={classNames(styles.input, errors.phone ? styles.errorInput : "")}
            type="text" />
          <span className={styles.fieldTemplate}>+38 (XXX) XXX - XX - XX</span>
          {errors.phone && (
            <p className={styles.formItemError}>{errors.phone.message}</p>
          )}
        </div>
        <div className={classNames(styles.inputBlock, styles.radioBlock)}>
          <p className={styles.title}>Select your position</p>
          <div className={styles.radioBlock}>
            {positionsMarkup}
            {positionsPreloader}
          </div>
          {errors.position && (
            <p className={styles.formItemError}>{errors.position.message}</p>
          )}
        </div>
        <div className={classNames(styles.inputBlock)}>
          <div className={classNames(styles.fileUploader)}>
            <div className={classNames(styles.uploadButton, errors.photo ? styles.errorInput : "")} >
              Upload
              <input {...register("photo", { required: true, onChange: handleFileChange })} type="file" className={styles.fileInput} />
            </div>
            <p className={styles.fileName}>
              <span className={styles.placeholder}>
                {selectedFileName || "Upload your photo"}
              </span>
            </p>
          </div>
          {errors.photo && <p className={styles.formItemError}>{errors.photo.message?.toString()}</p>}
        </div>
        <Button isLoading={submitLoading} props={{ type: "submit" }} >
          Sign up
        </Button>
      </form>
      {
        succesBannerConfig.isOpen &&
        <ModalWindow
          title="User successfully registered"
          onClose={() => {
            setSuccesBannerConfig({
              isOpen: false,
              wasPostReq: true
            })
          }}
          image={successBanner}
        />
      }
    </>

  )
}

export default Form