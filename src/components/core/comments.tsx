import { useState } from 'react'
import {
  ChevronUp,
  ChevronDown,
  Trash2,
  Edit2,
  Reply,
  MessageSquare,
  Smile,
} from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'

interface Comment {
  id: number
  author: string
  avatar: string
  timeAgo: string
  content: string
  votes: number
  isAuthor?: boolean
  replies?: Comment[]
}

interface CommentActionsProps {
  onDelete: () => void
  onEdit: () => void
  onReply: () => void
  isAuthor?: boolean
}

interface CommentFormProps {
  onSubmit: (text: string) => void
  initialValue?: string
  buttonText?: string
  onCancel?: (() => void) | null
}

interface CommentProps {
  comment: Comment
  level?: number
  currentUser: string
  onDelete: (commentId: number) => void
  onUpdate: (commentId: number, updatedComment: Comment) => void
  onReply: (parentId: number, newReply: Comment) => void
}

type VoteDirection = 'up' | 'down' | null

const CommentActions: React.FC<CommentActionsProps> = ({
  onDelete,
  onEdit,
  onReply,
  isAuthor,
}) => (
  <div className='flex gap-4 mt-3'>
    <button
      onClick={onReply}
      className='flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors duration-200'
    >
      <Reply size={16} />
      <span className='text-sm font-medium'>Reply</span>
    </button>
    {isAuthor && (
      <>
        <button
          onClick={onDelete}
          className='flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors duration-200'
        >
          <Trash2 size={16} />
          <span className='text-sm font-medium'>Delete</span>
        </button>
        <button
          onClick={onEdit}
          className='flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors duration-200'
        >
          <Edit2 size={16} />
          <span className='text-sm font-medium'>Edit</span>
        </button>
      </>
    )}
  </div>
)

const CommentForm: React.FC<CommentFormProps> = ({
  onSubmit,
  initialValue = '',
  buttonText = 'Send',
  onCancel = null,
}) => {
  const [text, setText] = useState(initialValue)
  const [cursorPosition, setCursorPosition] = useState(0)

  const handleEmojiSelect = (emoji: any) => {
    const newText =
      text.slice(0, cursorPosition) + emoji.native + text.slice(cursorPosition)
    setText(newText)
  }

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
    setCursorPosition(e.target.selectionStart)
  }

  const handleTextareaClick = (e: React.MouseEvent<HTMLTextAreaElement>) => {
    const textarea = e.target as HTMLTextAreaElement
    setCursorPosition(textarea.selectionStart)
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        if (text.trim()) {
          onSubmit(text)
          setText('')
        }
      }}
      className='mt-4'
    >
      <div className='relative'>
        <textarea
          value={text}
          onChange={handleTextareaChange}
          onClick={handleTextareaClick}
          onKeyUp={(e) => setCursorPosition(e.currentTarget.selectionStart)}
          placeholder='Add a comment...'
          className='w-full p-4 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 
                   bg-gray-50 hover:bg-white transition-colors duration-200'
          rows={3}
        />
        <Popover>
          <PopoverTrigger asChild>
            <button
              type='button'
              className='absolute right-4 bottom-4 p-2 text-gray-500 hover:text-gray-700 
                       hover:bg-gray-100 rounded-full transition-colors duration-200'
            >
              <Smile size={20} />
            </button>
          </PopoverTrigger>
          <PopoverContent className='w-full p-0 border-none' align='end'>
            <Picker
              data={data}
              onEmojiSelect={handleEmojiSelect}
              theme='light'
              previewPosition='none'
              skinTonePosition='search'
              navPosition='bottom'
            />
          </PopoverContent>
        </Popover>
      </div>
      <div className='flex justify-end gap-3 mt-3'>
        {onCancel && (
          <button
            type='button'
            onClick={onCancel}
            className='px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors duration-200'
          >
            Cancel
          </button>
        )}
        <button
          type='submit'
          disabled={!text.trim()}
          className='bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 
                   transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
        >
          {buttonText}
        </button>
      </div>
    </form>
  )
}

