import { CardProps } from '@/interfaces'

const Card: React.FC = ({ title, content }: CardProps) => {
    return (
        <>
            <div className='flex items-center flex-col p-12  border'>
                <h2>{ title }</h2>
                <p>{ content }</p>
            </div>
        </>
    )
}

export default Card;