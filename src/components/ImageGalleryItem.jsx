import React, { useState } from 'react';
import Modal from './Modal';
import './styles.css'


export default function ImageGalleryItem(id, previewURL, largeImageURL) {
  console.log(id)
  console.log(previewURL)
  console.log(largeImageURL)
  const [showModal, setShowModal] = useState(false)
    
    const toggleModal = () => {
       setShowModal(!showModal)
     }
  
      return (
        <>
              <li
                  className='ImageGalleryItem' key={id}>
                  <img
                      className='ImageGalleryItem-image' src={id.previewURL} alt='' onClick={toggleModal} />
                </li>
              {showModal && (
                  <Modal OnClose={toggleModal}> 
                    <img className='ModalImage'
                        src={id.largeImageURL}
                        alt=''
                        loading = "lazy"/>
                     <button
                          className='ModalButton'
                          type="button"
                          onClick={toggleModal}> Close modal</button>
                  </Modal>)} 
        </>
    )
 
}
