import React from 'react'

export default function Jumbotron({title, body}) {
  return (
    <div><div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  </div></div>
  )
}
