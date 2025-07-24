import Header from '@/components/layout/Header'
import { PostProps, PostsPageProps } from '@/interfaces'
import PostCard from '@/components/common/PostCard'
import { GetStaticProps } from 'next'

const Posts: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps<PostsPageProps> = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts = await response.json()

  return {
    props: {
      posts,
    },
    revalidate: 60 
  }
}

export default Posts