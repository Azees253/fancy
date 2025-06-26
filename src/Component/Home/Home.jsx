import React, { useState } from "react";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";
import { Latest, MenuItems } from "../../MenuItems";

const Home = () => {
  const navigate = useNavigate();
  const [itemCount, setItemCount] = useState(0);

  return (
    <>
      <div className="header">
        <div className="row">
          <div className="col-2">
            <h1>
              Give Your Electroincs
              <br />A New Items!
            </h1>
            <p>
              Success isn't alway about greatless. it s about consistency
              consisitent hard work gains success graterness will come
            </p>
            <button className="btn" onClick={() => navigate("/product")}>
              Explore Now &#8594;
            </button>
          </div>
          <div className="col-2">
            <img
              src="https://media.istockphoto.com/id/178716575/photo/mobile-devices.jpg?s=612x612&w=0&k=20&c=9YyINgAbcmjfY_HZe-i8FrLUS43-qZh6Sx6raIc_9vQ="
              alt=""
              style={{ width: "600px" }}
            />
          </div>
        </div>
      </div>
      <div className="categories">
        <div className="small-container">
          <div className="row">
            <div className="col-3">
              <img
                src="https://media.istockphoto.com/id/1416168804/photo/blank-screen-smartphone-with-tilt-view-isolated-on-white-background-with-clipping-path.jpg?s=612x612&w=0&k=20&c=lD1WS-9QnfbxWYclgD0PyqEOnbhFhMrqnGqM_W3wa8I="
                alt=""
              />
            </div>
            <div className="col-3">
              <img
                src="https://media.istockphoto.com/id/1457961412/photo/laptop-isolated-on-white-background-with-two-clipping-paths-included-realistic-3d-render.jpg?s=612x612&w=0&k=20&c=6PkxFa_8LkRdY-YES1O6xjr1sDYTyTn-c8JqXEreE10="
                alt=""
              />
            </div>
            <div className="col-3">
              <img
                src="https://media.istockphoto.com/id/611294276/photo/uhd-4k-smart-tv-on-white-background.jpg?s=612x612&w=0&k=20&c=VtBQvDY7t131L2GScWcg6f4mXw1Kcgn3jqLUUD2jP1s="
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="small-container">
        <h2 className="title">Feature Products</h2>
        <div className="row">
          {MenuItems.map((item, index) => {
            return (
              <div className="col-4">
                <img src={item.image} alt="" />

                <h4>{item.title}</h4>
                <div className="rating">
                  <i className={item.rating1}></i>
                  <i className={item.rating1}></i>
                  <i className={item.rating1}></i>
                  <i className={item.rating1}></i>
                  <i className={item.half}></i>
                </div>
                <p>${item.price}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="offer">
        <div className="small-container">
          <div className="row">
            <div className="col-2">
              <img
                src="https://media.istockphoto.com/id/1320208563/photo/fitness-and-sports-accessories-smart-watch-isolated-on-a-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=HTzYe5cRpg3sFfWJjadIp2DdhXjB-tar_FggTiWmEL4="
                alt=""
                className="offer-img"
              />
            </div>
            <div className="col-2">
              <p>Exclusively Available on Ecom</p>
              <h1>Smart Band 4</h1>
              <small>
                The Mi Smart Band 4 is a smart fitness band that comes with a
                0.95-inch AMOLED color display, heart rate monitoring, and up to
                20 days of battery life.
              </small>

              <Link to="/product" className="btn">
                Buy Now &#8594;
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial">
        <div className="small-container">
          <div className="row">
            <div className="col-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo, quis?
              </p>
              <div className="rating">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
              </div>
              <img
                src="data:image/jpeg;base64,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"
                alt=""
              />
              <h3>Sean Parker</h3>
            </div>
            <div className="col-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo, quis?
              </p>
              <div className="rating">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
              </div>
              <img
                src="data:image/jpeg;base64,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"
                alt=""
              />
              <h3>Mike Smith</h3>
            </div>
            <div className="col-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo, quis?
              </p>
              <div className="rating">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
              </div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6DkFKjdCWKT7PJUZ8OeGHuBSKzncTlyMF6g&s"
                alt=""
              />
              <h3>Mabel Joe</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="brands">
        <div className="small-container">
          <div className="row">
            <div className="col-5">
              <img
                src="data:image/png;base64,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"
                alt=""
              />
            </div>
            <div className="col-5">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOL7QHgHC9oq-LkWLrzMcR3pZOmtbNboF2RA&s"
                alt=""
              />
            </div>
            <div className="col-5">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6GmCWjRcQJXm_-fZKCkY_hTB_56hsGodG8A&s"
                alt=""
              />
            </div>
            <div className="col-5">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAR0AAACxCAMAAADOHZloAAAAyVBMVEX///8ROYQAneEWLG8AmeAAmOAAm+AAMIAAKn4ROoUAM4EALX8VL3Ryg67d4u0AnuIAIXvb8PsLNoMAKH0XJmoAJXzm9fxTtOjm6vH0/P7J0eGqtc7w8/jf8/sOZKRab6JPaJ9HYpyToMF0xO2GlbktqOQTNHzV2+hywezH6PiFy+/BydwApOQAHHqUz/A4WJd5i7MrS461vtQAE3cPHGREmtIcRIuv3PQTO35ZuOmdqsgpSY0PXqCo1/Nqf60GjNAKfsAMWJ4gcbKoCXgdAAAGqklEQVR4nO2ae1fiSBDFkUk6IRmJJPIUFxQYRFDEcXGE0Xl8/w+1XdXdQB44hzksZHbv7w9PTmgguXbVrapQKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwB9P4+F0k4f+otU+9jXlh07VieG71dlD49hXlROaYXiSJPRLrWNfVz5oVFPikD5u+dgXlgtameqcON1jX1guuHAz1TmJsHkkD062Ou7jsa8sD1x52er418e+sjxQMpZV2mSrOuU1v1EV1Sorau8vlDR3//x9016lnY8xPmVHVv/z2Ypodr2jQCN7g8lNZevCe16w24f/Gwy1ZZU+fojz9HfWxU83i6PQne9WNd5axTVC2M/bFvaEfL2+673sn5VlJcT5cG6LUWp1ex4vHb3lTl92I4qbCHvb7qnLhdbtb9zOnun7W9T5EohBKvKHbHCe67q+kqm6k7PVWR3Lsi0lk3jJXtecyNe376zD0fGy1Tn/GRTt1OYZRyROd7FY9Gf8Rud0h++qTViUe4nSSWxJLZWA1Nmelg7GTIfKp2TaEUHRuk+uXlAcuhd02FjSO73ODt9VIUnEgI9f1DbK9qUR5Sf7fVc7CFF2Uj7/Gsgb6SVXn1JkuapD5TJyJ3X4psUNHz/bvHmyF77KF0Ww873sneHZFnUC+s+m1OHS0Vc9BqujIqvZuu503i6kv5cbDaqD2vF6iMsjddNF+5VPsTo6siqvN/WXexlIlxLaMbc5sazHKDPtPH0L1jeypq2iSYVD1zNRtpj7vuM5kTd8rIah/yZVdDzPmZm39V3P86pDZVk6md3zPiIFRgNhCSEs+75JW2ZSU9k7vXEPz3WmZSlxilYyK5e5ylF3PeR3VsuFdjcKjb9T5Pl95YShO1TvarnyddKMU7FOtgM6psR2axubt0kxMsrmICeWdeqk1Xn6YrE4IrhMrGZFVDC1uPIJ57JAZJlCzwvlH9pOCxLkRMlU0BsuLLWVTxeLdK5Z57pQJt6eyj8S+Vdvp0u2rHS1dXBWlnWueTr/8j0IVDWSinxVOs5ny2Wpym88eyyc0rnQn3evSkrp6lh/rt5kp74+WaObLgaDyWSi9ossd1RytoJBfWKZc8rb7OS/5giY0dfHr38xP78LrU1G2jHTjjDU01b/qtC6o5Cac1HIOpx41F1wxHqUvjmzuQ/yqGIX1/uEDoq1Am0nIW4pkz0LE2wkmdhiZ4ekrC3L+zkJDKs6f5Ba3olNO0J32uZTYUlnGLK0cEpeNXR1jDUoAj3eRa92vI+QnQpvHUv/FzhRU667tTK//eCYsan3LSgmEOk2q616UI9xXO+hXWjfaRUYijyvy4e0lA7fOK5YvZ4wW4csStQr2pxMANeEznVUKeqy6KiYHrQkkuqIdFypfXDidDvE24LihuQNS6ZTp0bDeeNDCi2ZivkLqmpUVFelcp146ZH2TcpE1uqLuALSlpWu0w+PGZvOEuIIK8gw1DLtg3C6eYruPpyafoAk0VMzftTh9Mmv9AC/qUx8s3u6ZL3MHq3ogKrlpQfV45rwa7CSRWLbQS+ryeEEq31ao7aI2Tu0t6KxOmY3dMi6HPUyG3o8nbA5rfYOFYtkWZd5sSzHJGWtjni5ldyPshtAnnaoHtRwsVHYFDqOMaqCbljZ4fWQgy0rPrO43GhLC6/GskZkWcU93uVv0tB9hPc92GZTm7zR3VdjT0lVn+b3ZcncuuLAW+r2ivM1vWZmHKqzivcHgSoAR81m5UYZ+kh5Vx4sa2jU0Zb1i1TIndVZfJashoV+uJz7bPfrtKQedqzUUmPTRK5Xo1QhJhNdBInKOsKOzWPCsqx3U2GbC+BS/ORYbxFZIPqlk82RhvJDk4YKsR7UwKbF+hS5exFBMz9jU2NZS5N23u1typEXhs5V4uziTpWIzt34wQ/DaPWgh6V31zm8Tp24nRh3VUzdbPc43UzY294byB+Oqbqx8IdR512jaFxNp9NZapDcmlajyI06jcLpfLmc67JZ5R1vw/57A0lqLNF84cc3g+fCSPZfExnaNWrEJjkYDF65/IsdV1vWtjHvryiPx+PUoxtSPnSGWevj1EbPzzkYIadpq4eajZ56zrTPcdx1tNli/NHUdfDvr7dpkTjOLkPn3KJq/H32Nu2Zt1lD/9HUAv1oe29G8fY5qlbP/iO/cTG/i9jbrx7K+ikEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8j/kHuIyEiXslUgsAAAAASUVORK5CYII="
                alt=""
              />
            </div>
            <div className="col-5">
              <img
                src="data:image/png;base64,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"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
