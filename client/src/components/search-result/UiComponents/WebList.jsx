import React from 'react'
import linkedin from '../../../assets/linkedin-circle.png'

// const weblistdata={
//     logo:linkedin,
//     navTitle1:"Linkedin - Mohamed Irreef",
//     navTitle2:"https://www.linkedin.com/in > mohamed-ireef-s-23",
//     heading:"Mohamed Irreef S - Certified MERN Stack Web Developer",
//     para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium veritatis debitis sunt aliquam facilis voluptatem eius nemo dolor dolorum ratione corrupti repellendus et dicta at cupiditate vitae, velit sequi accusamus dignissimos corporis. Atque labore nemo expedita quo distinctio dolorem molestias dignissimos sit. Rerum sit quae facilis exercitationem, commodi fugit ullam?",
//     link:"https://www.linkedin.com/in/-mohamed-ireef-s-23-"
// }
const WebList = ({data}) => {
  return (
    <>
        {
            data.length>1?
                data.map((data)=>{
                return <div className='web-list'>
        <a className='weblist-anchor' href={data.link}>
            <nav className='weblist-nav'>
            <div className="weblist-logo">
                <img src={data.logo} alt="" />
            </div>
            <div className="weblist-title">
                <p className="weblist-title1">{data.navTitle1}</p>
                <p className="weblist-title2">{data.navTitle2}</p>
            </div>
        </nav>
        </a>
        <p className="weblist-main-heading">{data.heading}
</p>
        <p className="weblist-main-para">{data.para.slice(0,180)}...</p>
    </div>
            })
            :

            ( <div className='web-list'>
        <a className='weblist-anchor' href={data.link}>
            <nav className='weblist-nav'>
            <div className="weblist-logo">
                <img src={data.logo} alt="" />
            </div>
            <div className="weblist-title">
                <p className="weblist-title1">{data.navTitle1}</p>
                <p className="weblist-title2">{data.navTitle2}</p>
            </div>
        </nav>
        </a>
        <p className="weblist-main-heading">{data.heading}
</p>
        <p className="weblist-main-para">{data.para.slice(0,180)}...</p>
    </div>
            )
            
        }
    </>
  )
}

export default WebList