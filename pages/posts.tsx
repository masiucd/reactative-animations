import Head from "next/head"
import React from "react"
import { Posts } from "@components/posts/posts"
import { NextPage } from "next"
import Title from "@components/elements/title"
import { Button } from "@styles/button"
import { useToggle } from "@hooks/toggle"
import { Drawer } from "@components/animated/drawer"
import { useScrollY } from "@hooks/scroll-y"
import styled from "@emotion/styled"

interface BtnProps {
  y: number
}

const Btn = styled(Button)<BtnProps>`
  ${({ y }) =>
    y >= 130
      ? `
    position: fixed;
    background-color: var(--textColor);
    color: var(--white);
    bottom: 6rem;
    right: 2rem;
    z-index:12;
      
  `
      : `
    position: static;
  `};
`

const PostsPage: NextPage = () => {
  const { on: isActive, onToFalse: isNotActive, toggle } = useToggle()

  const { y } = useScrollY()

  return (
    <>
      <Head>
        <title>posts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title mainTitle="Blog posts" />
      <Btn y={y} onClick={toggle}>
        {isActive ? "close drawer" : "show drawer"}
      </Btn>

      <Drawer isActive={isActive} isNotActive={isNotActive} toggle={toggle}>
        <p>Children goes in here</p>
      </Drawer>

      <Posts />
    </>
  )
}
export default PostsPage
