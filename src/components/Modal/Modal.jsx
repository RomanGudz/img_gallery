import ReactDOM from 'react-dom';
import { useNavigate, useParams } from 'react-router-dom';
import close from './img/close.svg';
import style from './Modal.module.css';
import { useEffect, useRef, useState } from 'react';
import { usePhoto } from '../../hooks/usePhoto';
import formatDate from '../../utils/formatDate';
import { useDispatch, useSelector } from 'react-redux';
import like from './img/like.svg';

export const Modal = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const btnRef = useRef(null);
  const overlayRef = useRef(null);
  const [photo, loading] = usePhoto(id);
  const token = useSelector(state => state.token.token);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  console.log(photo);

  useEffect(() => {
    setIsDisabled(!token);
  }, [token]);

  useEffect(() => {
    if (photo) {
      setIsLoaded(true);
    }
  }, [photo]);

  const likes = () => {
    dispatch();
  };

  const handleClick = e => {
    const target = e.target;
    if (target === overlayRef.current) {
      navigate(`/photos/`);
    }
    if (target === btnRef.current) {
      navigate(`/photos/`);
    }
  };
  const handleKeyDown = e => {
    if (e.key === 'Escape') {
      navigate(`/photos/`);
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
          {loading && isLoaded && photo ? (
            <p>Loading...</p>
          ) : (
            <>
              <img src={photo.urls?.regular} alt={photo.alt_description} />
              <p>{photo.username}</p>
              <p>{formatDate(photo.created_at)}</p>
              <button
                onClick={likes}
                aria-disabled={isDisabled}
              >
                <img src={like} alt='like' />
                <span>{photo.likes}</span>
              </button>
              <button
                className={style.close}
                onClick={() => navigate(`/photos`)}
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

