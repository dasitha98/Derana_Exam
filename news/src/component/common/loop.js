import React from 'react'
import Marquee from "react-fast-marquee";

const Loop = () => {
  return (
    <div className='container d-flex  my-2 '>
      <h4 className='rounded-start' style={{"background-color": "red", "color":"white"}}>HeadLines</h4>

      <Marquee direction="left" speed={100} delay={5}>
              <div className='card border-0'>
                  <div className='d-flex'>
                    <div className='d-flex'>
                      <svg style={{"color":"red"}} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/></svg>                      
                      <h6 className='mt-2'>GOTABAYA RAJAPAKSA RESIGNS</h6>
                    </div>
                    <div className='d-flex'>
                      <svg style={{"color":"red"}} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/></svg>                      
                      <h6 className='mt-2'>The new electricity tariff</h6>
                    </div>
                    <div className='d-flex'>
                      <svg style={{"color":"red"}} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/></svg>                      
                      <h6 className='mt-2'>Curfew imposed at 12 noon</h6>
                    </div>
                    <div className='d-flex'>
                      <svg style={{"color":"red"}} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/></svg>                      
                      <h6 className='mt-2'>SRI LANKA GOING HUNGRY: the growing food shortage</h6>
                    </div>
                  </div>
              </div>
      </Marquee>
      </div>

      
  )
}

export default Loop
