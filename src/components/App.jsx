import React, { useState, useEffect } from 'react';
import SearchBar from "./SearchBar";
import axios from 'axios';
import Button from './Button';
import ImageGallery from './ImageGallery';
import Loader from './Loader';

const Search = async (page, query) => {
  
    const result = await axios.get(`https://pixabay.com/api/?key=29442705-65f5f0476d101e3a0092bd469&q=${query}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`)
  const dataImage = result.data.hits;
  console.log(query)
  console.log(dataImage)
    if (dataImage.length === 0) {
        return Promise.reject(new Error(` Not any images with key word ${query}`))
    }
    
        return dataImage
    }

export function App() {
  const [image, setImage] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (query === '') {
      return
    }
    fetchImage(page, query)
  // eslint-disable-next-line
  },[page, query]
  )

const fetchImage = async (page, query) => {
       
        try {   
          setStatus( 'pending' );
          const data = await Search(page, query);
          console.log(data);
          console.log(image)
          setImage([...image, ...data]);
          console.log(image)
          
            setStatus('resolved' );
        }

        catch (error){
        
          setError(`Not any images with key word ${query}` )
            setStatus('rejected');
  }
}

  const LoadMore = () => {  
    setPage( page + 1)
  }
  
  const handleFormSubmit = query => {
    setQuery( query);
    setImage([]);
    setPage(1)
    fetchImage(page, query)
  }
 
    return(
        <div>
        <SearchBar
          onSubmit={handleFormSubmit} />
             {(status === 'idle') && <div className='IdleMessage'> Do you want to find  some images? </div>}
        {(status === 'pending') &&
          <>
          <ImageGallery
            array={image}
          />
            <Loader />
          </>
        }

        {(status === 'rejected') &&
          <div className='Error'>{error}</div>};
      
        {(status === 'resolved') &&
          <>
            <ImageGallery
               array={image}
            />
            <Button onClick={ LoadMore} />
          </>}    
      </div>
    )
  
}