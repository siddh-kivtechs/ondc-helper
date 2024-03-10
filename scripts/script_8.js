
const WeatherSnap = () => {

   // const [temperature] = React.useState(N.rand(23,32));
    const [temperature] = React.useState(32);
 
    return (React.createElement("span", { className: "weather" },
        React.createElement("i", { className: "weather-type", className: "fa-duotone fa-sun" }),
        React.createElement("span", { className: "weather-temperature-value" }, temperature),
        React.createElement("span", { className: "weather-temperature-unit" }, "\u00B0C")));
};
const Reminder = () => {
    return (React.createElement("div", { className: "reminder" },
        React.createElement("div", { className: "reminder-icon" },
            React.createElement("i", { className: "fa-regular fa-home" })),
        React.createElement("span", { className: "reminder-text" },
           ` Location : ${geo_location}   `  ,
            React.createElement("span", { className: "reminder-time" }, 
                ` IP  : ${ip_address} `                 ))));
};
const Time = () => {
    const date = useCurrentDateEffect();
    return (React.createElement("span", { className: "time" }, T.format(date)));
};
const Info = (props) => {
    return (React.createElement("div", { id: props.id, className: "info" },
        React.createElement(Time, null),
        React.createElement(WeatherSnap, null)));
};

