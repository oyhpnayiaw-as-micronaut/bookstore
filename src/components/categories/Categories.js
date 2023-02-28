import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCategorystatus,
  statusChecked,
} from 'src/redux/categories/categoriesSlice';

import Button from '../shared/Button';

function Categories() {
  const dispatch = useDispatch();
  const status = useSelector(selectCategorystatus);

  const handleClick = () => {
    dispatch(statusChecked());
  };

  return (
    <div>
      {status && <p>{status}</p>}
      <Button onClick={handleClick}>Check status</Button>
    </div>
  );
}

export default Categories;
