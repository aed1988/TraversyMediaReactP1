import React, { Fragment, useEffect, useContext } from 'react';
import Repos from '../repos/Repos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faCheckSquare, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import GithubContext from '../../context/github/githubContext';


const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { getUser, loading, user, repos, getUserRepos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
  }
  /*  Insert this to mimic componentDidMount().  In the [] you can specify a specific requirement for the methods to run again.
  Otherwise getUser & getUserRepos will loop infinitely. ((Not seeing this in network, maybe due to an update for React))*/
  // eslint-disable-next-line react-hooks/exhaustive-deps
  , [])

 
  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    company,
    hireable
  } = user;


  if (loading) return <FontAwesomeIcon icon = { faSpinner } spin size='3x' style={{ display:'block', margin:'auto'}} />

  return (
    <Fragment>
      <Link to='/' className='btn btn-light'>Back to search</Link>
      Hireable: {' '}
      { hireable ? <FontAwesomeIcon icon={ faCheckSquare } className='text-success' /> : <FontAwesomeIcon icon={ faTimesCircle } className='text-danger'/> }
      <div className='card grid-2'>
        <div className='all-center'>
          <img src={ avatar_url } className='round-img' style={{width:'150px'}} alt='Profile'/>
          <h1>{ name }</h1>
          <p> { location }</p>
        </div>
        <div>
          { bio && 
          <Fragment>
            <h3>
              Bio:
            </h3>
            <p>{ bio }</p>
          </Fragment>
        }
        <a href={ html_url } className='btn btn-dark my-1'>
          Visit github profile
        </a>
        <ul>
          <li>
            { login &&
              <Fragment>
                <strong>Username: { login }</strong>
              </Fragment>
            }
          </li>
          <li>
            { company &&
              <Fragment>
                <strong>Company: { company }</strong>
              </Fragment>
            }
          </li>
          <li>
            { blog &&
              <Fragment>
                <strong>Website: { blog }</strong>
              </Fragment>
            }
          </li>
        </ul>
        </div>
      </div>

      <div className='text-center'>
        <div className='badge badge-primary'>Followers: { followers }</div>
        <div className='badge badge-success'>Following: { following }</div>
        <div className='badge badge-light'>Public Repos: { public_repos }</div>
        <div className='badge badge-dark'>Public Gists: { public_gists }</div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  )
}


export default User
