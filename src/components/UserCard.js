function UserCard(props){
    return (
        <div className="user-card">
            <img src={props.img} alt="A lady with a camera"/>
            <p>{props.text}</p>
        </div>
    )
}

export default UserCard;