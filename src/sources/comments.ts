import { reactive } from 'vue'
import { HelloComment, CommentTools } from '../types'

// Use reactive instead of ref when dealing with Array or Objects
export default function useComments(): CommentTools {
  const comments = reactive<Array<HelloComment>>([])
  const addComment = (comment: HelloComment) => {
    comments.push(comment)
  }

  return {
    comments,
    addComment,
  }
}
