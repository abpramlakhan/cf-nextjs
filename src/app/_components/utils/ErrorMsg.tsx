const ErrorMsg = (props:{
    msg: string
}) => {
    if (props.msg) {
        return (
            <p className="mb-0">{props.msg}</p>
        )
    }else{
        return ""
    }

}

export default ErrorMsg