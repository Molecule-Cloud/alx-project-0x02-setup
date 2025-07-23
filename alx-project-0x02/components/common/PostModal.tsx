import { PostModalProps } from "@/interfaces"
import { useState } from 'react'

const PostModal: React.FC<PostModalProps>  = ({ isOpen, onClose, onSubmit }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");  

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // When Submitted....
        onSubmit(title, content)
        // ...Reset Form
        setTitle("");
        setContent("");
        // ...Then Close
        onClose();
    }
    if (!isOpen) return null;
    return (
        <>
            <div className="fixed inset-0 bg-white  border flex items-center justify-center p-12 max-w-md h-md relative ml-30">
                <div className="bg-white p-6 rounded-lg">
                    <form action="submit" onSubmit={handleSubmit}>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}  placeholder="Title" required/>
                        <textarea 
                            name="content" id="content" value={content} 
                            placeholder="Content" required 
                            onChange={(e) => setContent(e.target.value)}>
                        </textarea>
                        <button type="submit">Submit</button>
                        <button type="button" onClick={onClose}>Cancel</button>
                    </form>
                </div>
            </div>
        </>
    )
}


export default PostModal