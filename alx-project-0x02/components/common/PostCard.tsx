import { PostProps } from '@/interfaces'
import Posts from '@/pages/posts'

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
    return (
        <>
            <div className="bg-red-300 p-6 ">
                <h3>{title}</h3>
                <p>{content}</p>
                <p>{userId}</p>
            </div>
        </>
    )
}

export default PostCard;