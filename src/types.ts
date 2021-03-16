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

export interface VersusElement {
  src: string
  alt: string
  description: string
  versus: 0 | 1
}
