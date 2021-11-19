import "./CreatePost.css"
import Avatar from "../images/avatar.png"

function CreatePost() {
    return (
        <div className="my-bg-dark-blue pl-5 pr-5 pt-2 pb-2 text-gray-400">
                <div className="my-bg-light-blue d-flex rounded">
                    <img src={Avatar} className="d-block w-10 h-10"/>
                    <form action="" className="flex-grow-1">
                        <input type="text" className="my-text-box my-bg-light-blue w-100 h-100 border-0 text-white ml-2" placeholder="CREATE NEW POST"/>
                    </form>
                </div>
        </div>
    )
}

export default CreatePost;