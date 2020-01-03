import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axiosWithAuth from '../auth/axiosWithAuth';

const UploadThree = ({
  setPageBars,
  description,
  handleChange,
  tags,
  addTag,
  removeTag,
  newCollectible,
  history,
}) => {
  useEffect(() => {
    setPageBars(prevState => ({ ...prevState, isPageThree: true }));
  }, [setPageBars]);
  const [newTag, setNewTag] = useState('');

  const handleTagChange = e => {
    setNewTag(e.target.value);
  };

  const handleAddTag = e => {
    e.preventDefault();
    addTag(newTag);
    setNewTag('');
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const { id: userId } = JSON.parse(localStorage.getItem('user'));
    const { data } = await axiosWithAuth().post(
      `/collectibles/${userId}`,
      newCollectible
    );
    history.push(`/collectibles/${data.id}`);
  };

  return (
    <main className="upload-page-3">
      <form onSubmit={handleSubmit}>
        <h3>Description</h3>
        <textarea
          value={description}
          onChange={handleChange}
          name="description"
          placeholder="How would you describe this collectible"
        />
        <div>
          <h3>Tags</h3>
          <p>Keywords to help other users find your item while searching</p>
          <section>
            <input
              value={newTag}
              onChange={handleTagChange}
              placeholder="Tag Name"
            />
            <button type="button" onClick={handleAddTag}>
              &#9547;
            </button>
          </section>
          <div>
            {tags.map(tag => (
              <div key={tag.id} role="listitem" className="tag">
                <span role="listitem">{tag.name}</span>
                <span role="presentation" onClick={() => removeTag(tag.id)}>
                  ╳
                </span>
              </div>
            ))}
          </div>
        </div>
        <button type="submit">Finish</button>
      </form>
    </main>
  );
};

UploadThree.propTypes = {
  setPageBars: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number, name: PropTypes.string })
  ).isRequired,
  addTag: PropTypes.func.isRequired,
  removeTag: PropTypes.func.isRequired,
  newCollectible: PropTypes.shape({
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    story: PropTypes.string,
    sellable: PropTypes.bool,
    description: PropTypes.string,
    tags: PropTypes.arrayOf(
      PropTypes.shape({ id: PropTypes.number, name: PropTypes.string })
    ),
  }).isRequired,
};

export default UploadThree;
