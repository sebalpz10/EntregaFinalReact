import NavBar from "./NavBar";

const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer_copy">Copyright &copy;</p>
            <NavBar
                hrefLinkIg="https://www.instagram.com"
                hrefLinkTw="https://www.twitter.com"
                hrefLinkYt="https://www.youtube.com"
            >
            </NavBar>
        </footer>
    )
}

export default Footer