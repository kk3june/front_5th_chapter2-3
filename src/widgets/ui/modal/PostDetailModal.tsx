import React from "react"
import { DialogTitle } from "../../../shared/ui/Dialog"
import { DialogHeader } from "../../../shared/ui/Dialog"
import { DialogContent } from "../../../shared/ui/Dialog"
import { Dialog } from "../../../shared/ui/Dialog"
import highlightText from "../../../shared/lib/highlightText"
import { Post } from "../../../entites/post/model/types"

function PostDetailModal({
  showPostDetailDialog,
  setShowPostDetailDialog,
  selectedPost,
  searchQuery,
  renderComments,
}: {
  showPostDetailDialog: boolean
  setShowPostDetailDialog: (showPostDetailDialog: boolean) => void
  selectedPost: Post
  searchQuery: string
  renderComments: (id: number) => React.ReactNode
}) {
  return (
    <Dialog open={showPostDetailDialog} onOpenChange={setShowPostDetailDialog}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>{highlightText(selectedPost?.title, searchQuery)}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p>{highlightText(selectedPost?.body, searchQuery)}</p>
          {renderComments(selectedPost?.id)}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default PostDetailModal
