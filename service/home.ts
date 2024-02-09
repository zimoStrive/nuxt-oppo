import HttpRequest from "./index"

import type { ResultType } from "./index"
import type { IBanner, ICategory, INavBar } from "@/store/home"

export type IHomeInfoType = "oppo" | "onePlus" | "intelligent"

interface IHomeInfo {
  navbars?: INavBar[]
  banners?: IBanner[]
  categorys?: ICategory[]
}

export const getHomeInfo = (type: IHomeInfoType) => {
  return HttpRequest.get("/home/info", {
    type: type || "oppo",
  })
}

export const getHomeOnePlusInfo = () => {
  return HttpRequest.get<ResultType<IHomeInfo>>("/home/info", {
    type: "onePlus",
  })
}
export const getHomeIntelligentInfo = () => {
  return HttpRequest.get<ResultType<IHomeInfo>>("/home/info", {
    type: "intelligent",
  })
}
