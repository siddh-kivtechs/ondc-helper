
let y_json=[
                   {
              desc:" Mens Casual",
              id:1,
              image:"https://siddh-kivtechs.github.io/image/man-1600948_1920.png",
              title:"mens casual",
              url:"https://siddh-kivtechs.github.io/tts_base_1/"
            },
  
                   {
              desc:"Mens Formal",
              id:2,
              image:"https://siddh-kivtechs.github.io/image/storytelling-4203628.jpg",
              title:"Mens Formal",
              url:"https://siddh-kivtechs.github.io/tts_story_book/"
            }
          ,
                    {
              desc:" Womens Casual",
              id:3,
              image:"https://siddh-kivtechs.github.io/image/man-1600948_1920.png",
              title:"mens casual",
              url:"https://siddh-kivtechs.github.io/tts_base_1/"
            },
  
                   {
              desc:"Womens Formal",
              id:4,
              image:"https://siddh-kivtechs.github.io/image/storytelling-4203628.jpg",
              title:"Mens Formal",
              url:"https://siddh-kivtechs.github.io/tts_story_book/"
            },
               {
              desc:" Kids",
              id:5,
              image:"https://siddh-kivtechs.github.io/image/man-1600948_1920.png",
              title:"kids",
              url:"https://siddh-kivtechs.github.io/tts_base_1/"
            },
  
                   {
              desc:"undergarments",
              id:6,
              image:"https://siddh-kivtechs.github.io/image/storytelling-4203628.jpg",
              title:"Undergarments",
              url:"https://siddh-kivtechs.github.io/tts_story_book/"
            }
           ];

const Ginel = () => {
    const getGinel =  () => {
    // const getGinel = async () => {
        // const j_json=await get_json(url_13);
        return y_json.map((ginel) => {
            const styles = {
                backgroundImage: `url(${ginel.image})`
            };
  return (React.createElement("a", { key: ginel.id, href: ginel.url, className: "ginel-card background-image", style: styles },
React.createElement("div", { className: "ginel-card-content" },
React.createElement("div", { className: "ginel-card-content-items" },
React.createElement("span", { className: "ginel-card-title" }, ginel.title),
React.createElement("span", { className: "ginel-card-desc" }, ginel.desc)))));
});
};
return (React.createElement(MenuSection, { icon: "fa-solid fa-shirt", id: "ginel-section", title: "Apparels" }, getGinel()));
};
