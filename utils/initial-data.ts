import { FormInput, NavLink } from "./types"

export const navLinks: Array<NavLink> = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "gallery",
    path: "/gallery",
  },
  {
    name: "posts",
    path: "/posts",
  },
]

export const signInFormData: FormInput[] = [
  {
    id: "email-input",
    type: "email",
    name: "email",
  },
  {
    id: "password-input",
    type: "text",
    name: "username",
  },
]
export const registerFormData: FormInput[] = [
  {
    id: "username-input",
    type: "text",
    name: "username",
  },
  {
    id: "email-input",
    type: "email",
    name: "email",
  },
  {
    id: "password-input",
    type: "password",
    name: "password",
  },
]
