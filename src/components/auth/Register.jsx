import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import axiosWithAuth from './axiosWithAuth';

const Register = ({ history }) => {
  const image = useRef(null);
  const [user, setUser] = useState({
    email: '',
    username: '',
    password: '',
    checkPassword: '',
    imageUrl:
      'https://res.cloudinary.com/curioapp/image/upload/v1578051828/defultUser_ea7ajy.png',
  });

  useEffect(() => {
    const loadImg = new Image();
    loadImg.src = user.imageUrl;
    const ctx = image.current.getContext('2d');
    loadImg.onload = () => {
      ctx.drawImage(loadImg, 0, 0);
    };
  }, [user.imageUrl]);

  const handleChanges = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (user.password === user.checkPassword) {
      axiosWithAuth()
        .post('auth/register', user)
        .then(response => {
          localStorage.setItem('token', response.data.token);
          history.push('/UserPage');
        })
        .catch(err => console.log(err.response));
      setUser({
        username: '',
        email: '',
        password: '',
        checkPassword: '',
      });
    }
  };

  const handleUpload = async e => {
    const reader = new FileReader();
    const fileName = e.target.files[0].name;
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = event => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        const elem = document.createElement('canvas');
        const maxSize = 500;
        let { width, height } = img;

        if (width > height && width > maxSize) {
          height *= maxSize / width;
          width = maxSize;
        } else if (height > width && height > maxSize) {
          width *= maxSize / height;
          height = maxSize;
        }
        elem.width = width;
        elem.height = height;
        const ctx = elem.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        elem.toBlob(
          async blob => {
            const file = new File([blob], fileName, {
              type: 'image/jpeg',
              lastModified: Date.now(),
            });
            const fd = new FormData();
            fd.append('upload_preset', 'rlxhchx9');
            fd.append('file', file);
            const { data } = await axios.post(
              'https://api.cloudinary.com/v1_1/curioapp/upload',
              fd,
              {
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
              }
            );
            const ctxRef = image.current.getContext('2d');
            ctxRef.clearRect(0, 0, 500, 500);
            setUser({
              ...user,
              imageUrl: data.url,
            });
          },
          'image/jpeg',
          1
        );
      };
    };
  };

  return (
    <main className="wrapper">
      <h1>Register Here!</h1>
      <form onSubmit={handleSubmit}>
        <canvas ref={image} width="500" height="500" />
        <label htmlFor="userImg" className="upload">
          Upload Image
          <input type="file" id="userImg" onChange={handleUpload} />
        </label>
        <label htmlFor="username" className="input-container">
          <i className="far fa-user icon" />
          <input
            className="input-field"
            type="text"
            value={user.username}
            onChange={handleChanges}
            name="username"
            placeholder="Username"
          />
        </label>
        <label htmlFor="username" className="input-container">
          <i className="far fa-envelope icon" />
          <input
            className="input-field"
            type="email"
            value={user.email}
            onChange={handleChanges}
            name="email"
            placeholder="Email"
          />
        </label>
        <label htmlFor="password" className="input-container">
          <i className="fas fa-unlock icon" />
          <input
            className="input-field"
            type="password"
            value={user.password}
            onChange={handleChanges}
            name="password"
            placeholder="Password"
          />
        </label>
        <label htmlFor="password" className="input-container">
          <i className="fas fa-lock icon" />
          <input
            className="input-field"
            type="password"
            value={user.checkPassword}
            onChange={handleChanges}
            name="checkPassword"
            placeholder="Verify Password"
          />
        </label>
        <button className="registerButton" type="submit">
          Register
        </button>
      </form>
    </main>
  );
};

Register.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Register;
