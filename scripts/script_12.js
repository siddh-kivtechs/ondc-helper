
const url_12 = "https://siddh-kivtechs.github.io/menu_kivtechs_json/part_12.json";
let k_json=[{
                icon: "fas fa-photo-video",
                id: 1,
            image: "https://siddh-kivtechs.github.io/company_images/Adobe-Logo.png",
         
                label: "Root Vegetables",
                name: "ruutu",
                url:""
            }, {
                icon: "fab fa-aws",
                id: 2,
                image: "https://siddh-kivtechs.github.io/company_images/aws_logo_cmyk-2a9ix9v.jpg",
            
                label: "leafy vegetables",
                name: "leafy vegetables",
                url:""
            }];

const Tools = () => {
    const getTools = () => {
        return k_json.map((tool) => {
            const styles = {
                backgroundImage: `url(${tool.image})`
            };
                    return (React.createElement("div", { key: tool.id, className: "tool-card" },
                React.createElement("div", { className: "tool-card-background background-image", style: styles }),
                React.createElement("div", { className: "tool-card-content" },
                    React.createElement("div", { className: "tool-card-content-header" },
                        React.createElement("span", { className: "tool-card-label" }, tool.label),
                        React.createElement("span", { className: "tool-card-name" }, tool.name)),
                    React.createElement("i", { className: classNames(tool.icon, "tool-card-icon") }))));
        });
    };
    return (React.createElement(MenuSection, { icon: "fa-solid fa-shop", id: "tools-section", title: " SABJI MANDI" }, getTools()));
};
