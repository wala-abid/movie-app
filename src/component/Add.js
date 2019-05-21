import React from 'react';
import { Modal, Button } from 'react-bootstrap';
class Add extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            show: false,
        }
console.log('constructor')
    }

    handleClose = () => {
        this.setState({ show: false });
    }

    handleShow = (event) => {
        this.setState({
            show: true
        });
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
componentDidMount= ()=> {
console.log('componentDidMount')

}
componentWillMount = ()=> {
    console.log('componentWillMount')
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => console.log( response,'hhh' ))
  .then(json => console.log(json))
    }
    componentWillUpdate = ()=> {
        console.log('componentWillUpdate')
        }
        componentDidUpdate = ()=> {
            console.log('componentDidUpdate')
            }
    render() {
        console.log('render')
        return (
            <div>
                <input type="button" id='add' value="ADD" onClick={this.handleShow} />
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Stars:<input name="rating" type="Number"  onChange={this.handleChange} placeholder="rate star" /><br/>
                        Title: <input name='titre' type='text' id='titre' onChange={this.handleChange} placeholder="Title" /><br />
                        image: <input name='img' type='text' id='titre' onChange={this.handleChange} placeholder="Title" /><br />
                        Description: <input name='description' type='text' id='description' onChange={this.handleChange} placeholder="Description" />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={() => this.props.addMovie(this.state.rating, this.state.titre,this.state.img, this.state.description)}>
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
export default Add;