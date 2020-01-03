import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const UploadOne = ({
  setPageBars,
  handleChange,
  name,
  setImgUrl,
  history,
  imageUrl,
}) => {
  const image = useRef(null);
  useEffect(() => {
    setPageBars(prevState => ({ ...prevState, isPageOne: true }));
  }, [setPageBars]);

  useEffect(() => {
    const loadImg = new Image();
    loadImg.src = imageUrl;
    const ctx = image.current.getContext('2d');
    loadImg.onload = () => {
      ctx.drawImage(loadImg, 0, 0);
    };
  }, [imageUrl]);

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
            fd.append('upload_preset', 'enjapvn9');
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
            ctxRef.clearRect(0, 0, 500, 385);
            setImgUrl(data.url);
          },
          'image/jpeg',
          1
        );
      };
    };
  };

  const handleSubmit = e => {
    e.preventDefault();
    history.push('/upload-page/2');
  };

  return (
    <main className="upload-page-1">
      <h2>Share a new collectible</h2>
      <form onSubmit={handleSubmit}>
        <canvas ref={image} width="500" height="385" />
        <label htmlFor="collectibleImg" className="upload">
          Upload Image
          <input type="file" id="collectibleImg" onChange={handleUpload} />
        </label>

        <label htmlFor="collectibleName">
          <input
            name="name"
            id="collectibleName"
            placeholder="Name of Collectible"
            value={name}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Continue</button>
      </form>
    </main>
  );
};

UploadOne.propTypes = {
  setPageBars: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  setImgUrl: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default UploadOne;
