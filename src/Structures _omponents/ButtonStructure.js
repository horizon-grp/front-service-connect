import React from 'react'
import './ButtonStructure.css'

const ButtonStructure = (prop) => {
return (
    <div>
        <input type="submit" value="submit"  onClick={prop.submit}/>
    </div>
)
}

export default ButtonStructure