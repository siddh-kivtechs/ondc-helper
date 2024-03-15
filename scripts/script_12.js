
// const url_12 = "https://siddh-kivtechs.github.io/menu_kivtechs_json/part_12.json";
let k_json=[{
                icon: "fa-solid fa-onion",
                id: 1,
            image: "https://siddh-kivtechs.github.io/ondc-helper/assets/root_vegetables.jpeg",
         
                label: "Root Vegetables",
                name: "ruutu",
                url:"sabji_mandi/root_vegetables/"
            }, {
                icon: "fa-solid fa-leafy-green",
                id: 2,
                image: "https://siddh-kivtechs.github.io/ondc-helper/assets/leafy_vegetables.jpeg",
            
                label: "leafy vegetables",
                name: "leafy vegetables",
                url:"sabji_mandi/leafy_vegetables"
            }];

const Tools = () => {
    const getTools = () => {
        return k_json.map((tool) => {
            const styles = {
                backgroundImage: `url(${tool.image})`
            };
                    return (React.createElement("a", { key: tool.id,href: tool.url, className: "tool-card" },
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
