import { atom, getDefaultStore } from "jotai"

export const totalAtom = atom<number>(0)
export const loadingAtom = atom<boolean>(false)

export const setLoading = (loading: boolean) => getDefaultStore().set(loadingAtom, loading)
export const setTotal = (total: number) => getDefaultStore().set(totalAtom, total)
