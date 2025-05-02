import React from "react"
import { DialogTitle } from "../../../shared/ui/Dialog"
import { DialogHeader } from "../../../shared/ui/Dialog"
import { Textarea } from "../../../shared/ui"
import { DialogContent } from "../../../shared/ui/Dialog"
import { Dialog } from "../../../shared/ui/Dialog"
import { Button } from "../../../shared/ui"
import { NewComment } from "../../../entites/comment/model/types"

function CommentAddModal({
  showAddCommentDialog,
  setShowAddCommentDialog,
  newComment,
  setNewComment,
  addComment,
}: {
  showAddCommentDialog: boolean
  setShowAddCommentDialog: (showAddCommentDialog: boolean) => void
  newComment: NewComment
  setNewComment: (newComment: NewComment) => void
  addComment: () => void
}) {
  return (
    <Dialog open={showAddCommentDialog} onOpenChange={setShowAddCommentDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>새 댓글 추가</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Textarea
            placeholder="댓글 내용"
            value={newComment.body}
            onChange={(e) => setNewComment({ ...newComment, body: e.target.value })}
          />
          <Button onClick={addComment}>댓글 추가</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default CommentAddModal
