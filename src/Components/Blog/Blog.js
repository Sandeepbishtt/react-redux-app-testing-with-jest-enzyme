import ListItem from '../listItem/index';
import React, { useState } from "react";
// import { useSelector } from "react-redux";
import { connect } from 'react-redux';
import SharedButton from "../SharedButton";
import { fetchPosts } from "../../Redux/Actions";

import CardDetail from "./Card/CardDetail";

const Blog = (props) => {

const [hideBtn,setHideBtn] = useState(true)

const clickHandler = () =>{
  props.fetchPosts()
  updateStateBtn()
}

const updateStateBtn = () =>{
  setHideBtn(prev => !prev)
}

const exampleMethod_returnsAValue =(number) =>{
  return number + 1
}


  // const data = useSelector(state => state.posts)
  // console.log(data);
  
  
  
  const blogData = [
    {
      img: "images/example-blog01.jpg",
      title: "Velit anim eiusmod labore sit amet",
      postHistory: "Posted 2 days ago",
      share: "Share via social media",
      content:
        "Excepteur reprehenderit sint exercitation ipsum consequat qui sit id velit elit. Velit anim eiusmod labore sit amet. Voluptate voluptate irure occaecat deserunt incididunt esse in. Qui ullamco consectetur aute fugiat officia ullamco proident Lorem ad irure. Sint eu ut consectetur ut esse veniam laboris adipisicing aliquip minim anim labore commodo.",
    },
    {
      img: "images/example-blog02.jpg",
      title: "Velit anim eiusmod labore sit amet",
      postHistory: "Posted 4 days ago",
      share: "Share via social media",
      content:
        "Excepteur reprehenderit sint exercitation ipsum consequat qui sit id velit elit. Velit anim eiusmod labore sit amet. Voluptate voluptate irure occaecat deserunt incididunt esse in. Qui ullamco consectetur aute fugiat officia ullamco proident Lorem ad irure. Sint eu ut consectetur ut esse veniam laboris adipisicing aliquip minim anim labore commodo.",
    },
    {
      img: "images/example-blog04.jpg",
      title: "Velit anim eiusmod labore sit amet",
      postHistory: "Posted 4 days ago",
      share: "Share via social media",
      content:
        "Excepteur reprehenderit sint exercitation ipsum consequat qui sit id velit elit. Velit anim eiusmod labore sit amet. Voluptate voluptate irure occaecat deserunt incididunt esse in. Qui ullamco consectetur aute fugiat officia ullamco proident Lorem ad irure. Sint eu ut consectetur ut esse veniam laboris adipisicing aliquip minim anim labore commodo.",
    },
  ];

  return (
    <div data-test='blogComponent' key='1'>
    {hideBtn && <SharedButton clickHandler={clickHandler} />}
    {props.posts.length && props.posts.map(val =>{
      return <ListItem title={val.title} desc= {val.body} key={val.id}/>
    })}
    <main id='' className="mdl-layout__content">
      <div className="mdl-grid portfolio-max-width">
        {blogData.map((val, index) => {
          return <CardDetail key={index} val={val} />;
        })}
        
      </div>
    </main>
    </div>
  );
};


const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, {fetchPosts})(Blog);
