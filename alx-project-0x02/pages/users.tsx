import { UserPageProps, UserProps } from "@/interfaces"
import UsersCard from "@/components/common/UserCard"
import { GetStaticProps } from 'next'


const UsersPage: React.FC<UserPageProps> = ({ posts }) => {
    return (
        <>
            <div>
                {
                    posts.map((user) =>
                        <UsersCard 
                     key={user.id} {...user} />
                    )
                }
            </div>
        </>
    )
}
export const getStaticProps: GetStaticProps<UserPageProps> = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const posts: UserProps[] = await response.json()

    return {
        props: {posts}
    }
}

export default UsersPage