export interface Hello {
  msg: string
}
export interface HelloComment {
  name: string
  comment: string
  feeling: string
}

export interface CommentTools {
  comments: Array<HelloComment>
  addComment: (comment: HelloComment) => void
}
