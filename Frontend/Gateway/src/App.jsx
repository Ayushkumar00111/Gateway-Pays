import React from "react";
import "./index.css";

function App() {
  return (
    <>
      <div className="firstbg">
        <section>
          <div className="snow1"></div>
          <div className="snow2"></div>
          <div className="snow3"></div>
        </section>

        <nav className="navbar">
          <div className="box1"></div>

          <div className="box2">
            <a href="#" className="aa1">Home</a>
            <a href="#" className="aa2">Power Pass</a>
            <a href="#" className="aa">Contact</a>
            <a href="#" className="aa3">Help</a>
          </div>
        </nav>

        <div className="container1">
          <div className="box3">
            <h2>One Day Power Pass</h2>

            <h3 style={{ width: "850px" }}>
              "Unlock the power of premium for a day. With Power Pass, one day
              is all you need to experience it all." Power up your day with
              access like never before. One pass, endless premium possibilities.
              No long waits, no long-term ties.
            </h3>

            <div className="hiden">
              <h3>
                <span>One-Day Paid Website for Time-Limited Task Complete</span>
                <br /><br />
                In today’s fast-paced digital world, time is one of the most
                valuable assets. Many individuals and businesses face the
                challenge of needing a website or service for just one day.
              </h3>

              <center>
                <div className="close">Close</div>
              </center>
            </div>

            <br />
            <div className="readbutton">Read More</div>
          </div>
        </div>
      </div>

      <div className="box41">
        <div className="box4">
          <div className="box5" id="box51"></div>
          <div className="box5" id="box52"></div>
          <div className="box5" id="box53"></div>
          <div className="box5" id="box54"></div>
        </div>

        <div className="box6">
          <center><h1>About One Day Power-Pass</h1></center>

          <h2>
            Your Source for One Day Working <span>Beneficial</span>
          </h2>

          <h3>
            <center>
              My web project is based on the concept of a one-day subscription
              model. Users can access premium features for 24 hours by paying
              a small fee.
            </center>
          </h3>

          <center>
            <div className="more">Go More</div>
          </center>
        </div>
      </div>

      <center>
        <div className="midimage" style={{ top: "-5rem" }}></div>
      </center>

      <div className="box7">
        <div className="box9">
          <div className="box91">
            <div className="gamil">
              <div className="gamilbox">
                <div className="gimg"></div>
                <div className="gname">
                  <h1 style={{ color: "rgb(87,221,221)", fontSize: "3rem", fontStyle: "italic" }}>
                    Gmail
                  </h1>
                  <h2 style={{ fontSize: "1.3rem", fontStyle: "italic" }}>
                    Privacy Concerns
                  </h2>
                </div>
              </div>

              <div className="gamilbox2">
                <h2>
                  Gmail provides a seamless and familiar login experience,
                  allowing users to quickly access your service.
                </h2>
              </div>
            </div>
          </div>

          <div className="box93"></div>

          <div className="box92">
            <div className="gamil">
              <div className="gamilbox">
                <div className="gimg2"></div>
                <div className="gname">
                  <h1 style={{ color: "rgb(87,221,221)", fontSize: "3rem", fontStyle: "italic" }}>
                    Bank
                  </h1>
                  <h2 style={{ fontSize: "1.3rem", fontStyle: "italic" }}>
                    Privacy Concerns
                  </h2>
                </div>
              </div>

              <div className="gamilbox2">
                <h2>
                  Secure and convenient access without creating new accounts.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

