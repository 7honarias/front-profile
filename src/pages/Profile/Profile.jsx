import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPortfile, getRepos } from "../../actions";
import "./Profile.css";

export default function Profile() {
  const { id } = useParams();
  const user = useSelector((e) => e.portfile);
  const repositories = useSelector((e) => e.repositories);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Profile");
    dispatch(getPortfile(id));
    dispatch(getRepos(user.githubUserName));
  }, [id, user.githubUserName, dispatch]);

  return (
    <div className="body">
    
      <div className="aside">
        <img className="portfile-img" src={user.imageUrl} alt="" />
        <div className="repos-box">
          <h3>repositories:</h3>
          <ul>
            {repositories.length === 0 && repositories ? (
              <div></div>
            ) : (
              repositories.map((repository) => (
                <li key={repository.name}>
                  <a href={repository.url} target="_blank" rel="noreferrer">
                    {repository.name}
                  </a>
                  <em> by {user.githubUserName}</em>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
      <div className="contenido">
        <h1>{user.userName}</h1>
        <h3>Occupation: {user.occupation}</h3>
        <div className="description">
          <div className="description-title">
            <h3>My Work Experience</h3>
            <hr/>
          </div>
          <p> {user.description}</p>
        </div>
      </div>
    </div>
  );
}
