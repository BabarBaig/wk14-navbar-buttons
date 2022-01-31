// Ex 1 - remove all even numbers from the NavBar
// then make a Button for each instead of an <li>
function NavBar({ menuItems }) {
  const { Button } = ReactBootstrap;
  // const updatedList = menuitems.map((listItems, index) => {
  // state = state.filter((val, index2) => index2 != index)  // remove clicked button
  const updatedList = menuItems.filter((val, i) => {
    !(i % 2)
  // const updatedList = menuitems.map((listItems, index) => {
    return <li key={index.toString()}>{listItems}</li>;
  });
  // note that React needs to have a single Parent
  return <ul style={{ listStyleType: "none" }}>{updatedList}</ul>;
}
const menuItems = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NavBar menuitems={menuItems} />,
  document.getElementById("root")
);
