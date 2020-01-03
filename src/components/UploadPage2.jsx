import React, {useEffect} from 'react';

const UploadTwo = (props) => {

  useEffect(()=>{
    props.setPageBars({...props.pageBars, isPageTwo: true})
}, [])

  return (
    <div>
      <form>
        <h3>Collector's Story</h3>
        <input
          type="text"
          placeholder="What do you love about this collectable?"
        />
        <h4>Are you willing to sell this item?</h4>
        <p>Other Curio users may contact you to discuss a potential sale</p>
        <button>Yes</button>
        <button>No</button>
        <button>Continue</button>
      </form>

    </div>
  );
};

export default UploadTwo;
