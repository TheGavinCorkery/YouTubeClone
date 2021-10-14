import { useState } from "react";
import { Button, Navbar, Form, FormControl } from "react-bootstrap";


function TitleBar(props) {

    const [searchQuery, setSearchQuery] = useState("")
    



    return ( 
        <div className="row">
            <div className="col" align="left">
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#">vid.io</Navbar.Brand>
            </Navbar>
            </div>
            <div className="col-md-6" align="center">
            <form onSubmit={props.searchQuery}>
            <Form className="d-flex" onSubmit={props.searchQuery}>
                
                <FormControl 
                    type="search"
                    placeholder="Search"
                    className="mr-2"
                    aria-label='Search'
                    name='searchBar'
                    onChange = {(event) => {setSearchQuery(event.target.value)}}
                />
                <Button type='submit' variant="outline-success">Search...</Button>
            </Form>
            </form>
            </div>
        </div>
     );
}

export default TitleBar;