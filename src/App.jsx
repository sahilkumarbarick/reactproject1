import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FacebookShareButton, TwitterShareButton, FacebookIcon, TwitterIcon } from 'react-share';
import './App.css'

function App() {

  const [quote, setQuote] = useState([])

  useEffect(() => {
    let data = async () => {
      let res = await axios.get("http://api.quotable.io/random")
      console.log(res);
      setQuote(res.data)
    }
    data()
  }, [])

  let fetchData = async () => {
    let res = await axios.get("http://api.quotable.io/random")
    console.log(res);
    setQuote(res.data)

  }
  const shareUrl = 'https://your-website-url.com';

  return (
    <>
      <div className="container">
            <div className="wrapper">
                <h3 className="card-title">Quote of the day:</h3>
                <h4 className="card-text">{quote.content}</h4>
                <h5 className='author'> ~{quote.author}</h5>
                <div className="button">
                  <div>
                  <FacebookShareButton url={shareUrl} quote={quote}>
                    <FacebookIcon size={40} round={true} />
                  </FacebookShareButton>
                  <TwitterShareButton url={shareUrl} title={quote}>
                    <TwitterIcon size={40} round={true} />
                  </TwitterShareButton>
                  </div>
                <button className="btn btn-primary" onClick={fetchData}> New Quote</button>
                </div>
              </div>
            </div>
    </>
  )
}

export default App