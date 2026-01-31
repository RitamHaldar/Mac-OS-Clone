import React from 'react'
import { Rnd } from 'react-rnd'
import "./macwindow.scss"
const MacWndow = ({children}) => {
  return (
    <Rnd 
    default={{
        height:"30vh",
        width:"30vw",
        x:200,
        y:300
    }}>
        <div className="window">
            <nav>
                <div className="options">
                    <div className="red dot"></div>
                    <div className="yellow dot"></div>
                    <div className="green dot"></div>
                </div>
                <div className="title">ritamhaldar - zsh</div>
            </nav>
            <section>
                {children}
            </section>
        </div>
    </Rnd>
  )
}

export default MacWndow