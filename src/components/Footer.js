import React from "react";

export default function Footer(props) {
//   window.onscroll = function() {
//     scrollFooter();
//   };

//   function scrollFooter() {
//     if (
//       document.body.scrollTop > 80 ||
//       document.documentElement.scrollTop > 80
//     ) {
//       document.getElementById("footer").style.display = "block";
//     } else {
//       document.getElementById("footer").style.display = "none";
//     }
//   }
  return (
    <footer>
      <div className="footer" id="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4 wow fadeInUp animated animatedFadeInUp fadeInUp">
              <div className="footer_abt">
                <img src="images/get-wash-logo2.png" title="" />
                <p>
                  We are a team of passionate people who believe in the role
                  technology can play to make our everyday life easier. We are
                  young people mostly from product and operations background. At
                  Laundryover we want to redefine how people use local services and
                  use technology to provide them best experience with our
                  promise of Convenience, Quality and Price.
                </p>
              </div>
            </div>

            <div className="col-md-2 wow fadeInUp animated animatedFadeInUp fadeInUp">
              <div className="footer_abt2">
                <h3>Quick links</h3>
                <ul>
                  <li>
                    <a href="services.php">Services</a>
                  </li>
                  <li>
                    <a href="contact-us.php">Contact us</a>
                  </li>
                  <li>
                    <a href="terms.php">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">Laundry</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 wow fadeInUp animated animatedFadeInUp fadeInUp">
              <div className="footer_abt2">
                <h3>Our Services</h3>
                <ul>
                  <li>
                    <a href="services.php">Laundry</a>
                  </li>
                  <li>
                    <a href="services.php">Wash &amp; Fold</a>
                  </li>
                  <li>
                    <a href="services.php">Wash &amp; Iron</a>
                  </li>
                  <li>
                    <a href="services.php">Premium Wash</a>
                  </li>
                  <li>
                    <a href="services.php">Dry Cleaning</a>
                  </li>
                  <li>
                    <a href="services.php">Stain Removal </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 wow fadeInUp animated animatedFadeInUp fadeInUp">
              <div className="footer_abt2">
                <h3>Contact Info</h3>
                <p style={{ fontSize: "20px", textAlign: "left" }}>
                  Laundryover Solutions Pvt Ltd
                </p>
                <p>Office : 12 Ton Dan Street, District 4, HCMC, Vietnam.</p>
                <p>
                  <img src="" />
                  &nbsp; <a href="mailto:info@getwash.in"> info@laundryover.in</a>
                </p>
                <p>
                  <img src="" /> &nbsp; <a href="#">098 432 65 69</a>
                </p>

              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="pull-left">
                  <p>Copyright © laundryover.com 2019. All rights reserved.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="pull-right">
                  <p>
                    Created by:{" "}
                    <a
                      href="www.scorpiotechnologies.com"
                      target="_blank"
                      title=""
                      style={{ color: "#dddddd" }}
                    >
                      www.laundryover.com
                    </a>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
