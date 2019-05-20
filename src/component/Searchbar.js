import React from 'react';
import Button from 'react-bootstrap/Button';
import { InputGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';

const Searchbar = (props) => {
    return (
        <div className="search">
            <InputGroup className="mb">
                <FormControl aria-describedby="basic-addon1" onChange={props.searchvalue} />

                <InputGroup.Prepend>
                    <Button variant="outline-secondary">Search</Button>
                </InputGroup.Prepend>
            </InputGroup>

        </div>
    )
}
export default Searchbar;