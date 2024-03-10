const url_13 = "https://siddh-kivtechs.github.io/menu_kivtechs_json/part_13.json";
let j_json = [{
    desc: "Smartphones ",
    id: 1,
    image: "",
    title: "smartphones",
    url: "electronics/smartphones"
}, {
    desc: "laptops",
    id: 2,
    image: "",
    title: "laptops",
    url: "/electronics/laptops"
}];
const Restaurants = () => {
    const getRestaurants = () => {
        // const getRestaurants = async () => {
        // const j_json=await get_json(url_13);
        return j_json.map((restaurant) => {
            const styles = {
                backgroundImage: `url(${restaurant.image})`
            };
            return (React.createElement("a", { key: restaurant.id, href: restaurant.url, className: "restaurant-card background-image", style: styles },
                React.createElement("div", { className: "restaurant-card-content" },
                    React.createElement("div", { className: "restaurant-card-content-items" },
                        React.createElement("span", { className: "restaurant-card-title" }, restaurant.title),
                        React.createElement("span", { className: "restaurant-card-desc" }, restaurant.desc)))));
        });
    };
    return (React.createElement(MenuSection, { icon: "fas fa-mobile-notch", id: "restaurants-section", title: "Electronics " }, getRestaurants()));
};