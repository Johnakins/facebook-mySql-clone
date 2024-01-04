import "./comments.scss"

const Comments = () => {
    const comments = [
      {
        id: 1,
        name: "John Akins",
        userId: 1,
        profilePic:
          "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
        desc: "Lorem ipdnbvcj ;b v. b jczvl.nv cxb;h h",
      },
      {
        id: 2,
        name: "John Akins",
        userId: 1,
        profilePic:
          "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
        desc: "Lorem ipdnbvcj ;b v. b jczvl.nv cxb;h h",
      },
    ];
  return (
    <div className="comments">
      <div className="write">
        <img
          src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <input type="text" placeholder="write a comment" />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
}

export default Comments