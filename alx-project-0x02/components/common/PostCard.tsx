import { PostProps } from '@/interfaces'
import Posts from '@/pages/posts'

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
    return (
        <>
            <div className="bg-red-300 p-6 w-lg flex flex-col h-96 rounded">
                <p>{userId}</p>
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
        </>
    )
}

export default PostCard;