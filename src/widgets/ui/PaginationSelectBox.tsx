import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../shared/ui/Select"

interface Props {
  limit: number
  setLimit: (limit: number) => void
}
function PaginationSelectBox({ limit, setLimit }: Props) {
  return (
    <Select value={limit.toString()} onValueChange={(value) => setLimit(Number(value))}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="10" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="10">10</SelectItem>
        <SelectItem value="20">20</SelectItem>
        <SelectItem value="30">30</SelectItem>
      </SelectContent>
    </Select>
  )
}

export default PaginationSelectBox
