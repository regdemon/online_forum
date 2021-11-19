function Button(props){
    return (
        <button  {...props} className={`bg-gray-100 border-0 rounded-pill pl-4 pr-4 font-weight-bold ${props.className}`}/>
    )
}

export default Button;