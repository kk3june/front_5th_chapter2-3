import { atom, getDefaultStore } from "jotai"
import { DIALOG_TYPE } from "./types"

export const totalAtom = atom<number>(0)
export const loadingAtom = atom<boolean>(false)
export const dialogAtom = atom<DIALOG_TYPE | null>(null)

export const setLoading = (loading: boolean) => getDefaultStore().set(loadingAtom, loading)
export const setTotal = (total: number) => getDefaultStore().set(totalAtom, total)
export const setDialog = (dialog: DIALOG_TYPE | null) => getDefaultStore().set(dialogAtom, dialog)
export const closeDialog = () => getDefaultStore().set(dialogAtom, null)
