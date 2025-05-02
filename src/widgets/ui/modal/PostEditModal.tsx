import { DialogTitle } from "../../../shared/ui/Dialog"
import { DialogHeader } from "../../../shared/ui/Dialog"
import { Input } from "../../../shared/ui/Input"
import { Textarea } from "../../../shared/ui"
import { DialogContent } from "../../../shared/ui/Dialog"

import { Dialog } from "../../../shared/ui/Dialog"
import { Button } from "../../../shared/ui"
import { Post } from "../../../entites/post/model/types"

function PostEditModal({
  showEditDialog,
  setShowEditDialog,
  selectedPost,
  setSelectedPost,
  updatePost,
}: {
  showEditDialog: boolean
  setShowEditDialog: (showEditDialog: boolean) => void
  selectedPost: Post
  setSelectedPost: (selectedPost: Post) => void
  updatePost: () => void
}) {
  return (
    <Dialog open={showEditDialog} onOpenChange={setShowEditDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>게시물 수정</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input
            placeholder="제목"
            value={selectedPost?.title || ""}
            onChange={(e) => selectedPost && setSelectedPost({ ...selectedPost, title: e.target.value })}
          />
          <Textarea
            rows={15}
            placeholder="내용"
            value={selectedPost?.body || ""}
            onChange={(e) => selectedPost && setSelectedPost({ ...selectedPost, body: e.target.value })}
          />
          <Button onClick={updatePost}>게시물 업데이트</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default PostEditModal
