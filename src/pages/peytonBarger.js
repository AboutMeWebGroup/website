export default function examplePage() {
    return (
      <div className='container'>
        <title>Website</title>
        <link rel='icon' href='/favicon.ico' />

        <main>
          <div className='underline'>
            <h1 className='title'>Hello, Im Peyton Barger</h1>
          </div>
          <img
            src='data:image/png;base64,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'
            alt='Peyton Barger'
          />

          <p className='description'>
            I'm Peyton Barger, I'm a Freshman, majoring in computer science. I spend a lot of my free time playing Tetris competitively and doing digital art. Below is a picture of me playing in an online tournament on the right.
          </p>

          <img
            className='pic'
            src='https://i.ytimg.com/vi/Ob6_2zVD9iM/maxresdefault.jpg'
            alt='Peyton Barger'
          />

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
            margin: auto;
          }

          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
          }

          .underline {
            /* border-bottom: solid black; */
            margin-bottom: 1.5rem;
          }

          .description {
            line-height: 1.5;
            font-size: 1.5rem;
          }

          .pic {
            height: 250px;
            width: 445px;
          }

          .button {
            /* margin: .5rem; */
            flex-basis: 45%;
            padding: 0.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }

          .button:hover,
          .button:focus,
          .button:active {
            color: #0070f3;
            border-color: #0070f3;
          }

          .button p {
            font-size: 1rem;
            font-weight: 600;
          }

          code {
            background: #fafafa;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
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