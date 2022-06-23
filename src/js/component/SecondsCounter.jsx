import React from 'react'

export const SecondsCounter = ({ time, stopInterval, resetInterval, handleCountdown, handleCountdownInputs, isPaused, status }) => {

  const hours = Math.floor((time / 3600))
  const minutes = Math.floor(time % 3600 / 60)
  const seconds = Math.floor(time % 60)


  return (
    <>

      <div className='timer-container'>

        {
          (time === 0 && status === 'countdown')
            ? <div className="alert alert-success fixed-top text-center " role="alert">
              🕑 Coutdown finished!!
            </div>
            : ''
        }

        <div className='d-flex mb-5'>
          <input type="number" min={0} name='hours' style={{ width: 80, marginRight: 15 }} placeholder='Hours...'     onChange={(e) => handleCountdownInputs(e)} />
          <input type="number" min={0} name='minutes' style={{ width: 80, marginRight: 15 }} placeholder='Minutes...' onChange={(e) => handleCountdownInputs(e)} />
          <input type="number" min={0} name='seconds' style={{ width: 80, marginRight: 15 }} placeholder='Seconds...' onChange={(e) => handleCountdownInputs(e)} />
          <button className='btn btn-outline-light mx-2' onClick={() => handleCountdown()}>Start Countdown</button>
        </div>

        <div className='timer'>
          <div className='clock-icon'>
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
              <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
            </svg>
          </div>

          <div>
            <h4>{hours < 10 ? `0${hours}` : hours}</h4>
            <span>Hours</span>
          </div>
          <div>
            <h4>{minutes < 10 ? `0${minutes}` : minutes}</h4>
            <span>Minutes</span>
          </div>
          <div>
            <h4>{seconds < 10 ? `0${seconds}` : seconds}</h4>
            <span>Seconds</span>
          </div>
        </div>

        <div className='mt-5'>
          <button className='btn btn-light mx-2' onClick={() => stopInterval()}>
            {isPaused ? 'Resume' : 'Stop'}
          </button>
          <button className='btn btn-outline-light mx-2' onClick={() => resetInterval()}>Reset</button>
        </div>

      </div>
    </>
  )
}
