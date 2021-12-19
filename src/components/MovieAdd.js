import React from 'react'
import {useState} from 'react'
import InputField from './InputField';

function MovieAdd({addMovie}) {
    const [movietitle, setMovietitle] = useState();
    const [moviedate, setMoviedate] = useState();
    const [titleError, setTitleError] = useState();
    const [dateError, setDateError] = useState('');

    const resetForm = () => {
        setMovietitle('');
        setMoviedate('');

    }
    const resetErrors = () => {
      setTitleError('');
      setDateError('');
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
          
          addMovie({ 
            id: Date.now(),
            title: movietitle,
            date: moviedate
        });
        resetErrors();
        resetForm();
        }
        
      }  
    

    const validateForm = () => {
      let validated = true;
      if (!movietitle) {
        setTitleError('영화제목을 넣어주세요');
        validated = false;
      }
      if (!moviedate) {
        setDateError('개봉년도를 넣어주세요');
        validated = false;
      }
      return validated;
    }
  
    return (
        <form onSubmit={onSubmit}>
        <InputField
          type="text"
          value={movietitle}
          placeholder="영화제목"
          onChange={e => setMovietitle(e.target.value)}
          errorMessage={titleError}
        />
        {/* <input
          type="text"
          value={movietitle}
          placeholder="영화제목"
          onChange = {((e) => {
            setMovietitle(e.target.value)
          })}
        /><br />
        <div style={{color: 'red'}}>{titleError}</div> */}
        <InputField
          type='number'
          value={moviedate}
          placeholder="개봉년도"
          onChange={e => setMoviedate(e.target.value)}
          errorMessage={dateError}
        />
        {/* <input
          type='number'
          value={moviedate}
          placeholder="개봉년도"
          onChange = {((e) => {
            setMoviedate(e.target.value)
          })}
        />
        <div style={{color: 'red'}}>{dateError}</div> */}
        <button type="sumit">영화추가</button>
      </form>
    )
}

export default MovieAdd
