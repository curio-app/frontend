import React from 'react';

const SingleItemPage = () => {
    return (
        <div>
            <section>
                <img alt='the product' src='https://via.placeholder.com/150' />
                <h2>SNES Crash Test Dummies</h2>
                <p>Shared by <span>username</span></p>
                <p>Liked <span>100</span> times</p>
                <button>Like <span><i class="far fa-heart"></i></span></button>
                <button>Liked <span><i class="fas fa-heart"></i></span></button>
                <div>
                    <h3>Looking to purchase?</h3>
                    <p>
                        <i class="fab fa-amazon"></i>
                        <i class="fab fa-ebay"></i>
                        <i class="fab fa-etsy"></i>
                        <i class="far fa-envelope"></i>
                    </p>
                </div>


            </section>
            <section>
                <h2>Collector's Story</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, optio, beatae cum tempore numquam perspiciatis inventore suscipit quos, officiis eos cupiditate a sint alias temporibus ducimus consectetur deserunt hic accusantium!</p>
            </section>
            <section>
                <h2>Description</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, optio, beatae cum tempore numquam perspiciatis inventore suscipit quos, officiis eos cupiditate a sint alias temporibus ducimus consectetur deserunt hic accusantium!</p>
            </section>
            <section>
                <h2>Tags</h2>
                <p>tag1</p>
                <p>tag2</p>
            </section>
        </div>
    )
}

export default SingleItemPage;