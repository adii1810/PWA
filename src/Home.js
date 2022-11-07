import React from 'react'

function Home(){
  return (
    <div className="container">
    <div className="py-4"><h3>Introducing to Progressive web application</h3></div>
    <div>
      <p>
        <b>Progressive Web Apps (PWAs)</b> are web apps that use service workers, manifests, and other web-platform features in combination with progressive enhancement to give users an experience on par with native apps.
      </p>
      <p>
      <b>Service workers</b> are a fundamental part of a PWA. They enable fast loading (regardless of the network), offline access, push notifications, and other capabilities.
      </p>
      <p>
      <b>Manifest.json</b> just a JSON file with values like the name of the app or the start URL. These values called members, define how your app appears to the user including the details to make a PWA look with a similar style of an app (the homescreen icon for example) and ensures that it's discoverable.
      </p>
    </div>
    </div>
  )
}

export default Home 
