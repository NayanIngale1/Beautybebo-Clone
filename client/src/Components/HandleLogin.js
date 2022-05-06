import React from 'react';
import { Link } from 'react-router-dom';
import { beforeLogin } from './DropDownItems';

export const HandleLogin = () => {
  return (
    <div className="beforeLogin">
      {beforeLogin.map((e) => {
        return (
          <div>
            <Link to={e.path}>{e.title}</Link>
          </div>
        );
      })}
    </div>
  );
};
