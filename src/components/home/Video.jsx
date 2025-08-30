import React from 'react'

const Video = () => {
    return (
        <div className='h-full w-full'>
            <video className='h-full w-full object-cover' autoPlay loop muted src='https://download-video-ak.vimeocdn.com/v3-1/playback/a278bb9c-996c-4760-8ca1-dd0abff308f7/83c745cf?__token__=st=1756467243~exp=1756470843~acl=%2Fv3-1%2Fplayback%2Fa278bb9c-996c-4760-8ca1-dd0abff308f7%2F83c745cf%2A~hmac=89d567018d022c79cbe1e033f3134f0d92702d3471384cd11e3d3e5dbff293da&r=dXMtd2VzdDE%3D'></video>
        </div>
    )
}

export default Video
