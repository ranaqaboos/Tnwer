import React from 'react'
import { Navbar } from '../componets/Navbar'
import { Viewvideo } from '../componets/Viewvideo'
import'../Styles/view-video.css'
export function Studentpage() {
	return (<>
<Navbar/>
<div className="container">
    {/* <!-- The video element --> */}
    <video src="https://www.youtube.com/watch?v=inwbRwJEyf0&list=RDinwbRwJEyf0&start_radio=1" />

    {/* <!-- The overlay area --> */}
    <div className="container__overlay">
        {/* <!-- The player button --> */}
        ...
    </div>
</div>
    </>
    )}