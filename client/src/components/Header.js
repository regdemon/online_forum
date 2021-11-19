import Bgcrop from "../images/header-background-2-crop.jpg"
import "./Header.css"

function Header() {
    return (
        <section>
            <div className="studento-bg w-100">
                <img className="studento-bg-img d-none d-md-block " src={Bgcrop} />
                <div className="container d-flex w-75 align-items-baseline ml-6 text-enclose">
                    <p className="text-uppercase my-brand-name">Studento: </p>
                    <p className="my-brand-desc ml-5">Online forum for students</p>
                </div>
            </div>
        </section>
    )
}

export default Header;