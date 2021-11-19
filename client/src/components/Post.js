import "./Post.css"

function Post() {
	return (
		<div className="pl-6 pr-6 my-bg-cold">
			<div className="my-bg-header-blue p-2 my-border-light-blue" style={{"backgroundColor": "#cfeaf5"}}>
				<div className="post-top my-text-dark-blue">Posted by u/raghav_goyal 5 hours ago</div>
				<div className="post-heading">Avoiding the iPhone notch on mobile</div>
				<div>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
				</div>
			</div>
		</div>
	)
}

export default Post;