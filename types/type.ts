import { strict } from "assert"

export type TPropsFaq = {
    id: number,
    title: string,
    text: string,
    isOpenItem: boolean,
    toggleItem: (id: number) => void
}

export type TListProps = {
  date: string,
  id: number,
  imgUrl: string,
  title: string 
}

export type TProps = {
  title: string,
  list: TListProps[],
}

