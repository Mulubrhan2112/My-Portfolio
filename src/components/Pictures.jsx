import "./style.css";
const Pictures = () => {
  return (
    <section className="pictures">
      <div className="picture-card">
        <img
          src="photo_5907009560784866209_y.jpg"
          // style={{ borderRadius: "20%" }}
          alt="Bad Boy"
        />
      </div>
      <div className="picture-card">
        <img
          src="photo_5988009925273127945_y.jpg"
          // style={{ borderRadius: "20%" }}
          alt="Bad Boy"
        />
      </div>
      <div className="picture-card">
        <img src="photo_5988009925273127946_y.jpg" alt="Smart Boy" />
      </div>
      <div className="picture-card">
        <img src="photo_5988009925273127947_y.jpg" alt="Smart Boy" />
      </div>
      <div className="picture-card">
        <img src="photo_5988009925273127949_y.jpg" alt="Elegant Boy" />
      </div>
      <div className="picture-card">
        <img
          src="photo_5988009925273127948_y.jpg"
          // style={{ borderRadius: "20%" }}
          alt="Good Looking Boy"
        />
      </div>
    </section>
  );
};
export default Pictures;
