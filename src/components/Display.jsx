import React from 'react'
import './Display.css'
import { render } from '@testing-library/react'

export default props =>
   <div className="display">{props.value}</div>