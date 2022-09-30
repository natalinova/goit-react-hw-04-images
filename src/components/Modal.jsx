import { useEffect } from "react";
import { createPortal } from "react-dom";
import './styles.css'

const ModalRoot = document.querySelector('#modal-root')


export default function Modal({OnClose, children}) {
    useEffect(() => {
       window.addEventListener('keydown', handleKeyDown)  
    })
    // componentDidMount() {
    //     window.addEventListener('keydown', this.handleKeyDown)
    // }
    // componentWillUnmount() {
    //     window.removeEventListener('keydown', this.handleKeyDown)
    // }
    const handleKeyDown = e => {
            if (e.code === 'Escape'){
                OnClose()
            }
    }
    const handleBackdropClick = e => {
        if (e.target === e.currentTarget) {
            OnClose()
        }
    }
    
        return createPortal(<div className="Overlay" onClick={handleBackdropClick}>
            <div className="Modal"> {children}</div>
        </div>, ModalRoot,
        );
   
}
