import { setTotal } from "../../shared/model/appStore"

import { setPosts, setTags } from "../../entites/post/model/store"

import { fetchPostBySearchQuery, fetchPosts, fetchPostsTags, fetchPostTag } from "../../entites/post/api"
import addAuthorToPosts from "../../entites/post/lib/addAuthorToPost"
import { Post } from "../../entites/post/model/types"
import { getUsers } from "../../entites/user/api"
import { setLoading } from "../../shared/model/appStore"

export const getPosts = async ({ limit, skip }: { limit: number; skip: number }) => {
  setLoading(true)

  try {
    const postsData = await fetchPosts({ limit, skip })
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

export const getTags = async () => {
  try {
    const tags = await fetchPostsTags()
    setTags(tags)
  } catch (error) {
    console.error("태그 가져오기 오류:", error)
  }
}

export const getPostsByTag = async ({ limit, skip, tag }: { limit: number; skip: number; tag: string }) => {
  if (!tag || tag === "all") {
    fetchPosts({ limit, skip })
    return
  }
  setLoading(true)
  try {
    const [postsResponse, usersResponse] = await Promise.all([fetchPostTag(tag), getUsers()])

    const postsWithAuthor: Post[] = addAuthorToPosts(postsResponse.posts, usersResponse.users)

    setPosts(postsWithAuthor)
    setTotal(postsResponse.total)
  } catch (error) {
    console.error("태그별 게시물 가져오기 오류:", error)
  }
  setLoading(false)
}

export const searchPosts = async ({
  limit,
  skip,
  searchQuery,
}: {
  limit: number
  skip: number
  searchQuery: string
}) => {
  if (!searchQuery) {
    fetchPosts({ limit, skip })
    return
  }
  setLoading(true)
  try {
    const posts = await fetchPostBySearchQuery(searchQuery)
    setPosts(posts.posts)
    setTotal(posts.total)
  } catch (error) {
    console.error("게시물 검색 오류:", error)
  }
  setLoading(false)
}
