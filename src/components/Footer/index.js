import "./Footer.css"

const Footer = () => {
    return(
        <footer className="footer">
            <section>
                <ul  className="logo">
                    <li>
                        <a href="facebook.com" target="_blank">
                        <img src="/fb.png" alt="Facebook Logo" />
                        </a>
                    </li>
                    <li>
                        <a href="twitter.com" target="_blank">
                        <img src="/tw.png" alt="Twitter logo" />
                        </a>
                    </li>
                    <li>
                        <a href="instagran.com" target="_blank">
                        <img src="/ig.png" alt="Instagram Logo" />
                        </a>
                    </li>
                </ul>
            </section>
           <section className="organo">
                <img src="/logo.png" alt="Organo Logo" />
           </section>
           <section className="text">
                <a href="https://github.com/Bianca-L-Carvalho">Github: Bianca-L-Carvalho</a>
           </section>
        </footer>
    )
}

export default Footer