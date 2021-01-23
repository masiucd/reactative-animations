import Head from "next/head"
import React from "react"
import { Posts } from "@components/posts/posts"
import { NextPage } from "next"

const PostsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>posts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Posts />
    </>
  )
}
export default PostsPage
