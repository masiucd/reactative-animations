import Head from "next/head"
import React from "react"
import { Posts } from "@components/posts/posts"
import { NextPage } from "next"
import Title from "@components/elements/title"
import { Button } from "@styles/button"
import { useToggle } from "@hooks/toggle"
import { Drawer } from "@components/animated/drawer"

const PostsPage: NextPage = () => {
  const { on: isActive, onToFalse: isNotActive, toggle } = useToggle()
  return (
    <>
      <Head>
        <title>posts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title mainTitle="Blog posts" />
      <Button onClick={toggle}>Open Drawer</Button>

      <Drawer isActive={isActive} isNotActive={isNotActive} toggle={toggle}>
        <p>Children goes in here</p>
      </Drawer>

      <Posts />
    </>
  )
}
export default PostsPage
