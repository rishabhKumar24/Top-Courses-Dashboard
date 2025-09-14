import { useEffect, useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { Navbar } from './components/Navbar'
import { Filter } from './components/Filter'
import Cards  from './components/Cards'
import {filterData, apiUrl} from './data'


import './App.css'
import Spinner from './components/Spinner';



function App() {

  const [courses, setCourses] = useState('');
  const [loading, setloading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  useEffect( () => {
    const fetchData = async() => {
      setloading(true);
      try {
        const res = await fetch(apiUrl);
        const output  = await res.json();
        //save data into a variable
        setCourses(output.data);
        console.log(output.data);
      } catch (error) {
        toast.error("Something Went Wrong"
        );
      }
      setloading(false);
    }
    fetchData();
  }, []);

  return (
      <div className='min-h-screen flex flex-col'>
        
        <div>
           <Navbar />
        </div>

        <div>
         <div>
           <Filter 
              filterData={filterData}
              category={category}
              setCategory={setCategory}
            />
         </div>

         <div className='w-11/12 max-w-[1200px] mx-auto flex justify-center items-center min-h-[50vh] flex-wrap'>
            {loading ? (<Spinner />) : (<Cards courses={courses} category={category} />)}
         </div>
        </div>



        <ToastContainer />

      </div>
      
  )
}

export default App
