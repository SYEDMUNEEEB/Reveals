import { useState } from "react"
import RangeSlider from "./RangeSlider"

const HoursRangs=()=>{
    const [min, setMin] = useState(1)
    const [max, setMax] = useState(24)

    const handleMinChange=(e)=>{
       const value=parseInt(e.target.value)
       if(value>max)
        setMin(value)
        return
    }
   const handleMaxChange=(e)=>{
    const value=parseInt(e.target.value)
       if(value<min) 
        setMax(value)
        return
 
   }

    return(
        <>
        
        <div className='absolute  bottom-[0]  space-y-1'>
       <div className="flex text-[12px] inter-font text-[#626975] justify-between">
       <p onChange={handleMinChange} className='min' >{min}</p>
       <p  onChange={handleMaxChange} className='max'>{max}</p>
            </div>
           <RangeSlider/>
    </div>
        </>
    )
}
export default HoursRangs