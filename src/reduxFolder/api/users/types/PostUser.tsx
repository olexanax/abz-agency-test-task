import { UserType } from ".";

export interface PostUserResponse extends UserType {
}

export interface PostUserData {
  name: string
  email: string
  phone: string
  position_id: string
  photo: File
}

export interface PostUserPayload {
  formData: FormData,
  token: string
}


