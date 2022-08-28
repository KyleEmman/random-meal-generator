import React from 'react'
import './Center.css'

export default function Center(props) {
  const ingredientsObject = {}
  const measurementsObject = {}
  const instructions = (props.mealObject.data.meals != null) ? props.mealObject.data.meals[0].strInstructions : ''

  for(let i=1; i<=20; i++) {
    ingredientsObject[`strIngredient${i}`] = (props.mealObject.data.meals != null) ? props.mealObject.data.meals[0][`strIngredient${i}`] : ''
    measurementsObject[`strMeasure${i}`] = (props.mealObject.data.meals != null) ? props.mealObject.data.meals[0][`strMeasure${i}`] : ''
  }
  console.log(ingredientsObject)
    //mag initialize ng object state, gawa ng loop tapos lagay ng key value pairs gamit square bracket notation
    //tapos non imamap/foreach yung object.values para makapagreturn ng mga li sa ul na may values ng ingredients/measurements

  return (
    <section class="body">
      <div class="ingredients">
        <h3>Ingredients</h3>
        <ul class="ingredients-list">
          {Object.values(ingredientsObject).map(ingredient => {
            return <li>{ingredient}</li>
          })}
        </ul>
      </div>
      <div class="measurements">
        <h3>Measurements</h3>
        <ul class="measurements-list">
          {Object.values(measurementsObject).map(measurement => {
            return <li>{measurement}</li>
          })}
        </ul>
      </div>
      <div class="instructions">
        <h3>Instructions</h3>
        <ul class="instructions-list">
          <p>{instructions}</p>
        </ul>
      </div>
    </section>
  )
}
