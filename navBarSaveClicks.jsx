// use of "props" to set data
function NavBar(props) {
    const [clicks, setClicks] = React.useState([]); // useState()=>browser re-render
    console.log(`clicks: ${clicks}`);   // clicks[] give history of button press
  
    const list = props.menuitems;
    const { Button } = ReactBootstrap;
  
    // each item should have an unique key
    const handleClick = e => {
        // console.log(`clicked on: ${e.target.innerHTML}`);
        setClicks([...clicks, e.target.innerHTML]);     // Record clicks
    };
    
    const updatedList = list.map((listItems, index) => {
        return (<Button onClick={handleClick} key={index}>{listItems}</Button>);
    });
    
    // note that React needs to have a single Parent
    return <ul>{updatedList}</ul>;
}

const menuItems = [1, 2, 3, 4, 5];
ReactDOM.render(
    <NavBar menuitems={menuItems} />,
    document.getElementById("root")
);
  