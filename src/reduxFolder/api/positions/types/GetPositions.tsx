import { PositionsType } from ".";

export interface GetPositionsResponse {
  "success": boolean,
  "positions": PositionsType[]
}

export interface GetPositionsQueryArgs {
  page: number;
  offset: number
  count: number
}
