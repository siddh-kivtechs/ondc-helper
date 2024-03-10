

const Menu = () => {
    return (React.createElement("div", { id: "app-menu" },
        React.createElement("div", { id: "app-menu-content-wrapper" },
            React.createElement("div", { id: "app-menu-content" },
                React.createElement("div", { id: "app-menu-content-header" },
                    React.createElement("div", { className: "app-menu-content-header-section" },
                        React.createElement(Info, { id: "app-menu-info" }),
                        React.createElement(Reminder, null)),
                    React.createElement("div", { className: "app-menu-content-header-section" },
                        React.createElement(UserStatusButton, { icon: "fa-solid fa-arrow-right-from-arc", id: "sign-out-button", userStatus: UserStatus.LoggedOut }))),
                React.createElement(QuickNav, null),
                React.createElement("a", { id: "youtube-link", className: "clear-button", href: "https://hack2skill.com/hack/ondc-hackathon/dashboard?teamName=kneogin", target: "_blank" },
                    React.createElement("i", { className: "fa-solid fa-cloud" }),
                    React.createElement("span", null, "Kneogin Igmisarch Private Limited")),
                React.createElement(Projects, null),
                React.createElement(Restaurants, null),
                 React.createElement(Ginel, null),
                React.createElement(Tools, null),
                React.createElement(Movies, null)))));
};
