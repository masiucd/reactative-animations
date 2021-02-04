export interface Post {
  id: number
  title: string
  text: string
}

export type ScrollPos = "idle" | "up" | "down"
export interface Offset {
  height: number
  top: number
}

export interface NavLink {
  name: string
  path: string
}
