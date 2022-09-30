import { Component } from "react";
import { createPortal } from "react-dom";
import './styles.css'

const ModalRoot = document.querySelector('#modal-root')


export default class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
    }
    handleKeyDown = e => {
            if (e.code === 'Escape'){
                this.props.OnClose()
            }
    }
    handleBackdropClick = e => {
        if (e.target === e.currentTarget) {
            this.props.OnClose()
        }
    }
    render() {
        return createPortal(<div className="Overlay" onClick={this.handleBackdropClick}>
            <div className="Modal"> {this.props.children}</div>
        </div>, ModalRoot,
        );
    }
}
