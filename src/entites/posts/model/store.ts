import { atom, getDefaultStore } from "jotai"
import { Post, Tag } from "../types"

export const postsAtom = atom<Post[]>([])
export const tagsAtom = atom<Tag[]>([])

export const setPosts = (posts: Post[]) => getDefaultStore().set(postsAtom, posts)
export const setTags = (tags: Tag[]) => getDefaultStore().set(tagsAtom, tags)
