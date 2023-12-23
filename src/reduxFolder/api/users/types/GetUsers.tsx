import { UserType } from ".";

export interface GetUsersResponse {
  "success": boolean,
  "page": number,
  "total_pages": number,
  "total_users": number,
  "count": number,
  "links": {
    "next_url": null | string
    "prev_url": null | string
  },
  "users": UserType[]
}

export interface GetUsersQueryArgs {
  page: number;
  offset: number
  count: number
}
