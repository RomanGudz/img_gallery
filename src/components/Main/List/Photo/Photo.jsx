import React from 'react';
import PropTypes from 'prop-types';
import formatDate from '../../../../utils/formatDate';
import style from './Photo.module.css';
import { Link } from 'react-router-dom';

export const Photo = ({ photo }) => {
  const {
    links: { html },
    username
  } = photo.user;
  const {
    likes,
    urls: { small },
    created_at: createdAt,
    id
  } = photo;
  return (<li>
    <a href={html}>{username}</a>
    <Link className={style.linkPost} to={`photo/${id}`}>
      <img src={small} />
    </Link>
    <p>{formatDate(createdAt)}</p>
    <p>{likes}</p>
  </li>);
};

Photo.propTypes = {
  photo: PropTypes.object,
};
