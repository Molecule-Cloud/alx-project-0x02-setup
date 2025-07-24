import { ButtonProps } from '@/interfaces'

const Button: React.FC<ButtonProps> = ({ size, shape, text }) => {
    const sizeClasses = {
        small: "p-2",
        medium: "p-3",
        large: "p-5",
    }

    const shapeClasses = {
        'rounded-sm': "rounded-sm",
        'rounded-md': "rounded-md",
        'rounded-full': "rounded-full"
    }

    return (
        <button className={`${sizeClasses[size]} ${shapeClasses[shape]} bg-green-300 text-white hover:bg-green-400`}>
            {text}
        </button>
    )
}


export default Button;