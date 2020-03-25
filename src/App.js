import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div class="theme-layout">
        <div class="postoverlay"></div>
        <div class="responsive-header">
          <div class="mh-head first Sticky">
            <span class="mh-btns-left">
              <a class="" href="#menu"><i class="fa fa-align-justify"></i></a>
            </span>
            <span class="mh-text">
              <a href="newsfeed.html" title=""><img src="images/logo2.png" alt="" /></a>
            </span>
            <span class="mh-btns-right">
              <a class="fa fa-sliders" href="#shoppingbag"></a>
            </span>
          </div>
          <div class="mh-head second">
            <form class="mh-form">
              <input placeholder="search" />
              <a href="#/" class="fa fa-search"></a>
            </form>
          </div>
        </div>

        <div class="topbar stick">
          <div class="logo">
            <a title="" href="newsfeed.html"><img src="images/logo.png" alt=""></img></a>
          </div>

          <div class="top-area">
            <ul class="main-menu">
              <li>
                <a href="#" title="">Home</a>
              </li>
              <li>
                <a href="#" title="">account settings</a>
                <ul>
                  <li><a href="edit-account-setting.html" title="">edit account setting</a></li>
                  <li><a href="edit-interest.html" title="">edit-interest</a></li>
                  <li><a href="edit-password.html" title="">edit-password</a></li>
                </ul>
              </li>
            </ul>
            <ul class="setting-area">
              <li>
                <a href="" title="Home" data-ripple=""><i class="ti-search"></i></a>
                <div class="searched">
                  <form method="post" class="form-search">
                    <input type="text" placeholder="Search Friend" />
                    <button data-ripple><i class="ti-search"></i></button>
                  </form>
                </div>
              </li>
              <li>
                <a href="#" title="Notification" data-ripple="">
                  <i class="ti-bell"></i><span>20</span>
                </a>
                <div class="dropdowns">
                  <span>4 New Notifications</span>
                  <ul class="drops-menu">
                    <li>
                      <a href="notifications.html" title="">
                        <img src="images/resources/thumb-1.jpg" alt=""></img>
                        <div class="mesg-meta">
                          <h6>sarah Loren</h6>
                          <span>Hi, how r u dear ...?</span>
                          <i>2 min ago</i>
                        </div>
                      </a>
                      <span class="tag green">New</span>
                    </li>
                  </ul>
                  <a href="notifications.html" title="" class="more-mesg">view more</a>
                </div>
              </li>
              <li>
                <a href="#" title="Messages" data-ripple=""><i class="ti-comment"></i><span>12</span></a>
                <div class="dropdowns">
                  <span>5 New Messages</span>
                  <ul class="drops-menu">
                    <li>
                      <a href="notifications.html" title="">
                        <img src="images/resources/thumb-1.jpg" alt=""></img>
                        <div class="mesg-meta">
                          <h6>sarah Loren</h6>
                          <span>Hi, how r u dear ...?</span>
                          <i>2 min ago</i>
                        </div>
                      </a>
                      <span class="tag green">New</span>
                    </li>
                  </ul>
                  <a href="messages.html" title="" class="more-mesg">view more</a>
                </div>
              </li>
            </ul>
            <div class="user-img">
              <img src="images/resources/admin.jpg" alt=""></img>
            </div>
          </div>
        </div>


        <section>
          <div class="gap gray-bg">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div class="row merged" id="page-contents">
                    <div class="col-lg-3">
                      <aside class="sidebar static">
                        <div class="widget">
                          <h4 class="widget-title">Information Channels</h4>
                          <ul class="naves">
                            <li>
                              <i class="ti-announcement"></i>
                              <a href="newsfeed.html" title="">Government jobs</a>
                            </li>
                            <li>
                              <i class="ti-id-badge"></i>
                              <a href="inbox.html" title="">Education & admissions</a>
                            </li>
                            <li>
                              <i class="ti-panel"></i>
                              <a href="fav-page.html" title="">Scientific research</a>
                            </li>
                            <li>
                              <i class="ti-shield"></i>
                              <a href="timeline-friends.html" title="">Legislations</a>
                            </li>
                          </ul>
                        </div>
                        <div class="widget">
                          <h4 class="widget-title">Recent Activity</h4>
                          <ul class="activitiez">
                            <li>
                              <div class="activity-meta">
                                <i>10 hours Ago</i>
                                <span><a href="#" title="">Commented on Video posted </a></span>
                                <h6>by <a href="time-line.html">black demon.</a></h6>
                              </div>
                            </li>
                            <li>
                              <div class="activity-meta">
                                <i>30 Days Ago</i>
                                <span><a href="#" title="">Posted your status. â€œHello guys, how are you?â€</a></span>
                              </div>
                            </li>
                            <li>
                              <div class="activity-meta">
                                <i>2 Years Ago</i>
                                <span><a href="#" title="">Share a video on her timeline.</a></span>
                                <h6>"<a href="#">you are so funny mr.been.</a>"</h6>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </aside>
                    </div>

                    <div class="col-lg-8">
                      <div class="central-meta item">
                        <div class="user-post">
                          <div class="friend-info">
                            <figure>
                              <img src="images/resources/friend-avatar10.jpg" alt="" />
                            </figure>
                            <div class="friend-name">
                              <ins><a href="time-line.html" title="">Janice Griffith</a></ins>
                              <span>published: june,2 2018 19:PM</span>
                            </div>
                            <div class="post-meta">
                              <img src="images/resources/user-post.jpg" alt="" />
                              <div class="we-video-info">
                                <ul>
                                  <li>
                                    <span class="views" data-toggle="tooltip" title="views">
                                      <i class="fa fa-eye"></i>
                                      <ins>1.2k</ins>
                                    </span>
                                  </li>
                                  <li>
                                    <span class="like" data-toggle="tooltip" title="like">
                                      <i class="ti-heart"></i>
                                      <ins>2.2k</ins>
                                    </span>
                                  </li>
                                </ul>
                              </div>
                              <div class="description">

                                <p>
                                  World's most beautiful car in Curabitur <a href="#" title="">#test drive booking !</a> the most beatuiful car available in america and the saudia arabia, you can book your test drive by our official website
													</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="central-meta item">
                        <div class="user-post">
                          <div class="friend-info">
                            <figure>
                              <img src="images/resources/friend-avatar10.jpg" alt="" />
                            </figure>
                            <div class="friend-name">
                              <ins><a href="time-line.html" title="">Janice Griffith</a></ins>
                              <span>published: june,2 2018 19:PM</span>
                            </div>
                            <div class="post-meta">
                              <img src="images/resources/user-post.jpg" alt="" />
                              <div class="we-video-info">
                                <ul>
                                  <li>
                                    <span class="views" data-toggle="tooltip" title="views">
                                      <i class="fa fa-eye"></i>
                                      <ins>1.2k</ins>
                                    </span>
                                  </li>
                                  <li>
                                    <span class="like" data-toggle="tooltip" title="like">
                                      <i class="ti-heart"></i>
                                      <ins>2.2k</ins>
                                    </span>
                                  </li>
                                </ul>
                              </div>
                              <div class="description">

                                <p>
                                  World's most beautiful car in Curabitur <a href="#" title="">#test drive booking !</a> the most beatuiful car available in america and the saudia arabia, you can book your test drive by our official website
													</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>



                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <div class="container">
            <div class="row">
              <div class="col-lg-4 col-md-4">
                <div class="widget">
                  <div class="foot-logo">
                    <div class="logo">
                      <a href="index.html" title=""><img src="images/logo.png" alt="" /></a>
                    </div>
                    <p>
                      The trio took this simple idea and built it into the worldâ€™s leading carpooling platform.
							</p>
                  </div>
                  <ul class="location">
                    <li>
                      <i class="ti-map-alt"></i>
                      <p>33 new montgomery st.750 san francisco, CA USA 94105.</p>
                    </li>
                    <li>
                      <i class="ti-mobile"></i>
                      <p>+1-56-346 345</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-2 col-md-4">
                <div class="widget">
                  <div class="widget-title"><h4>Navigate</h4></div>
                  <ul class="list-style">
                    <li><a href="about.html" title="">about us</a></li>
                    <li><a href="contact.html" title="">contact us</a></li>
                    <li><a href="terms.html" title="">terms & Conditions</a></li>
                    <li><a href="#" title="">RSS syndication</a></li>
                    <li><a href="sitemap.html" title="">Sitemap</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-2 col-md-4">
                <div class="widget">
                  <div class="widget-title"><h4>useful links</h4></div>
                  <ul class="list-style">
                    <li><a href="#" title="">leasing</a></li>
                    <li><a href="#" title="">submit route</a></li>
                    <li><a href="#" title="">how does it work?</a></li>
                    <li><a href="#" title="">agent listings</a></li>
                    <li><a href="#" title="">view All</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div class="bottombar">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <span class="copyright">Â© Winku 2018. All rights reserved.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
