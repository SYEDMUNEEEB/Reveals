import * as React from "react";
import { Range } from "react-range";


const RangeSlider = () => {
  const [values, setValues] = React.useState([50]);
  const STEP = 8;
  const MIN = 0;
  const MAX = 100;

  return (
    <>

      <div style={{ height: "0vh" }} className="Range">
        <Range
          step={STEP}
          min={MIN}
          max={MAX}
          values={values}
          onChange={(values) => setValues(values)}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "20px",

                backgroundColor: "#555",
                borderRadius: "4px",
                position: "relative",
              }}
              className="rangeslider-slider"
            >
              {/* Adding dots on the track */}
              {Array.from({ length: (MAX - MIN) / STEP + 1 }, (_, index) => (
                <div
                  key={index}
                  style={{
                    position: "absolute",
                    height: "4px",
                    width: "4px",
                    backgroundColor: "#000",
                    borderRadius: "50%",
                    top: "50%",
                    transform: "translateY(-50%)",
                    left: `${(index / ((MAX - MIN) / STEP)) * 100}%`,

                  }}
                  className='slider-rang'
                />
              ))}
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "16px",
                width: "16px",
                backgroundColor: "#777",
                borderRadius: "50%",
                boxShadow: "0 0 2px #000",
              }}
            />
          )}
        />
      </div>
    </>
  )

}

export default RangeSlider