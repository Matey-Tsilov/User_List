import * as userService from "../../service/UserService.js";

import { useState } from "react";

import UserRow from "./UserRow.js";
import UserDetails from "./UserDetails.js";
import CreateUser from "./CreateUser.js";
import UserDelete from "./UserDelete.js";
import UserEdit from "./UserEdit.js";

const UserSection = (props) => {
  const [selectedView, setSelectedView] = useState({
    user: null,
    action: null,
  });

  const detailsClick = (userId) => {
    userService
      .getById(userId)
      .then((res) => setSelectedView({ user: res, action: "details" }));
  };
  const deleteClick = (userId) => {
    userService
      .getById(userId)
      .then((res) => setSelectedView({ user: res, action: "delete" }));
  };
  const updateClick = (userId) => {
    userService
      .getById(userId)
      .then((res) => setSelectedView({ user: res, action: "edit" }));
  };

  const createClick = () => {
    setSelectedView({ user: null, action: "create" });
  };
  const closeHandler = () => {
    setSelectedView({ user: null, action: null });
  };

  return (
    <>
      <div className="table-wrapper">
        {selectedView.action == "details" && (
          <UserDetails user={selectedView.user} closeHandler={closeHandler} />
        )}
        {selectedView.action == "create" && (
          <CreateUser closeHandler={closeHandler} setUsers={props.setUsers} />
        )}
        {selectedView.action == "delete" && (
          <UserDelete
            setUsers={props.setUsers}
            closeHandler={closeHandler}
            user={selectedView.user}
          />
        )}
        {selectedView.action == "edit" && (
          <UserEdit
            setUsers={props.setUsers}
            user={selectedView.user}
            closeHandler={closeHandler}
          />
        )}

        <table className="table">
          <thead>
            <tr>
              <th>Image</th>
              <th>
                First name
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="arrow-down"
                  className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                  ></path>
                </svg>
              </th>
              <th>
                Last name
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="arrow-down"
                  className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                  ></path>
                </svg>
              </th>
              <th>
                Email
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="arrow-down"
                  className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                  ></path>
                </svg>
              </th>
              <th>
                Phone
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="arrow-down"
                  className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                  ></path>
                </svg>
              </th>
              <th>
                Created
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="arrow-down"
                  className="icon active-icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                  ></path>
                </svg>
              </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {props.query
              ? props.users
                  .filter((u) =>
                    u[props.query.criteria].includes(props.query.search)
                  )
                  .map((u) => (
                    <UserRow
                      key={u._id}
                      user={u}
                      detailsClick={detailsClick}
                      deleteClick={deleteClick}
                      updateClick={updateClick}
                    />
                  ))
              : props.users.map((u) => (
                  <UserRow
                    key={u._id}
                    user={u}
                    detailsClick={detailsClick}
                    deleteClick={deleteClick}
                    updateClick={updateClick}
                  />
                ))}
          </tbody>
        </table>
      </div>

      <button className="btn-add btn" onClick={createClick}>
        Add new user
      </button>
    </>
  );
};

export default UserSection;
