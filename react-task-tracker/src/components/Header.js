import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router";

const Header = (props) => {
  //can use destructuring for props. Not using now to learn better
  //   const onClick = (e) => {
  //     console.log("click");
  //   };
  const location = useLocation();
  return (
    <header className="header">
      <h1>{props.title}</h1>
      {location.pathname === "/" && (
        <Button
          color={props.showAdd ? "red" : "green"}
          text={props.showAdd ? "Close" : "Add"}
          onClick={props.onAdd}
        />
      )}
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
