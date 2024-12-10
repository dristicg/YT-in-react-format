import './Mainbody.css'

function Mainbody() {

    return (

        <>
            <div className='header'>

                <div className='header1'>

                    <div className='search_bar'>

                        <input type='text' name='placeholder' placeholder='Search' className='search_tab'></input>
                        <img src='https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/search.png?raw=true' className='search_img' /> 

                        

                    </div>

                    <img src='https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/mic.png?raw=true' className='mic' />


                    <div className='header1_icons'>
                        <img src='https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/create.png?raw=true' className='header1_icon' />

                        <img src='https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/more.png?raw=true' className='header1_icon' />

                        <img src='https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/bell.png?raw=true' className='header1_icon' />

                        <img src='https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/create.png?raw=true' className='header1_icon' />
                    </div>
                </div>


               <div className='header2'>

                <button className='all'>All</button>
                <button className='ck'>Coke Studios</button>
                <button className='ux'>UX</button>
                <button className='cs'>Case Study</button>
                <button className='m'>Music</button>
                <button className='bl'>Bhagla Lofi</button>
                <button className='tour'>Tour</button>
                <button className='san'>Saintmartin</button>
                <button className='teach'>Teach</button>
                <button className='iP'>iPhone 13</button>
               
               </div>

            </div>
            



            
        </>
    )
}

export default Mainbody