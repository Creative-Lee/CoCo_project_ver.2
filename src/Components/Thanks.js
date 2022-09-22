import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Thanks({ jjongLogo2, poster }) {
  const MP4_URL = `${process.env.MP4_URL}/assets/mp4/sky5.mp4`;

  return (
    <div className="main">
      <div className="video-wrap">
        <video
          className="video"
          src={MP4_URL}
          poster={poster}
          muted
          autoPlay
          loop
        ></video>
      </div>

      <Container className="logo-container">
        <Link to="/CoCo_project_ver.2">
          <div className="logo-wrap">
            <img src={jjongLogo2} className="logo"></img>
          </div>
        </Link>
      </Container>

      <Container className="button-container">
        <Link to="/CoCo_project_ver.2">
          <button className="button">홈으로</button>
        </Link>
      </Container>
    </div>
  );
}
