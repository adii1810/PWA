const cacheData = 'appV1'

// Code for running site in offline mode also

this.addEventListener('install',(event)=>{
    event.waitUntil(
        caches.open(cacheData).then((cache)=>{
            cache.addAll([
                '/static/js/bundle.js',
                '/static/js/main.0f7b985b.js',
                '/static/css/main.056774a4.css',
                '/favicon.ico',
                '/index.html',
                '/manifest.json',
                '/Users',
                '/',
            ])
        })
    )
})

this.addEventListener("fetch",(event)=>{

    // On this particular url call the notification with me pop up

    if(!navigator.onLine){

        if(event.request.url === "https://jsonplaceholder.typicode.com/users"){
            event.waitUntil(
                this.registration.showNotification("Internet",{
                    body:"Internet Not working",
                })
            )
        }    

        event.respondWith(
            caches.match(event.request).then((result)=>{
                if(result){
                    return result
                }
                // If data is updated then the new data will clone again
                let requestUrl = event.request.clone()
                fetch(requestUrl)
            })
        )
    }
})