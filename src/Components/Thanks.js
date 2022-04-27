import React from 'react'
import { Container , Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Thanks({jjongLogo2}) {

  const MP4_URL = `${process.env.MP4_URL}/assets/mp4/sky1.mp4`

  return (
    <>
      <div className='video-container'>
        <video className='video' src={MP4_URL} muted autoPlay loop></video>
      </div>
      <div className='main'>
      <Container>
        <h1>Make your world</h1>
      </Container>
      </div>
    </>
  )
}
