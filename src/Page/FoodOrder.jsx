import React from 'react'
import PlaceOrder from '../Components/PlaceOrder.jsx'
import BillingComponent from '../Components/BillingComponent.jsx'

const FoodOrder = () => {
    return (
    <div className='w-full md:full  h-full md:px-3 rounded-xl'>
      

      <div className='flex flex-col md:flex-row h-full'>
        <PlaceOrder/>
        <BillingComponent/>
      </div>
    </div>
  )
}

export default FoodOrder