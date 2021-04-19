import React from 'react';
import profilePicture from "../../../static/assets/images/bagel-honey.jpg";

export default function () {
  return (
    <div className="content-page-wrapper" style={{
      marginTop: "84.8px"
    }}> 
      <div className="right-column">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum est fuga dolorum officiis quo ratione vero voluptatibus veniam optio, eius fugit, blanditiis facilis quas! Maxime neque ipsum voluptate. Nobis, expedita?
        Enim quod laboriosam quam ratione dolore consectetur ab cupiditate voluptates quis illum ipsum tenetur reiciendis recusandae doloribus velit dolorem nam incidunt expedita maiores, harum ea nobis placeat. Quis, praesentium maxime?
        Quisquam voluptatum molestiae facilis cum labore tempora accusantium, est facere eligendi consectetur ut dolor quas fugit commodi magnam ab? Sapiente, eaque! Incidunt cumque explicabo autem corporis omnis, deserunt natus aspernatur.
        Delectus numquam iste optio distinctio corrupti autem velit, vel soluta maxime, ratione nemo et possimus exercitationem illum, est aliquam! Aspernatur, culpa temporibus deserunt quo fugit quaerat at neque beatae distinctio.
        Quasi dolorem, veritatis rem quam praesentium, voluptate doloribus ea fugiat officiis modi suscipit sequi facilis adipisci. Omnis, numquam voluptatibus dolor voluptas beatae voluptatem et corporis, sed culpa corrupti pariatur nisi.
      </div>
      <div className="left-column"
      style={{
        background: "url(" + profilePicture + ") no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }} />
    </div>
  );
}