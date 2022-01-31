// use of "props" to set data.
// NOTE: NavBar is a component.
function NavBar(props) {
  const list = props.menuitems; // Note: all lowercase!
  const { Button } = ReactBootstrap;

  // Redcall the button label gives its number (innerHTML)
  const handleClick = e => {
    console.log(`You clicked button ${e.target.innerHTML}`)
  }

  // each item should have an unique key
  const updatedList = list.map((listItems, index) => {
    // return <li key={index}>{listItems}</li>
    return <Button onClick={handleClick} key={index}>{listItems}</Button>;
  });

  // note that React needs to have a single Parent
  return <ul>{updatedList}</ul>;
}
const menuItems = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NavBar menuitems={menuItems} />,
  document.getElementById("root")
);
