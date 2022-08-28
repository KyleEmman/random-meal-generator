import React, {useState} from 'react'
import './BottomLeft.css'
import MealModal from './MealModal'

export default function BottomLeft(props) {
  const [show, setShow] = useState(false);
  
  const mealName = (props.mealObject.data.meals != null) ? props.mealObject.data.meals[0].strMeal : ''
  const mealCategory = (props.mealObject.data.meals != null) ? props.mealObject.data.meals[0].strCategory : ''
  const mealArea = (props.mealObject.data.meals != null) ? props.mealObject.data.meals[0].strArea : ''
  const mealTags = (props.mealObject.data.meals != null) ? props.mealObject.data.meals[0].strTags : '' 
  const mealYoutube = (props.mealObject.data.meals != null) ? props.mealObject.data.meals[0].strYoutube : ''
  const mealThumb = (props.mealObject.data.meals != null) ? props.mealObject.data.meals[0].strMealThumb : ''

  // const mealDataArray = [mealName, mealCategory, mealArea, mealTags, mealYoutube]
  const mealDataObject = {
    MealName: mealName,
    MealCategory: mealCategory,
    MealArea: mealArea,
    MealTags: mealTags,
    MealYoutube: mealYoutube
  }

  return (
    <div className='bottom-left'>
      <h2>Meal Data</h2>
      {Object.keys(mealDataObject).map(key => {
        return (
          <>
          <h3>{key}:</h3>
          <span>{mealDataObject[key]}</span>
          </>
        )
      })}
      <button className='modal-button' onClick={() => setShow(true)}>Show Modal</button>
      <MealModal title={mealName} onClose={() => setShow(false)} show={show}>
        <img src={mealThumb} width='300px' height='300px' alt='Meal details'></img>
      </MealModal>
    </div>
  )
}
