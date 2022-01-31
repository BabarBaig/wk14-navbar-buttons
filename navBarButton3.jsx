/* In this file, we’ll learn how to pass onClick events into an anonymous function,
 * which will allow us to pass multiple arguments. We'll pass events to moveToCart(),
 * which will enable us to pass products from the list to the cart when they are clicked.
*/
// Ex 3 - write out all items with their stock number.
// provide a button and use onClick={moveToCart} to move 1 item into the Shopping Cart
// use React.useState to keep track of items in the Cart.
// use React.useState to keep track of Stock items
// list out the Cart items in another column
function NavBar({ stockitems }) {
  const [cart, setCart] = React.useState([]);
  const [stock, setStock] = React.useState(stockitems);
  const { Button } = ReactBootstrap;

  // Note: even can get only 1 argument. But say we want item name:id?
  // IDEA: Use anonymous function to concat the 2 values into 1 string.
  // E.g. event apple:2
  const moveToCart = (id, e) => {
    console.log(id)
    let [name, num] = e.target.innerHTML.split(":");
    let newStock = stock.map((item, index) => {
      if (item.name == name) item.instock--;
      return item;
    });
    setStock(newStock);
  };

  const updatedList = stock.map((item, index) => {
    // We want to send 2+ parameters to moveToCard(), but onClick will
    // only allow one argument to be passed.  IDEA: Use anonymous function
    // to concat the 2 values into 1 string. E.g. event apple:2
    return (
      <Button onClick={e => moveToCart({id:1}, e)} key={index}>{item.name}:{item.instock}</Button>
    );
  });

  // note that React needs to have a single Parent
  return (<>
      <ul style={{ listStyleType: "none" }}>{updatedList}</ul>
      <h1>Shopping Cart</h1>
  </>);
}

const menuItems = [
  { name: "apple", instock: 2 },
  { name: "pineapple", instock: 3 },
  { name: "pear", instock: 0 },
  { name: "peach", instock: 3 },
  { name: "orange", instock: 1 }
];

ReactDOM.render(
  <NavBar stockitems={menuItems} />,
  document.getElementById("root")
);
