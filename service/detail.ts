import httpRequest from "./index"
import type { IProductDetail } from "@/store/home"
import type { ResultType } from "./index"
export interface IDetailInfo {
  id?: number
  title?: string
  productDetailss?: IProductDetail[]
}
export type IOppoType = "oppo" | "air" | "watch" | "tablet"

export const getOppoDetailInfo = (type: IOppoType) => {
  return httpRequest.get<ResultType<IDetailInfo[]>>("/oppoDetail", {
    type,
  })
}
