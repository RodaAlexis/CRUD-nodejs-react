import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const URI = 'http://localhost:8000/roda/'

const CompEditBlog = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    //procedimiento actualizar
    const update = async (e) => {
        await axios.put(URI+id,{
            title: title,
            content: content    
        })
        navigate('/')
    }

    useEffect( ()=>{
        getBlogById()
    },[])

    const getBlogById = async () => {
        const res = await axios.get(URI+id)
        setTitle(res.data.title)
        setContent(res.data.content)
    }

    return(
        <div>
        <h3>Edit POST</h3>
        <form onSubmit={update}>
                <div className='mb-3'>
                <label className='form-label'>Title</label>
                <input
                    value={title}
                    onChange={ (e)=> setTitle(e.target.value)}
                    type="text"
                    className='form-control'
                />
                </div>
                <div className='mb-3'>
                <label className='form-label'>Title</label>
                <textarea
                    value={content}
                    onChange={ (e)=> setContent(e.target.value)}
                    type="text"
                    className='form-control'
                />
                </div> 
                <button type='submit' className='btn btn-primary'>Store</button>
        </form>
    </div>
    )


}

export default CompEditBlog