
// To use this Service Worker we have to import it into Index.js
export default function serviceWorker(){

    function urlBase64ToUintArray(base64String){
        var padding = '='.repeat((4 - base64String.length % 4) % 4);
    var base64 = (base64String + padding)
        // eslint-disable-next-line no-useless-escape
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    var rawData = window.atob(base64);
    var outputArray = new Uint8Array(rawData.length);

    for (var i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
        console.log("outputArray",outputArray);
        return outputArray
    }
    
    function determineAppServerKey(){
        let vapidPublicKey = "BHDFOUTVOVEcYmkkxmIgGtM8oKt-sBd1TlOsxjV4gOoD5oc5JTetnfqtNGT_1YN9t3iYkstMY2CaaPLaKT6oiZA"
        return urlBase64ToUintArray(vapidPublicKey)
    }



    let swUrl = `${process.env.PUBLIC_URL}/sw.js` // URL of service worker file 
    
    // Register the Service Worker by using register() which will return promise
    navigator.serviceWorker.register(swUrl).then((response)=>{

   // This code is added for push notification
    navigator.serviceWorker.ready.then((swr)=>{
        const opt = {
            userVisibleOnly:true,
            applicationServerKey:determineAppServerKey()
        }
        return swr.pushManager.subscribe(opt).then((pushSub)=>{
            console.log("Hello ",pushSub.endpoint);
        },(error)=>{
            console.log("Error",error);
        }
        )
    })
})
}