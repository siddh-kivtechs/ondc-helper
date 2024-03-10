//  projects script
let n_json=[{
                desc: "Fruits",
                id: 1,
                image:"",
                title: "Fruits",
                url: "/fruits"
            },
            {
                desc: " Vegetables",
                id: 2,
                image:"",
                 title: "Vegetables",
                url: "/vegetables"
            },
            {
                desc: "Dairy  ",
                id: 3,
               image:"",
                title: "Dairy",
                url: "/dairy"
            },
               {
                desc: " Bakery ",
                id: 4,
                image: "",
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
React.createElement("span", { className: "project-card-desc" }, project.desc)))));
});
};

    return (React.createElement(MenuSection, { icon: "fa-solid fa-basket-shopping", id: "projects-section", scrollable: true, title: "Grocery" }, getProjects()));
};
