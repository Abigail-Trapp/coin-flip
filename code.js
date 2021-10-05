const coin = {
    state: 0,
    flip: function () {
      let randomNumber = Math.round(Math.random())
      return this.state = randomNumber
    },
    
    toString: function () {
      if (this.state === 1){
        return "Heads"
      } else {
        return "Tails"
      }
    },
    toHTML: function () {
      const image = document.createElement("img");
      const body = document.querySelector("body");
      if (this.state === 1){
        image.src = "images/heads.png"
      } else {
        image.src = "images/tails.png"
      }
      body.append(image)
      return image;
    },
  };
  
  function display20Flips() {
    const results = [];
    for (let i = 0; i < 20; i++){
      coin.flip()
     results.push(coin.toString())
    }
    return (results)
  }
  let body = document.querySelector("body")
  let div = document.createElement("div")
    div.innerHTML = `${display20Flips()}`
    body.append(div)
  
  function display20Images() {
    const results = [];
    for (let i = 0; i < 20; i++){
      coin.flip()
    results.push(coin.toHTML())
    }
    return (results)
  }
  console.log(display20Images())
