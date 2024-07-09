import React, { useState } from 'react'

function FeedbackForm() {
  const [score, setScore] = useState('10');
  const [comment, setComment] = useState('');

  const isDisabled = Number(score) < 5 && comment.length <= 10;
  const textAreaPlaceholder = isDisabled
    ? "Please provide a comment explaining why the experience was not good.\nMinimum length is 10 characters."
    : 'Optional feedback';

  const handleSubmit = (e) => {
    e.preventDefault();
    setComment('')
    setScore('10')
  }

  return (
    <div>
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div className='DivField'>
              <h1>Feedback</h1>
              <div>
                <label>Comment:</label>
                <br />
                <textarea
                  className='TextareaLabel'
                  rows='12'
                  cols='50'
                  value={comment}
                  placeholder={textAreaPlaceholder}
                  onChange={e => setComment(e.target.value)}
                />
              </div>
              <div>
                <label>Score: {score} ⭐</label>
                <br />
                <input
                  className='InpuLabel'
                  type='range'
                  min='0'
                  max='10'
                  value={score}
                  onChange={(e) => setScore(e.target.value)}
                />
              </div>
              <button disabled={isDisabled} className='Submit-btn' type='submit'>Submit</button>
            </div>
          </fieldset>
        </form>
      </header>
    </div>
  )
}

export default FeedbackForm