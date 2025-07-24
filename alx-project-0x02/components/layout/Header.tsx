import Image from 'next/image'
import Link from 'next/link'

const Header: React.FC = () => {
    return (
        <>
            <div className="flex items-center justify-between border-b border-opacity-10">
                <div className='bg-black'>
                    <Image src="/" width={30} height={30} alt="Logo"></Image>
                </div>
                <nav>
                    <ul className='flex space-x-6'>
                        <li>Home
                            <Link href="/home"></Link>
                        </li>
                        <li>About
                            <Link href="/about"></Link>
                        </li>
                        <li>Explore
                            <Link href="posts"></Link>
                        </li>
                    </ul>
                </nav>
                <div className="p-2 space-x-6">
                    <button className='bg-green-400 rounded-md border-b p-3'>Sign In</button>
                    <button className='bg-green-400 rounded-md border-b p-3'>Sign Up</button>
                </div>
            </div>
        </>
    )
}

export default Header;