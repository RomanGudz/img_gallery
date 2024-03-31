import React from 'react';
import PropTypes from 'prop-types';
import formatDate from '../../../../utils/formatDate';
import style from './Photo.module.css';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-css';

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
  return (
    <Masonry className="my-masonry-grid"
      columnClassName="my-masonry-grid_column">
      <li>
        <Link className={style.linkPost} to={`photo/${id}`}>
          <img src={small} />
        </Link>
        <a href={html}>{username}</a>
        <p>{formatDate(createdAt)}</p>
        <p>{likes}</p>
      </li>
    </Masonry>
  );
};

Photo.propTypes = {
  photo: PropTypes.object,
};
