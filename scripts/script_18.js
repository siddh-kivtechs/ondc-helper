
let y_json=[
                   {
              desc:" Mens Casual",
              icon :"fa-solid fa-shirt",
              id:1,
              image:"https://siddh-kivtechs.github.io/ondc-helper/assets/men_casual.jpeg",
              title:"mens casual",
              url:"mens_casual"
            },
  
                   {
              desc:"Mens Formal",
              icon :"fa-solid fa-user-tie",
              id:2,
              image:"https://siddh-kivtechs.github.io/ondc-helper/assets/men_formal.jpeg",
              title:"Mens Formal",
              url:"/mens_formal"
            }
          ,
                    {
              desc:" Womens Casual",
              icon:"fa-solid fa-person-dress",
              id:3,
              image:"https://siddh-kivtechs.github.io/ondc-helper/assets/woman_casual.jpeg",
              title:"womens casual",
              url:"/womens_casual"
            },
  
                   {
              desc:"Womens Formal",
              icon:"fa fa-female",
              id:4,
              image:"https://siddh-kivtechs.github.io/ondc-helper/assets/woman_formal.jpeg",
              title:"woMens Formal",
              url:"/women_formal"
            },
               {
              desc:" Kids",
              icon:"fa-solid fa-child",
              id:5,
              image:"https://siddh-kivtechs.github.io/ondc-helper/assets/kids.jpeg",
              title:"kids",
              url:"/kids_wear"
            },
  
                   {
              desc:"undergarments",
              icon:"fa-solid fa-shirt-tank-top",
              id:6,
              image:"https://siddh-kivtechs.github.io/ondc-helper/assets/undergarments.jpeg",
              title:"Undergarments",
              url:"/undergarments"
            },

                   {
              desc:"socks",
              icon:"fa-solid fa-socks",
              id:7,
              image:"https://siddh-kivtechs.github.io/ondc-helper/assets/socks.jpeg",
              title:"socks",
              url:"/socks"
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
React.createElement("span", { className: "ginel-card-desc" }, ginel.desc)),
 React.createElement("i", { className: classNames(ginel.icon, "ginel-card-icon") }))));
});
};
return (React.createElement(MenuSection, { icon: "fa-solid fa-shirt", id: "ginel-section", title: "Apparels" }, getGinel()));
};
