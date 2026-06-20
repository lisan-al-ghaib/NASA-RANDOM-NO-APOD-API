let key = "b9VeQ0wdwdkV9vCcdhLvEagLsy4J79p6uToHmuxc";

document.querySelector('button').addEventListener('click', getImg)

function getImg(){
  const choice = document.querySelector('input').value

  const url = `https://api.nasa.gov/planetary/apod?api_key=b9VeQ0wdwdkV9vCcdhLvEagLsy4J79p6uToHmuxc&count=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        displayImgs(data)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

// const h1 = document.createElement("h1");
// h1.innerText = "fish";
// document.querySelector("body").appendChild(h1);

function displayImgs(arr){
    gallery.replaceChildren();

    for(let i = 0; i < arr.length; i++){
        const img = document.createElement("img");
        img.src = arr[i].hdurl;
        document.querySelector("#gallery").appendChild(img);
    }
}

document.querySelector("h2").remove