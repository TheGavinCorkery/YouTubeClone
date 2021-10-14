import React, { useState } from "react";
import { Button, Navbar, Form, FormControl } from "react-bootstrap";


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
            <div className="col" align="left">
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#">vid.io</Navbar.Brand>
            </Navbar>
            </div>
            <div className="col-md-6" align="center">
                <Form className="d-flex" onSubmit={handleSubmit}>
                    
                    <FormControl 
                        type="text"
                        placeholder="Search..."
                        className="mr-2 form-control"
                        aria-label='Search'
                        name='searchQuery'
                        onChange={handleChange}
                    />
                    <Button className="btn" type='submit' variant="outline-success">Search</Button>
                </Form>
            </div>
        </div>
     );
}

export default SearchBar;