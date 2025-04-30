import { atom, getDefaultStore } from "jotai"

export const postsAtom = atom<Post[]>([])
export const tagsAtom = atom<string[]>([])

export const setPosts = (posts: Post[]) => getDefaultStore().set(postsAtom, posts)
export const setTags = (tags: string[]) => getDefaultStore().set(tagsAtom, tags)
