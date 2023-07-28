import "./FcLogo.scss";

function FcLogo({ height, width }) {
  return (
    <div
      className="logo d-flex"
      style={{ height: height || 300, width: width || "initial" }}
    >
      <img
        className="img-fluid"
        src="/images/logo.png"
        draggable="false"
        alt="logo"
      ></img>
    </div>
  );
}

export default FcLogo;
