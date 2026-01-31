import React from 'react'
import "./Dock.scss"
const dock = () => {
  return (
    <footer className='dock'>
        <div className="icon github">
            <img src="Dockicons/github.svg" alt="" />
        </div>
        <div className="icon note">
            <img src="Dockicons/note.svg" alt="" />
        </div>
        <div className="icon pdf">
            <img src="Dockicons/pdf.svg" alt="" />
        </div>
        <div className="icon calender">
            <img src="Dockicons/calender.svg" alt="" />
        </div>
        <div className="icon spotify">
            <img src="Dockicons/spotify.svg" alt="" />
        </div>
        <div className="icon mail">
            <img src="Dockicons/mail.svg" alt="" />
        </div>
        <div className="icon link">
            <img src="Dockicons/link.svg" alt="" />
        </div>
        <div className="icon cli">
            <img src="Dockicons/cli.svg" alt="" />
        </div>
    </footer>
  )
}

export default dock