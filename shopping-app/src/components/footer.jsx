import React from "react";
import { LogoNodejs, LogoFacebook, LogoDiscord, LogoTwitter } from 'react-ionicons'

const Footer = () => (
    <div className="footer">
        <div class="footer-basic">
            <footer>
                <div class="social">
                    <LogoNodejs
                        color={'#00000'}
                        rotate
                        height="50px"
                        width="50px"
                        onClick={() => alert('Hi!')}
                        style={{ margin: '0 0 0 1px' }}
                    /><LogoFacebook
                        color={'#1e81b0'}
                        rotate
                        height="50px"
                        width="50px"
                        onClick={() => alert('Hi!')}
                    />  <LogoDiscord
                        color={'#00000'}
                        rotate
                        height="50px"
                        width="50px"
                        onClick={() => alert('Hi!')}
                    /><LogoTwitter
                        color={'#2ea1c4'}
                        rotate
                        height="50px"
                        width="50px"
                        onClick={() => alert('Hi!')}
                    />
                </div>
                <ul class="list-inline">

                    <li class="list-inline-item"><a href="#">Home</a></li>
                    <li class="list-inline-item"><a href="#">Services</a></li>
                    <li class="list-inline-item"><a href="#">About</a></li>
                    <li class="list-inline-item"><a href="#">Terms</a></li>
                    <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
                </ul>
                <p class="copyright">ZILStore© 2021</p>
            </footer>
        </div>
    </div>
);

export default Footer;