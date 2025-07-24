import Header from '@/components/layout/Header'
import { PostProps } from '@/interfaces'
import { useState, useEffect } from 'react'
import PostCard from '@/components/common/PostCard'

const Posts: React.FC = () => {
    const [posts, setPost] = useState<PostProps[]>([])

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch("http://jsonplaceholder.typicode.com/posts")
            const data = await response.json();
            setPost(data);
        }
        fetchPosts();
    })
    return (
        <>
            <Header />
            <div>
                <div className='flex space-x-3 sm:md'>
                    {
                        posts.map((post) => (
                            <PostCard key={post.id} {...post} />
                        ))
                      }
                </div>
            </div>
        </>
    )
}


export default Posts