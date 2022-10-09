const apiKey = '4gSH1xtjLxpYCwW9cPI8qyfjApJfjRPo';
const httpCall = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

/*httpCall.then( (resp) => {
    resp.json().then(data =>{
      console.log(data)
    })
})
.catch( console.warn)*/
httpCall
    .then( resp => resp.json() )
    .then( ({data}) => {
      const  {url}  = data.images.original;
      
      const img = document.createElement('img');
      img.src = url;
      img.width = 300
      img.height = 250

      document.body.append( img );
    })
    .catch( console.warn )