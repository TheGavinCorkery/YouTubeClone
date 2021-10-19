import React, { useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import './TitleBar.css'

function SearchBar(props) {

    const [searchQuery, setSearchQuery] = useState("")
    
    const handleChange = (event) => {
        setSearchQuery(() => ({
            [event.target.name]: event.target.value
        }))
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        props.searchResults(searchQuery)
        // todo: pass keyword to app.jsx for axios request
    }


    return ( 
        <div className="row">
            <div className="col-md-4">
                <div className="navbar">
                    <h2>
                        <span className="material-icons">play_circle_filled</span> vid.io
                    </h2>
                </div>
            </div>
            <div className = "col-md-4 align-self-center" align= "center">
                <Form className="d-flex" onSubmit={handleSubmit}>
                    
                    <FormControl 
                        type="text"
                        placeholder="Search for a video..."
                        aria-label='Search'
                        name='searchQuery'
                        onChange={handleChange}
                    />
                    <Button className="btn btn-primary" type='submit'>
                        <span className="material-icons">search</span>
                    </Button>
                </Form>
            </div>
            <div className="col-md-4"></div>
        </div>
        
     );
}

export default SearchBar;