export interface Test{
    name: string;
    id: number;
    username: string;
}


export interface CardProps {
    title: string;
    content: string;
}

export interface PostModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (title: string, content: string) => void;
}


export interface ButtonProps {
    size: 'small' | 'medium' | 'large';
    shape: 'rounded-sm' | 'rounded-md' | 'rounded-full';
    text: string;
}


export interface PostProps {
    title: string;
    content: string;
    userId: string;
}

export interface PostsPageProps {
    posts: PostProps[];
}


export interface UserProps {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street:string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        }
    }
    phone: string;
    website: string;
    company: {
        company_name: string;
        catchPhrase: string;
        bs: string
    }
}


export interface UserPageProps {
    posts:UserProps[];
}