const Comment: React.FC<CommentProps> = ({
  comment,
  level = 0,
  currentUser,
  onDelete,
  onUpdate,
  onReply,
}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [showReplyForm, setShowReplyForm] = useState(false)
  const [votes, setVotes] = useState(comment.votes)
  const [hasVoted, setHasVoted] = useState<VoteDirection>(null)
  const [showDeleteAlert, setShowDeleteAlert] = useState(false)

  const handleVote = (direction: VoteDirection) => {
    if (hasVoted === direction) {
      setVotes(votes - (direction === 'up' ? 1 : -1))
      setHasVoted(null)
    } else {
      setVotes(
        votes +
          (direction === 'up'
            ? hasVoted === 'down'
              ? 2
              : 1
            : hasVoted === 'up'
            ? -2
            : -1)
      )
      setHasVoted(direction)
    }
  }

  const handleEdit = (newText: string) => {
    onUpdate(comment.id, { ...comment, content: newText })
    setIsEditing(false)
  }

  const handleDelete = () => {
    setShowDeleteAlert(true)
  }

  const confirmDelete = () => {
    onDelete(comment.id)
    setShowDeleteAlert(false)
  }

  const handleReply = (text: string) => {
    onReply(comment.id, {
      id: Date.now(),
      author: currentUser,
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs1cjbpch-xmHoTuFriulZEniFUjZgSRTd5w&s',
      timeAgo: 'just now',
      content: text,
      votes: 0,
      isAuthor: true,
      replies: [],
    })
    setShowReplyForm(false)
  }

  return (
    <div className={`ml-${level > 0 ? '12' : '0'} mb-6`}>
      {showDeleteAlert && (
        <Alert className='mb-4 bg-red-50 border-red-200'>
          <AlertDescription className='flex justify-between items-center'>
            <span>Are you sure you want to delete this comment?</span>
            <div className='flex gap-3'>
              <button
                onClick={() => setShowDeleteAlert(false)}
                className='px-4 py-2 text-gray-600 hover:bg-red-100 rounded-lg transition-colors duration-200'
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className='px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200'
              >
                Delete
              </button>
            </div>
          </AlertDescription>
        </Alert>
      )}

      <div className='flex gap-4'>
        <div className='flex flex-col items-center bg-gray-50 rounded-lg px-2 py-1 h-min'>
          <button
            onClick={() => handleVote('up')}
            className={`p-1 rounded transition-colors duration-200 ${
              hasVoted === 'up'
                ? 'text-blue-600'
                : 'text-gray-500 hover:text-blue-600'
            }`}
          >
            <ChevronUp size={20} />
          </button>
          <span className='text-gray-700 font-semibold'>{votes}</span>
          <button
            onClick={() => handleVote('down')}
            className={`p-1 rounded transition-colors duration-200 ${
              hasVoted === 'down'
                ? 'text-red-600'
                : 'text-gray-500 hover:text-red-600'
            }`}
          >
            <ChevronDown size={20} />
          </button>
        </div>

        <div className='flex-1 bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200'>
          <div className='flex items-center gap-3 mb-4'>
            <img
              src={comment.avatar}
              alt={comment.author}
              className='w-10 h-10 rounded-full ring-2 ring-gray-100'
            />
            <div className='flex items-center gap-2'>
              <span className='font-semibold text-gray-800'>
                {comment.author}
              </span>
              {comment.isAuthor && (
                <span className='bg-blue-100 text-blue-700 px-2 py-0.5 text-sm rounded-full font-medium'>
                  you
                </span>
              )}
              <span className='text-gray-500 text-sm'>{comment.timeAgo}</span>
            </div>
          </div>

          {isEditing ? (
            <CommentForm
              onSubmit={handleEdit}
              initialValue={comment.content}
              buttonText='Update'
              onCancel={() => setIsEditing(false)}
            />
          ) : (
            <>
              <p className='text-gray-700 leading-relaxed'>{comment.content}</p>
              <CommentActions
                isAuthor={comment.isAuthor}
                onReply={() => setShowReplyForm(!showReplyForm)}
                onEdit={() => setIsEditing(true)}
                onDelete={handleDelete}
              />
            </>
          )}

          {showReplyForm && (
            <CommentForm
              onSubmit={handleReply}
              buttonText='Reply'
              onCancel={() => setShowReplyForm(false)}
            />
          )}
        </div>
      </div>

      {comment.replies?.length! > 0 && (
        <div className='border-l-2 border-gray-100 ml-6 pl-6 mt-4'>
          {comment.replies?.map((reply) => (
            <Comment
              key={reply.id}
              comment={reply}
              level={level + 1}
              currentUser={currentUser}
              onDelete={onDelete}
              onUpdate={onUpdate}
              onReply={onReply}
            />
          ))}
        </div>
      )}
    </div>
  )
}

