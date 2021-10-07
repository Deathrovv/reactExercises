import PropTypes from "prop-types";
import Button from "./Button";

const Header = (props) => {
  //can use destructuring for props. Not using now to learn better
  const onClick = (e) => {
    console.log("click");
  };
  return (
    <header className="header">
      <h1>{props.title}</h1>
      <Button color="green" text="Add" onClick={onClick} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

//CSS in JSX
// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };

export default Header;
