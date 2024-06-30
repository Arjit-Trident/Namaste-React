//const heading = React.createElement("h2", {id: "heading" , xyz: "abc"}, "hello from React");

const parent = React.createElement("div",{id: "parent"},
            React.createElement("div", {id: "child"},
                [React.createElement("h1", {} , "i am arjit"),
                        React.createElement("h2", {} , "i am jcb"),]

            )
        );
console.log(parent);

        const root = ReactDOM.createRoot(document.getElementById("root"));

        root.render(parent);