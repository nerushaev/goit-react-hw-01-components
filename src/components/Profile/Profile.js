import './Profile.css'
import propTypes from 'prop-types'

export default function Profile(props) {
  return(
    <div className="profile">
      <div className="description">
      <img
          src={props.userImg}
          alt="User avatar"
          className="user-avatar"
      />
    <p className="name">{props.userName}</p>
    <p className="tag">@{props.userTag}</p>
    <p className="location">{props.userLocation}</p>
      </div>
    <ul className="stats">
      <li className="stats-item">
        <span className="label">Followers</span>
        <span className="quantity">{props.userFollowers}</span>
      </li>
      <li className="stats-item">
        <span className="label">Views</span>
        <span className="quantity">{props.userViews}</span>
      </li>
      <li className="stats-item">
        <span className="label">Likes</span>
        <span className="quantity">{props.userLikes}</span>
      </li>
    </ul>
  </div>
  )
};
  
Profile.propTypes = {
  userName: propTypes.string,
  userImg: propTypes.string,
  userTag: propTypes.string,
  userLocation: propTypes.string,
  userLikes: propTypes.number,
  userViews: propTypes.number,
  userFollowers: propTypes.number,

}