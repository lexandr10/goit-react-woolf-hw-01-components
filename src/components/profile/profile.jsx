import stl from './profile.module.css';
const Profile = ({ data }) => (
  <div className={stl.profile} key={data.id}>
    <div className={stl.user}>
      <img className={stl.image} src={data.avatar} alt="User avatar" />
      <p className={stl.name}>{data.username}</p>
      <p className={stl.text}> {data.tag}</p>
      <p className={stl.text}>{data.location}</p>
    </div>

    <ul className={stl.list}>
      <li className={stl.item}>
        <span className={stl.titleList}>Followers</span>
        <span className={stl.active}>{data.stats.followers}</span>
      </li>
      <li className={stl.item}>
        <span className={stl.titleList}>Views</span>
        <span className={stl.active}>{data.stats.views}</span>
      </li>
      <li className={stl.item}>
        <span className={stl.titleList}>Likes</span>
        <span className={stl.active}>{data.stats.likes}</span>
      </li>
    </ul>
  </div>
);
export default Profile;
