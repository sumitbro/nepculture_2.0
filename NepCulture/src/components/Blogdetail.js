import { Link } from 'react-router-dom';
import './Blogdetail.css';

function Blogdetail() {
  return (
    <div className='blog_detail'>
      <div className="singlePost">
        <div className="singlePostWrapper">
          <img
            className="singlePostImg"
            src="http://d7.drunkenboat.com/sites/default/files/styles/adaptive/public/Jeevan%20Rajopadhyay.jpg?itok=9h2gB9-H"
            alt=""
          />
          <h1 className="singlePostTitle">
            An Artist Who Paints for Himself
          <div className="singlePostEdit">
              <i className="singlePostIcon far fa-edit"></i>
              <i className="singlePostIcon far fa-trash-alt"></i>
            </div>
          </h1>
          <div className="singlePostInfo">
            <span>1 day ago</span>
          </div>
          <p className="singlePostDesc">
            Put simply, adding paints to your canvas enhances the custom look for an artist. This is just a demo of how the artists write blogs.
            This is just a demo of how the artists write blogs. This is just a demo of how the artists write blogs. This is just a demo of how the artists write blogs.
            This is just a demo of how the artists write blogs. This is just a demo of how the artists write blogs. This is just a demo of how the artists write blogs.This is just a demo of how the artists write blogs.
            This is just a demo of how the artists write blogs. This is just a demo of how the artists write blogs.
            <br />
            <br />
            About my painting: Initially I had practiced landscape in watercolor. I enjoyed several years in landscape. Slowly I was attracted to abstract painting. Still there is essence of landscape in my paintings and I love to work with colors.
            About my painting: Initially I had practiced landscape in watercolor. I enjoyed several years in landscape. Slowly I was attracted to abstract painting. Still there is essence of landscape in my paintings and I love to work with colors.
            Thats how I went on to painting day after day.
        </p>
        </div>
        <Link to='profile' style={{ textDecoration: 'none' }}>
          <div className="sidebar">
            <div className="sidebarItem">
              <span className="sidebarTitle">Author</span>
              <img
                src="https://webimap.org/create_thumb.php?src=images/artist/ff9cceecb1667f61de0894a0c108d2a6.jpg&w=200&h=200"
                alt=""
              />
              <p>
                Jeevan Rajopadhyay
          </p>
            </div>
          </div>
        </Link>
      </div>
      <div className='video'>
        <iframe src="https://www.youtube.com/embed/wwXqkV-twR4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>
      </div>
    </div>
  );
}

export default Blogdetail;
