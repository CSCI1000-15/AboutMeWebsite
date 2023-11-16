import React from 'react';

export default function AboutMePage() {
  return (
    <div className='container'>
      <title>Eric David's About Me Page</title>
      <link rel='icon' href='/favicon.ico' />

      <main>
        <div className='header'>
          <h1 className='title'>Xin chào! I'm <span className='name'>Eric</span>. </h1>
        </div>
        <img
          className='profile-pic'
          src='https://i.postimg.cc/8PFJ4XhD/20231015-022405-936.jpg'
          alt='Picture of Eric David'
        />

        <p className='description'>
          Hello! My name is Eric David. I am currently studying Computer Science at the University of Colorado Boulder. 
          I am a first-generation Vietnamese American. I'm interested in cybersecurity and I hope to pursue a career as a cybersecurity analyst.
          I am also currently minoring in a linguistics minor. I am fluent in English and Vietnamese. I am also learning Japanese and Korean. In my freetime, I
          like to cook, learn new languages, and hangout with friends.
        </p>

        <a className='button' href='/'>
          <p> Back to Home Page</p>
        </a>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          max-width: 60rem;
          background-color: #f8f8f8;
          color: #333;
          margin: auto;
        }

        main {
          padding: 3rem;
          text-align: center;
        }

        .header {
          margin-bottom: 2rem;
        }

        .title {
          margin: 0;
          line-height: 1.2;
          font-size: 3rem;
        }

        .name {
          color: #0070f3;
        }

        .profile-pic {
          height: 300px;
          width: 300px;
          border-radius: 50%;
          border: 4px solid #0070f3; /* Border color set to blue */
          margin-bottom: 2rem;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .button {
          display: inline-block;
          margin-top: 2rem;
          padding: 1rem 2rem;
          text-decoration: none;
          background-color: #0070f3;
          color: #fff;
          border-radius: 8px;
          transition: background-color 0.3s ease;
        }

        .button:hover {
          background-color: #0056b3;
        }

        .button p {
          margin: 0;
        }

        code {
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          background-color: #f8f8f8;
          color: #333;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
