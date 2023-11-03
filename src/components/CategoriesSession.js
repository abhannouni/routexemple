import React from 'react';
import { Outlet, useParams ,useOutletContext } from 'react-router-dom';
import { CategoryContext } from "../pages/Categories";

export const CategoriesSession = () => {
  const { title } = useParams();
  // const data  = useOutletContext();
  const data = useOutletContext(CategoryContext);
  console.log(data);

  return (
    <>
      <h2>{title}</h2>
      {data ? (
        <div className="div-as-button">
          <div className="button-session">
            <p className="bold-size">{data.name}</p>
            <p>{data.id}</p>
          </div>
          <div className="button-session">
            <p className="bold-size">{data.name}</p>
            <p>{data.id}</p>
          </div>
        </div>
      ) : (
        <div className="loader">
          <div className="wrapper">
            <div className="line-1"></div>
            <div className="line-2"></div>
            <div className="line-3"></div>
            <div className="line-4"></div>
          </div>
      </div>
      )}
      <Outlet />
    </>
  );
};
