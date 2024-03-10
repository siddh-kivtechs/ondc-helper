//  projects script
let n_json=[{
                desc: "Fruits",
                icon :"fa-solid fa-strawberry",
                id: 1,
                image:"https://siddh-kivtechs.github.io/ondc-helper/assets/fruits.jpeg",
                title: "Fruits",
                url: "/fruits"
            },
            {
                desc: " Vegetables",
                icon:"fa-solid fa-brocolli",
                id: 2,
                image:"https://siddh-kivtechs.github.io/ondc-helper/assets/vegetables.jpeg",
                 title: "Vegetables",
                url: "/vegetables"
            },
            {
                desc: "Dairy  ",
                icon :"fa-solid fa-cheese",
                id: 3,
               image:"https://siddh-kivtechs.github.io/ondc-helper/assets/dairy.jpeg",
                title: "Dairy",
                url: "/dairy"
            },
               {
                desc: " Bakery ",
                icon :"fa-solid fa-bread-slice",
                id: 4,
                image: "https://siddh-kivtechs.github.io/ondc-helper/assets/bakery.jpeg",
                title: " Bakery",
                url: "/bakery"
            }
            ];





const Projects = () => {
    const getProjects=()=>{
        return n_json.map((project) => {
           const styles = {
                backgroundImage: `url(${project.image})`
            };

  return (React.createElement("a", { key: project.id, href: project.url, className: "project-card background-image", style: styles },
React.createElement("div", { className: "project-card-content" },
React.createElement("div", { className: "project-card-content-items" },
React.createElement("span", { className: "project-card-title" }, project.title),
React.createElement("span", { className: "project-card-desc" }, project.desc)),
 React.createElement("i", { className: classNames(project.icon, "project-card-icon") }))));
});
};

    return (React.createElement(MenuSection, { icon: "fa-solid fa-basket-shopping", id: "projects-section", scrollable: true, title: "Grocery" }, getProjects()));
};
