import ReactDOM from 'react-dom';
import { useNavigate, useParams } from 'react-router-dom';
import close from './img/close.svg';
import style from './Modal.module.css';
import { useEffect, useRef, useState } from 'react';
import { usePhoto } from '../../hooks/usePhoto';
import formatDate from '../../utils/formatDate';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as LikeIcon } from './img/like.svg';
import { likePhotoReuqest } from '../../store/likeAPhoto/likeSlice';


export const Modal = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const btnRef = useRef(null);
  const overlayRef = useRef(null);
  const [photo, loading] = usePhoto(id);
  const token = useSelector(state => state.token.token);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const totalLikes = useSelector(state => (state.like.likes ?
    state.like.likes : photo.likes));
  // const likeByUser = useSelector(state => (state.like.likeByUser ?
  //   state.like.likeByUser :
  //   state.photo.like_by_user));
  const dispatch = useDispatch();

  useEffect(() => {
    setIsDisabled(!token);
  }, [token]);

  useEffect(() => {
    if (photo) {
      setIsLoaded(true);
    }
  }, [photo]);

  const handleClick = e => {
    const target = e.target;
    if (target === overlayRef.current) {
      navigate(`/`);
    }
    if (target === btnRef.current) {
      navigate(`/`);
    }
  };
  const handleKeyDown = e => {
    if (e.key === 'Escape') {
      navigate(`/`);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    ReactDOM.createPortal(
      <div className={style.overlay} ref={overlayRef}>
        <div className={style.modal}>
          {loading && isLoaded ? (
            <p>Loading...</p>
          ) : (
            <>
              <img src={photo.urls?.regular} alt={photo.alt_description} />
              <p>{photo.username}</p>
              <p>{formatDate(photo.created_at)}</p>
              <button
                onClick={() => {
                  if (!isDisabled) {
                    dispatch(likePhotoReuqest(id));
                  }
                }}
                aria-disabled={isDisabled}
              >
                <LikeIcon alt='like' />
                <span >{totalLikes}</span>
              </button>
              <button
                className={style.close}
                onClick={() => navigate(`/`)}
              >
                <img src={close} alt='Close' ref={btnRef} />
              </button>
            </>
          )}
        </div>
      </div>,
      document.getElementById('modal-root')
    )
  );
};

