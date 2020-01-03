import React, { useEffect } from 'react';

const UploadTwo = ({newCollectable, setCollectable, ...props}) => {

  useEffect(() => {
    props.setPageBars({
      ...props.pageBars,
      isPageOne: true,
      isPageTwo: true
    })
  }, [])

  const handleChange = e => {
    console.log(newCollectable)
    setCollectable({
        ...newCollectable,
        [e.target.name]: e.target.value
    })
}

const handleSubmit = e => {
    e.preventDefault();
    props.history.push('/upload-page/3')
}


  return (
    <div>
      <form>
        <h3>Collector's Story</h3>
        <input
          type="text"
          placeholder="What do you love about this collectable?"
          name="story"
          value={newCollectable.story}
          onChange={handleChange}
        />
        <h4>Are you willing to sell this item?</h4>
        <p>Other Curio users may contact you to discuss a potential sale</p>
        <button>Yes</button>
        <button>No</button>
        <button onClick={handleSubmit}>Continue</button>
      </form>

    </div>
  );
};

export default UploadTwo;
