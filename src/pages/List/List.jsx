import React, { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const List = () => {

  const url = 'http://localhost:4000';
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      console.log(response.data);
      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error("Error fetching the list");
      }
    } catch (error) {
      console.error("Error fetching the list", error);
      toast.error("Error fetching the list");
    }
  }

 const removeFood = async (foodId) => {
  try {
    const response = await axios.delete(`${url}/api/food/remove/${foodId}`);
    if (response.data.success) {
      // Filter out the removed food item from the list
      setList(prevList => prevList.filter(item => item.id !== foodId));
      toast.success("Food item removed successfully");
    } else {
      toast.error("Error removing the food item");
    }
  } catch (error) {
    console.error("Error removing the food item", error);
    toast.error("Error removing the food item");
  }
};

  useEffect(() => {
    fetchList();
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <div className='list add flex-col'>
      <p>All Foods List</p>
      <div className='list-table'>
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className='list-table-format'>
              <img src={`${url}/images/` + item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p onClick={() => removeFood(item.id)} className='cursor'>x</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List
