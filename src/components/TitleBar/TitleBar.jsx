import { Button, Navbar, Form, FormControl } from "react-bootstrap";

function TitleBar() {

    


    return ( 
        <div className="row">
            <div className="col" align="left">
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#">vid.io</Navbar.Brand>
            </Navbar>
            </div>
            <div className="col-md-6" align="center">
            <Form className="d-flex">
                <FormControl 
                    type="search"
                    placeholder="Search"
                    className="mr-2"
                    aria-label='Search'
                />
                <Button variant="outline-success">Search...</Button>
            </Form>
            </div>
        </div>
     );
}

export default TitleBar;