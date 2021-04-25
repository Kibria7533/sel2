import React, { Component } from 'react';

class index extends Component {
    render() {
        return (
            <footer class="footer">
            <div class="tie">
              <div class="footer_container">
                <div class="icon_box">
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                  <i class="fa fa-quora" aria-hidden="true"></i>
                  <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </div>
                <div class="img_box">
                  <img src="/catchop.svg" alt="" />
                </div>
                <hr />
                <div class="links">
                  <span>about us</span> <span>cookie policy</span>
                  <span>data policy</span> <span>privacy policy</span>
                  <span>terms of use</span> <span>contact us</span>
                </div>
                <hr />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum,
                  dignissimos eius excepturi quisquam quia eaque eum inventore
                  quibusdam accusamus <br />ad error saepe optio dolores dolore
                  alias exercitationem at sed. Distinctio. Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Voluptatibus, minima?
                </p>
              </div>
            </div>
          </footer>
        );
    }
}

export default index;
