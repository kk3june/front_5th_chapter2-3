import { setTotal } from "../../shared/model/appStore"

import { setPosts, setTags } from "../../entites/posts/model/store"

import { getPosts, getPostsTags, getPostTag } from "../../entites/posts/api"
import { getUsers } from "../../entites/users/api/api"
import { setLoading } from "../../shared/model/appStore"
import addAuthorToPosts from "../../entites/posts/lib/addAuthorToPost"
import { Post } from "../../entites/posts/types"

export const fetchPosts = async ({ limit, skip }: { limit: number; skip: number }) => {
  setLoading(true)

  try {
    const postsData = await getPosts({ limit, skip })
    const { users } = await getUsers()
    const postsWithAuthor = addAuthorToPosts(postsData.posts, users)

    setPosts(postsWithAuthor)
    setTotal(postsData.total)

    return {
      posts: postsWithAuthor,
      total: postsData.total,
    }
  } catch (error) {
    console.error("게시물 가져오기 오류:", error)
    throw error
  } finally {
    setLoading(false)
  }
}

export const fetchTags = async () => {
  try {
    const tags = await getPostsTags()
    setTags(tags)
  } catch (error) {
    console.error("태그 가져오기 오류:", error)
  }
}

export const fetchPostsByTag = async ({ limit, skip, tag }: { limit: number; skip: number; tag: string }) => {
  if (!tag || tag === "all") {
    fetchPosts({ limit, skip })
    return
  }
  setLoading(true)
  try {
    const [postsResponse, usersResponse] = await Promise.all([getPostTag(tag), getUsers()])

    const postsWithAuthor: Post[] = addAuthorToPosts(postsResponse.posts, usersResponse.users)

    setPosts(postsWithAuthor)
    setTotal(postsResponse.total)
  } catch (error) {
    console.error("태그별 게시물 가져오기 오류:", error)
  }
  setLoading(false)
}
