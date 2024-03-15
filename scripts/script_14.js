
const url_14 = "https://siddh-kivtechs.github.io/menu_kivtechs_json/part_14.json";
let p_json=[{
                desc: "Jiomart offer",
                id: 1,
                icon: "fa-solid fa-megaphone",
                image: "https://siddh-kivtechs.github.io/ondc-helper/assets/jiomart_holi.jpeg",
                title: "Jiomart offer",
                url:"https://www.jiomart.com/"
            }, {
                desc: " Flipkart  offer  ",
                icon:"fa-solid fa-bullhorn",
                id: 2,
                icon: " fa-solid fa-starship-freighter",
                image:"https://siddh-kivtechs.github.io/ondc-helper/assets/flipkart_holi.webp",
                title: " Flipkart offer",
                url:"https://www.flipkart.com/"
            },{
                desc: "Amazon  offer  ",
                icon:"fa-solid fa-megaphone",
                id: 3,
                icon: " fa-solid fa-starship-freighter",
                image:"https://siddh-kivtechs.github.io/ondc-helper/assets/amazon_holi.webp",
                title: "Amazon offer",
                url:"https://www.amazon.in/"
            },
            {
                desc: "Myntra holi party from 14th March to 17th march",
                icon:"fa-solid fa-bullhorn",
                id: 4,
                icon: " fa-solid fa-starship-freighter",
                image:"https://siddh-kivtechs.github.io/ondc-helper/assets/myntra_holi.webp",
                title: "Myntra offer",
                url:"https://www.myntra.com/"
            }

            ];
const Movies = () => {
     const  getMovies =  () => {
    // const  getMovies = async () => {
        // const p_json=await get_json(url_14);
        return p_json.map((movie) => {
            const styles = {
                backgroundImage: `url(${movie.image})`
            };
            const id = `movie-card-${movie.id}`;
            return (React.createElement("a", { key: movie.id, id: id, href: movie.url, className: "movie-card",href:movie.url },
                React.createElement("div", { className: "movie-card-background background-image", style: styles }),
                React.createElement("div", { className: "movie-card-content" },
                    React.createElement("div", { className: "movie-card-info" },
                        React.createElement("span", { className: "movie-card-title" }, movie.title),
                        React.createElement("span", { className: "movie-card-desc" }, movie.desc)),
                    React.createElement("i", { className: movie.icon }))));
        });
    };
    return (React.createElement(MenuSection, { icon: "fa fa-circle-o-notch", id: "movies-section", scrollable: true, title: " PR & Marketting" }, getMovies()));
};
