import React from "react";

function Card({username = "Sujal" , post = "Cse student at NIT JSR"}) {
  return (
    <figure className ="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
      <img
        className ="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
        src="https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt=""
        width="384"
        height="512"
      />
      <div className ="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p className ="text-lg font-medium">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
            et harum facilis cum mollitia animi, non adipisci omnis! Vel, iste!
          </p>
        </blockquote>
        <figcaption className ="font-medium">
          <div className ="text-sky-500 dark:text-sky-400">{username}</div>
          <div className="text-slate-700 dark:text-slate-500">
            {post}
          </div>
        </figcaption>
      </div>
    </figure>
  );
}

export default Card;
