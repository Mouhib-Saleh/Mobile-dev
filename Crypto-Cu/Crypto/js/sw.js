var CACHE_NAME = 'Crypto';
 var urlsToCache = [   
  '/css/bootstrap.min.css',  
   './js/app.js' ,
   './js/api.js',
   './js/bootstrap.min.js',
   './js/font.js',
   './js/signup.js',
   './Api.html',
   './signin.html',
   './res/bg.jpg',
   './res/bg3.jpg',
   './res/bg4.jpg',
   './res/bg1.jpg',
   './res/bg2.jpg',
   './index.html',
   './devise.html',
   './meteo.html',
   
  
  
  
  
  
  ]; 
 
self.addEventListener('install', function(event) { 
      // Perform install steps   
      event.waitUntil(    
           caches.open(CACHE_NAME)  
                .then(function(cache) {        
                     console.log('Opened cache');       
                       return cache.addAll(urlsToCache);     
                      })  
                       );
                     });



self.addEventListener('fetch', function(event) {
    event.respondWith(    
         caches.match(event.request)     
           .then(function(response) {   
                     if (response) {     
          return response ;
        } 
 
        return fetch(event.request).then(           function(response) {                    if(!response || response.status !== 200 || response.type !== 'basic') {               return response;             }             var responseToCache = response.clone(); 
 
            caches.open(CACHE_NAME)               .then(function(cache) {                 cache.put(event.request, responseToCache);               }); 
 
            return response;           }         );       })     ); }); 
