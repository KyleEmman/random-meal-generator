import React, {useState, useEffect} from 'react'
import Header from './Header.js'
import BottomLeft from './BottomLeft.js'
import Center from './Center.js'
import './App.css'

function App() {
  const [mealNameValue, setMealNameValue] = useState({mealName: ''})
  const [mealObject, setMealObject] = useState()
  let inputValue = ''

  const formSubmit = e => {
    e.preventDefault()
    inputValue = e.target.mealInput.value
    if (inputValue === null || inputValue === "") return
    setMealNameValue({mealName: inputValue})
    e.target.reset()
    
  }

  useEffect(() => {
    function fetchFromApi() {
      if(mealNameValue.mealName === '') return
      
      fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${mealNameValue.mealName}`)
      .then(res => res.json()
      ).then(data => {
        setMealObject({data})
      })
    }
    fetchFromApi()
  }, [mealNameValue.mealName])



  return (
    <>
      <Header />
      <div className='left-section'>
          <form onSubmit={formSubmit}>
              <input type='text' name='mealInput'/>
              <button type='submit' className='submit-button'>Search</button>
          </form>
      </div>
      {(mealObject !== undefined || inputValue !== '') ? <BottomLeft mealObject={mealObject}/> : <></>}
      {(mealObject !== undefined || inputValue !== '') ? <Center mealObject={mealObject}/> : <></>}
    </>
  )
}

export default App;