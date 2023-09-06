// min URL:
//https://rkjoxwqygzpbxtgmyejb.supabase.co
// project key
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJram94d3F5Z3pwYnh0Z215ZWpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwMDcwNDgsImV4cCI6MjAwOTU4MzA0OH0.SAZzp2LHyTIF5G-WuAIoyfrFfuqAJNgX1jixRvqPvSA
fetch("https://rkjoxwqygzpbxtgmyejb.supabase.co/rest/v1/test_products?select=name,price,image_file", {
  method: "GET",
  headers: {
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJram94d3F5Z3pwYnh0Z215ZWpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwMDcwNDgsImV4cCI6MjAwOTU4MzA0OH0.SAZzp2LHyTIF5G-WuAIoyfrFfuqAJNgX1jixRvqPvSA",
  },
})
  .then((res) => res.json())
  .then(showData);

  // items = array
function showData(items) {
    // console.table(items);
    // const ona1 = [1,2,3]
    // const ona2 = [3,4,5,6]
    // const ona1and2 = [...ona1,...ona2] = [1,2,3,3,4,5,6]
    //  const ona1andona1 = [...ona1,...ona1]= [1 2 3 1 2 3]
    //  const ona2ona2 = [...ona2, ...ona2] = [3 4 5 6 3 4 5 6 ]
    [...items,...items,...items,...items].map((item)=>{
        // console.log(item)
        // The normal to do any static stuff is using HTML,CSS
        //  But if it is dynamic, you are gonna have to use javascript
        // 1- Creating HTML Element img
        const onaImgWrapper = document.createElement("div")
        onaImgWrapper.classList.add('image-wrapper')
        const onaImg = document.createElement("img")
        onaImg.src = item.image_file
        onaImg.width=150;
        onaImgWrapper.style.width = 150
        onaImgWrapper.style.height = 150

        onaImg.style.visibility="hidden"



        // document.querySelector("img"
        //   ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

        // 2- Generate a random position
            // CSS Absolute position 
            // CSS Top . Left to position the element on the screen
            const bodyHeight = document.body.clientHeight
            const bodyWidth = document.body.clientWidth

            const randomTop = Math.random() * bodyHeight
            const randomLeft = Math.random() * bodyWidth


        // 3- Placing the HTML Elment in the position generated
            onaImgWrapper.style.position = 'absolute';
            onaImgWrapper.style.top = randomTop + 'px';
            onaImgWrapper.style.left = randomLeft + 'px';
            document.body.append(onaImgWrapper)
            onaImgWrapper.append(onaImg)


        // add eventLisener for Mhuse cursor

        onaImgWrapper.addEventListener('mouseenter',(event)=>{
            // console.log(event)
            onaImg.style.visibility="visible"
            // onaImg.classList.add('visible')
            // onaImg.classList.remove('hidden')
            // onaImg.style.border="5px solid red"
        })
        onaImgWrapper.addEventListener('mouseleave',(event)=>{
            // console.log(event)
            onaImg.style.visibility="hidden"
            // onaImg.classList.add('hidden')
            // onaImg.classList.remove('visible')

            // onaImg.style.visibility="hidden"

        })

    })
    
}

// Loops :^To go through data in an array one by one
// for(let i =1;¨i<items.length-1; i++;)
// foreach()
//  [].map((item)=>{})




// DB :^ Friends
// Columns:^ Name, Phone, Address, Img, Street number , Education
// Rows:^ Ahmed,Ona,Martin, Oskar, Andress