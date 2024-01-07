import { useSelector, useDispatch } from "react-redux";
import { addUser, changeEmail } from "../redux/userSlice";

export const Email = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email);

  const handleChange = (e) => {
    dispatch(changeEmail(e.target.value));
  };

  return (
    <input
      type="email"
      value={email}
      placeholder="Email"
      onChange={handleChange}
    ></input>
  );
};
