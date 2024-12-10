import { useState } from 'react'

import './Sidebar.css'

function Sidebar() {
  //   const  sidebar_sec1    = [
  //     { id: 1, title: 'Home', img_url: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/home.png?raw=true" },
  //     { id: 2, title: 'Explores', img_url: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/explore.png?raw=true" },
  //     { id: 3, title: 'Shorts', img_url: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/shorts.png?raw=true" },
  //     { id: 4, title: 'Subscription', img_url: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/subscription.png?raw=true" }
  // ]

  return (
    <>

      <div className='sidebar'>

        <div className='hambarger'>
          <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/hambarger.png?raw=true" className="ham" />
          <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Youtube%20logo.png?raw=true" className="logo" />
        </div>

        <div className='sidebar_sec1'>

          {/* {sidebar_sec1.map((i) => (
           <div key={i.id} className="sidebar_sec1">
           <img src={i.img_url} alt={i.title} />
           <p>{i.title}</p>
          <span>{i.by}</span>

           </div>
           ))} */}



          <div className='home'>
            <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/home.png?raw=true" className="tabs" />
            <span style={{color: 'white'}}>Home</span>
          </div>

          <div className='home'>
            <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/explore.png?raw=true" className="tabs" />
            <span style={{color: 'white'}}>Explores</span>
          </div>

          <div className='home'>
            <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/shorts.png?raw=true" className="tabs" />
            <span style={{color: 'white'}}>Shorts</span>
          </div>

          <div className='home'>
            <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/subscription.png?raw=true" className="tabs" />
            <span style={{color: 'white'}}>Subscription</span>
          </div>
        </div>

        <hr />




        <div className='sidebar_sec2'>

          <div className='home'>
            <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/library.png?raw=true" className="tabs" />
            <span style={{color: 'white'}}>Library</span>
          </div>

          <div className='home'>
            <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/history.png?raw=true" className="tabs" />
            <span style={{color: 'white'}}>History</span>
          </div>

          <div className='home'>
            <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/your_video.png?raw=true" className="tabs" />
            <span style={{color: 'white'}}>Yours videos</span>
          </div>

          <div className='home'>
            <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/watch_later.png?raw=true" className="tabs" />
            <span style={{color: 'white'}}>Wactch later</span>
          </div>

          <div className='home'>
            <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/liked.png?raw=true" className="tabs" />
            <span style={{color: 'white'}}>Liked videos</span>
          </div>

          <div className='home'>
            <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/down_arrow.png?raw=true" className="tabs" />
            <span style={{color: 'white'}}>Show more</span>
          </div>

        </div>
        <hr/>





        <div className='sidebar_sec3'>

          <p className='SUB'>SUBSCRIPTION</p>


      
          <div className='SUB1'>
            <img src='https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201.png?raw=true'/>
            <p className='SUB1_text'>Nardir On The Go</p>
          </div>

          <div className='SUB1'>
            <img src='https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true'/>
            <p className='SUB1_text'>Coke Studio Bangla</p>
          </div>

          <div className='SUB1'>
            <img src='https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(2).png?raw=true'/>
            <p className='SUB1_text'>MKBHD</p>
          </div>

          <div className='SUB1'>
            <img src='https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(3).png?raw=true'/>
            <p className='SUB1_text'>Figma</p>
          </div>

          <div className='SUB1'>
            <img src='https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true'/>
            <p className='SUB1_text'>ATC Android ToToC...</p>
          </div>

          <div className='SUB1'>
            <img src='https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(5).png?raw=true'/>
            <p className='SUB1_text'>Alix.com</p>
          </div>

        </div>

      </div>



    </>
  )
}

export default Sidebar