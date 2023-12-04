export default function examplePage() {
    return (
      <div className='container'>
        <title>Winston</title>
        <link rel='icon' href='/favicon.ico' />

        <main>
          <div className='underline'>
            <h1 className='title'>Hey, I'm <span className='name'>Winston Thompson</span>. </h1>
          </div>
          <img
            className='pic'
            src='https://i.postimg.cc/Dzsq1H8N/IMG-1955.jpg'
            alt='picture of winston'
          />

          <p className='description'>
            Hey! My name is Winston Thompson. I am currently studying at the 
            University of Colorado Boulder. I am majoring in Computer Science and in my free time I enjoy
            Mountain Biking and playing guitar. Right now I am not sure what specific field I am interested 
            in but I know I want to develop software. I am also thinking about pursuing a minor in German.
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
  
          .pic {
            max-width: 100%; 
            height: auto;
            max-height: 100%;
            border-radius: 20%; 
            border: 5px solid blue; 
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
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    );
}