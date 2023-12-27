import React from 'react'

export default function Info() {
    return (
        <section id="info">
            <img className='pfp' src='https://pbs.twimg.com/profile_images/1739638729638092801/u9CicjjJ_400x400.jpg' />
            <h1>AbdulQayyum Olatunji</h1>
            <p className="role">Frontend Developer</p>
            <p className='profile-website'><a href='https://github.com/Qayyax'>Github</a></p>
            <a className="email-link" href='#'>
            <div className="email">
                <i className="fa-solid fa-envelope"></i>
                <p>Email</p>
            </div>
            </a>
            
        </section>
    )
}