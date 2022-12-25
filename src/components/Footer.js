import "./Footer.css"

const Footer = () =>{
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Trinity</h1>
                    <p>Choose your favourite destination.</p>
                </div>

                <div>
                    <a href="/">
                        <i className="fa-brands fa-square-facebook"></i>
                    </a>

                     <a href="/">
                        <i className="fa-brands fa-square-instagram"></i>
                    </a>

                     <a href="/">
                        <i className="fa-brands fa-square-twitter"></i>
                    </a>

                     <a href="/">
                        <i className="fa-brands fa-square-whatsapp"></i>
                    </a>

                    <a href="/">
                        <i className ="fa-brands fa-square-youtube"></i>
                    </a>
               </div>
            </div>

            <div className="bottom">
                <div>
                    <h4>Project</h4>
                    <a href="/">World Tour </a>
                    <a href="/"> Bali Indonesia </a>
                    <a href="/"> Pashupatinath Nepal</a>
                    <a href="/"> Kedarnath</a>
                </div>

                <div>
                    <h4>Community</h4>
                     <a href="/">Twitter </a>
                    <a href="/"> Issues</a>
                    <a href="/"> Instagram</a>
                    <a href="/">Linkedin</a>
                </div>

                 <div>
                    <h4>Help</h4>
                     <a href="/">Support </a>
                    <a href="/"> Troubleshooting</a>
                    <a href="/"> Contact Us</a>
                </div>

                 <div>
                    <h4>Others</h4>
                     <a href="/">Terms & Condition</a>
                    <a href="/">Private Policy</a>
                    <a href="/">License</a>
                    <a href="/">Terms of Service</a>
                </div>
            </div>


             
        </div>
    )
}

export default Footer;