import React, {useState} from 'react';
import { FormControl, Form, Button } from 'react-bootstrap';

const CommentForm = (props) => {

    const [comment, setComment] = useState({message: ""})

    const handleChange = (event) => {
        setComment(() => ({
            message: event.target.value,
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.postComment(comment, props.commentId)
    }


    return ( 
        <div>
            <Form className="d-flex" onSubmit={handleSubmit}>
            <FormControl 
                        type="text"
                        placeholder="What's your thoughts..."
                        className="mr-2 form-control"
                        aria-label='Comment'
                        name='message'
                        onChange={handleChange}
                    />
                    <Button className="btn btn-primary" type='submit'>Post Comment</Button>
            </Form>
        </div>
     );
}
 
export default CommentForm;