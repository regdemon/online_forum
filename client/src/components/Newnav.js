import Logo from "../images/logo.svg"
import Avatar from "../images/avatar.png"
import { SearchIcon, ChevronDownIcon, UserIcon} from "@heroicons/react/solid"
import AuthButton from "./AuthButton";
import "./Newnav.css"
import { Dropdown } from 'react-bootstrap'


function newNav() {
    return (
        <header className=" w-100 my-bg-black p-1">
            <div className=" d-flex ml-2 mr-2 justify-content-between">
                <img src={Logo} className="w-9 h-9" />
                <form className="bg-gray-600 p-1 px-4 flex rounded justify-content-between">
                    <SearchIcon className="text-white h-7 w-7 ml-0" />
                    <input type="text" className="bg-gray-600 h-6 border-0 text-sm ml-1 text-white search-box-studento" placeholder="Search"></input>
                </form>

                <div className="d-flex">
                    <AuthButton className="mr-3">Login</AuthButton>
                    <AuthButton className="mr-3">Signup</AuthButton>
                    <Dropdown>
                        <Dropdown.Toggle className="my-dropdown p-0 border-0 bg-gray-600 h-20">
                            <button className="bg-gray-600 rounded d-flex border-0">
                                <UserIcon className="bg-gray-600 w-9 h-9 align-self-end" style={{"fill": "#ffffff"}}/>
                                {/* <div className="bg-gray-600">
                                    <img src={Avatar} className="d-block w-8 h-8 " />
                                </div> */}
                                <ChevronDownIcon className="text-gray-500 w-8 h-8 mt-2" />
                            </button>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">View Profile</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Login/Signup</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        </header>
    )
}

export default newNav;