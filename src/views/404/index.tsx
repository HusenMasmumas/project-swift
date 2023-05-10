import NoPage from "assets/img/nopage.svg";

const NotFoundPage = () => {
  return (
    <div>
      <img
        src={NoPage}
        alt="nodata"
        style={{ width: "100vw", height: "100vh" }}
      />
    </div>
  );
};

export default NotFoundPage;
