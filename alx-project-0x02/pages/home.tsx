import Card from "@/components/common/Card";
import { useState } from 'react'
import PostModal from '@/components/common/PostModal'


const Home: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [posts, setPosts] = useState<Array<{ title: string; content: string }>>([])

    const handleAddPost = (title: string, content: string) => {
        // Update the Post Array
        setPosts([...posts, {title, content}]);
    }
    return (
        <>
            <div className="flex items-center justify-center space-x-4">
                <div className="bg-red-500">
                    <Card title="Senior Dev" content="This is a senior dev" />
                </div>
                <div className="bg-red-200">
                    <Card title="Junior Dev" content="This is a Junior Dev" />
                </div>
            </div>
            <button onClick={() => setIsModalOpen(true)}> Add Post</button>
            <PostModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleAddPost} 
            />
            {/* Render the Posts Dymamically */}
            {
                posts.map((post, index) => (
                    <div className='flex items-center flex-col p-12  border' key={index}>
                        <h2>{ post.title }</h2>
                        <p>{ post.content }</p>
                    </div>
                ))
            }
        </>
    )
}


export default Home;