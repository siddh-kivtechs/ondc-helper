
const url_14 = "https://siddh-kivtechs.github.io/menu_kivtechs_json/part_14.json";
let p_json=[{
                desc: "Jiomart offer",
                id: 1,
                icon: "fa-solid fa-broom-ball",
                image: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1709918159_OnePlus_Nord_3.jpg?im=Resize=(1680,320)",
                title: "Jiomart offer",
                url:"https://www.jiomart.com/"
            }, {
                desc: " Flipkart  offer  ",
                id: 2,
                icon: " fa-solid fa-starship-freighter",
                image: "https://www.bing.com/images/search?view=detailV2&ccid=4ZOkDbfP&id=E9907EA9A1965603D106805CEBDC54364A31901E&thid=OIP.4ZOkDbfPNrw9y5jGEhThJwHaDt&mediaurl=https%3a%2f%2fs3b.cashify.in%2fgpro%2fuploads%2f2021%2f09%2f16121654%2fFlipkart-Billion.jpg&exph=600&expw=1200&q=flipkart+offer+march+2024&simid=608032396141407694&FORM=IRPRST&ck=EDA356AA55FF9D3CFE2FB0415CC7C08C&selectedIndex=0&itb=0",
                title: " Flipkart offer",
                url:""
            }];
const Movies = () => {
     const  getMovies =  () => {
    // const  getMovies = async () => {
        // const p_json=await get_json(url_14);
        return p_json.map((movie) => {
            const styles = {
                backgroundImage: `url(${movie.image})`
            };
            const id = `movie-card-${movie.id}`;
            return (React.createElement("div", { key: movie.id, id: id, className: "movie-card",href:movie.url },
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
