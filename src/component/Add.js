import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import {connect} from 'react-redux'
import {addMovie} from '../action/movieAction'
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

onSubmit = ()=>{
    const obj = {
        rating :this.state.rating ,
        titre : this.state.titre,
        description :this.state.description,
        img :this.state.img,
    }
    this.props.addMovie(obj)
    this.setState({
        show : false
    })
}



    render() {
        console.log(this.props, 'render')
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
                        <Button variant="primary" onClick={this.onSubmit}>
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addMovie : () => dispatch(addMovie())



//     }
// }

export default connect(null , {addMovie })(Add) ;