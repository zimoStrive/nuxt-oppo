import HttpRequest from "./index"

export type IHomeInfoType = "oppo" | "onePlus" | "intelligent"

export const getHomeInfo = (type: IHomeInfoType) => {
  return HttpRequest.get("/home/info", {
    type: type || "oppo",
  })
}
