import React, { useEffect, useState } from "react"
import "../App.css"

const Main = () => {
  const [img, setImg] = useState([])

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=20214383-9bc90df61de4ad44b136b77bb&q=cats&per_page=20`
    )
      .then((response) => response.json())
      .then((data) => {
        setImg(data.hits)
      })
  }, [])

  const listOfImage = img.map((item) => (
    <div key={item.id} className="in-img">
      <h4>{item.tags}</h4>
      <img src={item.userImageURL} alt="Image" />
    </div>
  ))

  return (
    <div className="main">
      <div className="img-list">{listOfImage}</div>
    </div>
  )
}

export default Main