const CommentSection: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      author: 'amyrobson',
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs1cjbpch-xmHoTuFriulZEniFUjZgSRTd5w&s',
      timeAgo: '1 month ago',
      content:
        "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
      votes: 12,
      replies: [],
    },
    {
      id: 2,
      author: 'maxblagun',
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs1cjbpch-xmHoTuFriulZEniFUjZgSRTd5w&s',
      timeAgo: '2 weeks ago',
      content:
        "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
      votes: 5,
      replies: [
        {
          id: 3,
          author: 'ramsesmiron',
          avatar:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs1cjbpch-xmHoTuFriulZEniFUjZgSRTd5w&s',
          timeAgo: '1 week ago',
          content:
            "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
          votes: 4,
          replies: [],
        },
        {
          id: 4,
          author: 'juliusomo',
          avatar:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs1cjbpch-xmHoTuFriulZEniFUjZgSRTd5w&s',
          timeAgo: '2 days ago',
          content:
            "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
          votes: 2,
          isAuthor: true,
          replies: [],
        },
      ],
    },
  ])

  const handleDelete = (commentId: number) => {
    setComments((prevComments) => {
      const deleteComment = (comments: Comment[]): Comment[] => {
        return comments.filter((comment) => {
          if (comment.id === commentId) return false
          if (comment.replies) {
            comment.replies = deleteComment(comment.replies)
          }
          return true
        })
      }
      return deleteComment(prevComments)
    })
  }

  const handleUpdate = (commentId: number, updatedComment: Comment) => {
    setComments((prevComments) => {
      const updateComment = (comments: Comment[]): Comment[] => {
        return comments.map((comment) => {
          if (comment.id === commentId) {
            return updatedComment
          }
          if (comment.replies) {
            return {
              ...comment,
              replies: updateComment(comment.replies),
            }
          }
          return comment
        })
      }
      return updateComment(prevComments)
    })
  }

  const handleReply = (parentId: number, newReply: Comment) => {
    setComments((prevComments) => {
      const addReply = (comments: Comment[]): Comment[] => {
        return comments.map((comment) => {
          if (comment.id === parentId) {
            return {
              ...comment,
              replies: [...(comment.replies || []), newReply],
            }
          }
          if (comment.replies) {
            return {
              ...comment,
              replies: addReply(comment.replies),
            }
          }
          return comment
        })
      }
      return addReply(prevComments)
    })
  }

  const handleNewComment = (text: string) => {
    const newComment: Comment = {
      id: Date.now(),
      author: 'juliusomo',
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs1cjbpch-xmHoTuFriulZEniFUjZgSRTd5w&s',
      timeAgo: 'just now',
      content: text,
      votes: 0,
      isAuthor: true,
      replies: [],
    }
    setComments((prev) => [...prev, newComment])
  }
  return (
    <div className='max-w-3xl mx-auto p-6'>
      {comments.length === 0 ? (
        <div className='text-center py-12'>
          <MessageSquare className='mx-auto h-12 w-12 text-gray-400' />
          <h3 className='mt-4 text-lg font-semibold text-gray-900'>
            No comments yet
          </h3>
          <p className='mt-2 text-gray-500'>
            Be the first to share your thoughts!
          </p>
        </div>
      ) : (
        comments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            currentUser='juliusomo'
            onDelete={handleDelete}
            onUpdate={handleUpdate}
            onReply={handleReply}
          />
        ))
      )}

      <div className='mt-8 bg-white rounded-lg p-6 shadow-sm'>
        <h3 className='text-lg font-semibold text-gray-900 mb-4'>
          Add a comment
        </h3>
        <div className='flex gap-4 items-start'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs1cjbpch-xmHoTuFriulZEniFUjZgSRTd5w&s'
            alt='Current user'
            className='w-10 h-10 rounded-full ring-2 ring-gray-100'
          />
          <div className='flex-1'>
            <CommentForm onSubmit={handleNewComment} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommentSection
