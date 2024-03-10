//splitting script 13 into  script 13 and Tscript 18
let y_json=[
                   {
              desc:"Text to Speech  SIMPLE",
              id:1,
              image:"https://siddh-kivtechs.github.io/image/man-1600948_1920.png",
              title:"TTS simple",
              url:"https://siddh-kivtechs.github.io/tts_base_1/"
            },
  
                   {
              desc:"Text to Speech  STORY BOOK",
              id:2,
              image:"https://siddh-kivtechs.github.io/image/storytelling-4203628.jpg",
              title:"TTS story book",
              url:"https://siddh-kivtechs.github.io/tts_story_book/"
            }
          ,
                   {
              desc:"WEB SPEECH synthesis",
              id:3,
              image:"https://websta.me/wp-content/uploads/2021/06/text-to-speech-apps-1-2048x1212.jpg",
              title:"JS TTS",
              url:"https://jstts1.kivtechs.cloud/"
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
