import React, { useState } from "react"
import { hero } from "./dummyData.js"
import Card from "./Card.js"

const Section1 = () => {

    const [items, setIems] = useState(hero)

    
  return (
    <>
      <section className='hero'>
        <div className='container'>
          {items.map((item) => {
            return (
              <>
                <Card key={item.id} item={item} />
              </>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Section1