import { Tag } from "../../entites/posts/types"
import { getPostsByTag } from "../../features/posts/model"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../shared/ui/Select"

interface Props {
  selectedTag: string
  setSelectedTag: (tag: string) => void
  updateURL: () => void
  limit: number
  skip: number
  tags: Tag[]
}
function TagSelectBox({ selectedTag, setSelectedTag, updateURL, tags, limit, skip }: Props) {
  return (
    <Select
      value={selectedTag}
      onValueChange={(value) => {
        setSelectedTag(value)
        getPostsByTag({ limit, skip, tag: value })
        updateURL()
      }}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="태그 선택" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">모든 태그</SelectItem>
        {tags.map((tag) => (
          <SelectItem key={tag.url} value={tag.slug}>
            {tag.slug}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default TagSelectBox
