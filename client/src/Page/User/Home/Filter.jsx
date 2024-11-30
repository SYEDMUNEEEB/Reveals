import React from 'react'
import RangeSlider from './RangeSlider'

const Filter = () => {


    const [min, setMin] = React.useState(1)
    const [max, setMax] = React.useState(60)
    const handleMinChange = (event) => {
        setMin(event.target.value)
        
    }
    const handleMaxChange = (event) => {
        setMax(event.target.value)
        setMin(Math.max(min, max - 10))
    }


  return (
    <div className='absolute  bottom-[0]  space-y-1' id='filter-min-max  '>
       <div className="flex text-[12px] inter-font text-[#626975] justify-between">
              <p onChange={handleMinChange} className='min' >{min}</p>
              <p  onChange={handleMaxChange} className='max'>{max}</p>
            </div>
           <RangeSlider/>
    </div>
  )
}
export default Filter