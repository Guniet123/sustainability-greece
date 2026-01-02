export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-inner">
                <a href="https://guniet123.github.io" className="navbar-name" target="_blank" rel="noopener noreferrer">
                    Guniet Dhillon
                </a>
            
                <div className="navbar-links">
                    <a href="/">Home</a>
                    <a href="/gilman">Gilman</a>
                    <a href="/trips">Our Trips</a>
                </div>
            </div>
        </nav>
    );
}