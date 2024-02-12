import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const Job = ({ data }) => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favorites.content);
  const [favourite, setFavourite] = useState(favourites.includes(data._id));
  // const stateReader = useSelector(
  // (state) => state.favouriteList.content.length
  const handleClick = () => {
    if (favourite) {
      dispatch({
        type: "REMOVE FROM FAV.",
        payload: data._id,
      });
    } else {
      dispatch({
        type: "ADD TO FAV.",
        payload: data._id,
      });
    }
    setFavourite(!favourite);
  };
  return (
    <>
      <Row
        className="mx-0 mt-3 p-3 justify-content-between"
        style={{ border: "1px solid #00000033", borderRadius: 4 }}
      >
        <Col xs={3}>
          <Link to={`/${data.company_name}`}>{data.company_name}</Link>
        </Col>
        <Col xs={1}>
          <i
            onClick={handleClick}
            className={`bi bi-star${favourite ? "-fill" : ""}`}
          ></i>{" "}
        </Col>

        <Col xs={8}>
          <a href={data.url} target="_blank" rel="noreferrer">
            {data.title}
          </a>
        </Col>
      </Row>
    </>
  );
};
export default Job;
