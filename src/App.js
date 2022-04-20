import {useState} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';

const Modal = (props) => {

    return (
        <div className="modal mt-5 d-block">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Typical modal window</h5>
                    <button onClick={() => props.onClose(false)} type="button" className="btn-close" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <p>Modal body content</p>
                </div>
                <div className="modal-footer">
                    <button onClick={() => props.onClose(false)} type="button" className="btn btn-secondary">Close</button>
                    <button onClick={() => props.onClose(false)} type="button" className="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
        </div>
    )
}

function App() {
    const [showModal, setShowModal] = useState(false);

    return (
        <Container>
            {showModal ? <Modal onClose={setShowModal}/> : null}
            <button 
                type="button" 
                className="btn btn-warning mt-5"
                onClick={() => setShowModal(true)}>Open Modal</button>
        </Container>
    );
}

export default App;
