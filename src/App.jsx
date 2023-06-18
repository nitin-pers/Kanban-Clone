import React, { useState } from 'react';

import ProfileImage from '../public/static/Profile.jpg';
import ProfileImage1 from '../public/static/image1.jpg';
import ProfileImage2 from '../public/static/image2.jpg';
import ProfileImage3 from '../public/static/image3.jpg';

import './index.css';
import SideBar from './Components/SideBar';

const App = () => {
  
     const [todoItems, setTodoItems] = useState([
    { id: 1, title: 'Task 1', text1: 'Low', text2: 'Brainstorming', description: 'Brainstorming brings team members diverse experience into play' },
    { id: 2, title: 'Task 2', text1: 'Low', text2: 'Research', description: 'Paragraph User research helpsyou to create an optimal product for user' },
    { id: 3, title: 'Task 3', text1: 'Low', text2: 'WireFrames', description: 'Low fidelity wireframes include the most basic content and visuals.' }
  ]);

  const [inProgressItems, setInProgressItems] = useState([
    {
      id: 4,
      title: 'Task 4',
      text1: 'Low',
      text2: 'Onboarding Illustration',
      
      imageUrl: '../public/static/Onprogress1.jpg'
    },
    {
      id: 5,
      title: 'Task 5',
      text1: 'Low',
      text2: 'Moodboard',
  
      imageUrl: '../public/static/onprogress2.jpg'
    }
  ]);

  const [doneItems, setDoneItems] = useState([
    { id: 7, title: 'Task 7', text1: 'Completed', text2: 'Mobile App Design',  imageUrl: '../public/static/onprogress3.jpg' },
    { id: 8, title: 'Task 8', text1: 'Completed', text2: 'Design System', description: 'It just needs to adapt the UI from what you did before, but with a more user-friendly interface. ' }
  ]);

  const handleDragStart = (event, itemId, category) => {
    event.dataTransfer.setData('itemId', itemId);
    event.dataTransfer.setData('category', category);
  };

  const handleDragOver = event => {
    event.preventDefault();
  };

  const handleDrop = (event, category) => {
    const itemId = event.dataTransfer.getData('itemId');
    const itemCategory = event.dataTransfer.getData('category');

    if (itemCategory === 'todo') {
      const item = todoItems.find(item => item.id.toString() === itemId);
      setTodoItems(todoItems.filter(item => item.id.toString() !== itemId));

      if (category === 'inProgress') {
        setInProgressItems([...inProgressItems, item]);
      } else if (category === 'done') {
        setDoneItems([...doneItems, item]);
      }
    } else if (itemCategory === 'inProgress') {
      const item = inProgressItems.find(item => item.id.toString() === itemId);
      setInProgressItems(inProgressItems.filter(item => item.id.toString() !== itemId));

      if (category === 'todo') {
        setTodoItems([...todoItems, item]);
      } else if (category === 'done') {
        setDoneItems([...doneItems, item]);
      }
    } else if (itemCategory === 'done') {
      const item = doneItems.find(item => item.id.toString() === itemId);
      setDoneItems(doneItems.filter(item => item.id.toString() !== itemId));

      if (category === 'todo') {
        setTodoItems([...todoItems, item]);
      } else if (category === 'inProgress') {
        setInProgressItems([...inProgressItems, item]);
      }
    }
  };



  return (
     <div className="flex justify-center items-center ">
      <div className="w-full h-full bg-gray-100 rounded-lg shadow-lg p-6 flex">
        {/* Sidebar Div */}
     
      <SideBar/>
     
    

        {/* Main Section Div */}
        <div className="bg-white rounded-lg shadow-md p-4 flex-grow">
          <div className="bg-white rounded-lg mb-4">
  {/* Header Div */}
  <div className="flex justify-between items-center px-4">
    {/* Left Div */}
    
              <div className="flex items-center w-[417px] h-[44px] border-2 rounded-md pl-2 ">
      <svg width="21" height="21" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.3417 19.25C16.1512 19.25 20.0501 15.3512 20.0501 10.5417C20.0501 5.7322 16.1512 1.83334 11.3417 1.83334C6.53225 1.83334 2.63339 5.7322 2.63339 10.5417C2.63339 15.3512 6.53225 19.25 11.3417 19.25Z" stroke="#DBDBDB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.9667 20.1667L19.1334 18.3333" stroke="#DBDBDB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      <input type="text" className="outline-none pl-2" placeholder="  Search..." />
    </div>

    {/* Right Div */}
    <div className="flex items-center">
      <div className="flex items-center w-[120px] h-[24px] justify-evenly ">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2V5" stroke="#787486" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 2V5" stroke="#787486" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.5 9.09H20.5" stroke="#787486" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="#787486" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.9955 13.7H12.0045" stroke="#787486" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.29431 13.7H8.30329" stroke="#787486" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.29431 16.7H8.30329" stroke="#787486" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 18.4301H13L8.54999 21.39C7.88999 21.83 7 21.3601 7 20.5601V18.4301C4 18.4301 2 16.4301 2 13.4301V7.42999C2 4.42999 4 2.42999 7 2.42999H17C20 2.42999 22 4.42999 22 7.42999V13.4301C22 16.4301 20 18.4301 17 18.4301Z" stroke="#787486" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 11.36V11.15C12 10.47 12.42 10.11 12.84 9.82001C13.25 9.54001 13.66 9.18002 13.66 8.52002C13.66 7.60002 12.92 6.85999 12 6.85999C11.08 6.85999 10.34 7.60002 10.34 8.52002" stroke="#787486" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.9955 13.75H12.0045" stroke="#787486" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.02 2.91C8.71 2.91 6.02 5.6 6.02 8.91V11.8C6.02 12.41 5.76 13.34 5.45 13.86L4.3 15.77C3.59 16.95 4.08 18.26 5.38 18.7C9.69 20.14 14.34 20.14 18.65 18.7C19.86 18.3 20.39 16.87 19.73 15.77L18.58 13.86C18.28 13.34 18.02 12.41 18.02 11.8V8.91C18.02 5.61 15.32 2.91 12.02 2.91Z" stroke="#787486" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M13.87 3.2C13.56 3.11 13.24 3.04 12.91 3C11.95 2.88 11.03 2.95 10.17 3.2C10.46 2.46 11.18 1.94 12.02 1.94C12.86 1.94 13.58 2.46 13.87 3.2Z" stroke="#787486" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.02 19.06C15.02 20.71 13.67 22.06 12.02 22.06C11.2 22.06 10.44 21.72 9.89999 21.18C9.35999 20.64 9.01999 19.88 9.01999 19.06" stroke="#787486" stroke-width="1.5" stroke-miterlimit="10"/>
<circle cx="18" cy="4" r="3" fill="#D8727D"/>
</svg>
      </div>
      <div className="flex items-center w-[201px] h-[39px] ml-4">
        <div className="w-[38px] h-[38px] bg-blue-500 rounded-full flex items-center justify-center">
          <img
            className="rounded-full w-[38px] h-[38px]"
            src="../public/static/Profile.jpg"
            alt="Profile"
          />
        </div>
        <div className="ml-2">
          <p className="text-sm text-gray-700 font-semibold">Nitin Yadav</p>
          <p className="text-xs text-gray-500">Chennai,India</p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400 ml-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
            </div>
     <hr className="w-1200 h-0.3 border border-gray-300 mt-8" />        
            
</div>

          <div className="bg-white rounded-lg text-center ">
              <div className="bg-white flex justify-between rounded-lg shadow-md  flex-grow">
          <div className="bg-gray-300 h-0.5 mb-4"></div>
          <div className="mb-4 flex justify-between">
                {/* Left Div */}
                
            <div className="flex flex-col items-center w-[344px] h-[56px] rounded-lg pr-[230px] pt-[17px]">
                  <div className='flex items-center w-[253px] h-[56px] justify-between'>
                    <h2 className=" text-3xl text-black font-semibold">Mobile App</h2>
                    <div className="w-[72px] h-[30px] text-gray-400 justify-center pt-2 font-semibold flex items-center">
               <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.25 27.5H18.75C25 27.5 27.5 25 27.5 18.75V11.25C27.5 5 25 2.5 18.75 2.5H11.25C5 2.5 2.5 5 2.5 11.25V18.75C2.5 25 5 27.5 11.25 27.5Z" fill="#5030E5" fill-opacity="0.2"/>
<path d="M16.1375 9.80001L9.64998 16.2875C9.39998 16.5375 9.16249 17.025 9.11249 17.375L8.76249 19.85C8.63749 20.75 9.26249 21.375 10.1625 21.25L12.6375 20.9C12.9875 20.85 13.475 20.6125 13.725 20.3625L20.2125 13.875C21.325 12.7625 21.8625 11.4625 20.2125 9.81251C18.5625 8.15001 17.2625 8.67501 16.1375 9.80001Z" stroke="#5030E5" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.2125 10.725C15.7625 12.6875 17.3 14.2375 19.275 14.7875" stroke="#5030E5" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.25 27.5H18.75C25 27.5 27.5 25 27.5 18.75V11.25C27.5 5 25 2.5 18.75 2.5H11.25C5 2.5 2.5 5 2.5 11.25V18.75C2.5 25 5 27.5 11.25 27.5Z" fill="#5030E5" fill-opacity="0.2"/>
<path d="M16.9933 19.3167H18C20.3828 19.3167 22.3167 17.3829 22.3167 15C22.3167 12.6172 20.3828 10.6833 18 10.6833H17C16.6359 10.6833 16.35 10.9785 16.35 11.3333C16.35 11.6895 16.6438 11.9833 17 11.9833H18C19.6638 11.9833 21.0167 13.3362 21.0167 15C21.0167 16.6638 19.6638 18.0167 18 18.0167H16.9933C16.6372 18.0167 16.3433 18.3105 16.3433 18.6667C16.3433 19.0229 16.6372 19.3167 16.9933 19.3167Z" fill="#5030E5" stroke="#5030E5" stroke-width="0.3"/>
<path d="M12 19.3167H13C13.3562 19.3167 13.65 19.0229 13.65 18.6667C13.65 18.3105 13.3562 18.0167 13 18.0167H12C10.3362 18.0167 8.98334 16.6638 8.98334 15C8.98334 13.3362 10.3362 11.9833 12 11.9833H13C13.3562 11.9833 13.65 11.6895 13.65 11.3333C13.65 10.9772 13.3562 10.6833 13 10.6833H12C9.61716 10.6833 7.68334 12.6172 7.68334 15C7.68334 17.3829 9.61716 19.3167 12 19.3167Z" fill="#5030E5" stroke="#5030E5" stroke-width="0.3"/>
<path d="M12.3333 15.65H17.6667C18.0228 15.65 18.3167 15.3562 18.3167 15C18.3167 14.6438 18.0228 14.35 17.6667 14.35H12.3333C11.9772 14.35 11.6833 14.6438 11.6833 15C11.6833 15.3562 11.9772 15.65 12.3333 15.65Z" fill="#5030E5" stroke="#5030E5" stroke-width="0.3"/>
</svg>

                  </div>
              </div>
                 
                    <div className="bg-white rounded-lg text-center mt-4 flex w-[256px] h-[40px]">
                              {/* Filter Button */}
             <button className="flex  items-center justify-center text-lg text-gray-500 border-2 rounded-md px-4 py-2 my-5 mr-1 w-[122px] h-[40px] m-[5px]">
               <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-1'>
<path d="M3.6 1H12.4C13.1333 1 13.7333 1.6 13.7333 2.33333V3.8C13.7333 4.33333 13.4 5 13.0667 5.33333L10.2 7.86667C9.8 8.2 9.53333 8.86667 9.53333 9.4V12.2667C9.53333 12.6667 9.26666 13.2 8.93333 13.4L8 14C7.13333 14.5333 5.93333 13.9333 5.93333 12.8667V9.33333C5.93333 8.86667 5.66666 8.26667 5.4 7.93333L2.86666 5.26667C2.53333 4.93333 2.26666 4.33333 2.26666 3.93333V2.4C2.26666 1.6 2.86666 1 3.6 1Z" stroke="#787486" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      Filter 
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='ml-1 mt-1'>
<path d="M8.00001 11.2C7.53335 11.2 7.06668 11.02 6.71335 10.6667L2.36668 6.32C2.17335 6.12667 2.17335 5.80667 2.36668 5.61334C2.56001 5.42 2.88001 5.42 3.07335 5.61334L7.42001 9.96C7.74001 10.28 8.26001 10.28 8.58001 9.96L12.9267 5.61334C13.12 5.42 13.44 5.42 13.6333 5.61334C13.8267 5.80667 13.8267 6.12667 13.6333 6.32L9.28668 10.6667C8.93335 11.02 8.46668 11.2 8.00001 11.2Z" fill="#787486"/>
</svg>
    

                  </button> 
                    {/* Today Button */}
            <button className="flex items-center justify-center text-lg text-gray-500 border-2 rounded-md px-4 py-1 mr-1 w-[122px] h-[40px] m-[20px]">
             <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-1'>
<path d="M5.33334 1.33333V3.33333" stroke="#787486" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.6667 1.33333V3.33333" stroke="#787486" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.6667 2.33333C12.8867 2.45333 14 3.29999 14 6.43333V10.5533C14 13.3 13.3333 14.6733 10 14.6733H6C2.66667 14.6733 2 13.3 2 10.5533V6.43333C2 3.29999 3.11333 2.45999 5.33333 2.33333H10.6667Z" stroke="#787486" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.8333 11.7333H2.16666" stroke="#787486" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.00001 5.5C7.18001 5.5 6.48668 5.94667 6.48668 6.81333C6.48668 7.22667 6.68001 7.54 6.97334 7.74C6.56668 7.98 6.33334 8.36667 6.33334 8.82C6.33334 9.64667 6.96668 10.16 8.00001 10.16C9.02668 10.16 9.66668 9.64667 9.66668 8.82C9.66668 8.36667 9.43334 7.97333 9.02001 7.74C9.32001 7.53333 9.50668 7.22667 9.50668 6.81333C9.50668 5.94667 8.82001 5.5 8.00001 5.5ZM8.00001 7.39333C7.65334 7.39333 7.40001 7.18667 7.40001 6.86C7.40001 6.52667 7.65334 6.33333 8.00001 6.33333C8.34668 6.33333 8.60001 6.52667 8.60001 6.86C8.60001 7.18667 8.34668 7.39333 8.00001 7.39333ZM8.00001 9.33333C7.56001 9.33333 7.24001 9.11333 7.24001 8.71333C7.24001 8.31333 7.56001 8.1 8.00001 8.1C8.44001 8.1 8.76001 8.32 8.76001 8.71333C8.76001 9.11333 8.44001 9.33333 8.00001 9.33333Z" fill="#787486"/>
</svg>

                      Today <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='ml-1 mt-1'>
<path d="M8.00001 11.2C7.53335 11.2 7.06668 11.02 6.71335 10.6667L2.36668 6.32C2.17335 6.12667 2.17335 5.80667 2.36668 5.61334C2.56001 5.42 2.88001 5.42 3.07335 5.61334L7.42001 9.96C7.74001 10.28 8.26001 10.28 8.58001 9.96L12.9267 5.61334C13.12 5.42 13.44 5.42 13.6333 5.61334C13.8267 5.80667 13.8267 6.12667 13.6333 6.32L9.28668 10.6667C8.93335 11.02 8.46668 11.2 8.00001 11.2Z" fill="#787486"/>
</svg>

                    </button> 
                    </div>
            </div>
          </div>
          <div className="flex items-center pb-[23px] ">
            {/* Right Div */}
            <div className="flex flex-col items-center justify-between pr-[160px] ">
              <div className='flex items-center '>
                 
                  <div className="ml-auto flex items-center ">
             
                      <div className='flex p-3 items-center m-3'>
                         <div className="w-6 h-6  rounded-full flex items-center justify-center">
             <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9H12" stroke="#5030E5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 12V6" stroke="#5030E5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.75 16.5H11.25C15 16.5 16.5 15 16.5 11.25V6.75C16.5 3 15 1.5 11.25 1.5H6.75C3 1.5 1.5 3 1.5 6.75V11.25C1.5 15 3 16.5 6.75 16.5Z" fill="#5030E5" fill-opacity="0.2"/>
                      </svg>
                

              </div>
                              <p className="flex text-center pr-3">Invite</p>
                       <svg width="158" height="38" viewBox="0 0 158 38" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <circle cx="19" cy="19" r="18.5" fill="url(#pattern0)" stroke="white"/>
      <circle cx="49" cy="19" r="18.5" fill="url(#pattern1)" stroke="white"/>
      <circle cx="79" cy="19" r="18.5" fill="url(#pattern2)" stroke="white"/>
      <circle cx="109" cy="19" r="18.5" fill="url(#pattern3)" stroke="white"/>
      <circle cx="139" cy="19" r="18.5" fill="#D25B68" stroke="white"/>
      <text x="135" y="19" textAnchor="middle" alignmentBaseline="central" fill="white" fontSize="18px">+2</text>
      
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0" transform="scale(0.05)"/>
        </pattern>
        <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image1" transform="scale(0.05)"/>
        </pattern>
        <pattern id="pattern2" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image2" transform="scale(0.05)"/>
        </pattern>
        <pattern id="pattern3" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image3" transform="scale(0.05)"/>
        </pattern>
        <image id="image0" xlinkHref={ProfileImage} width="20" height="20" />
        <image id="image1" xlinkHref={ProfileImage1} width="20" height="20" />
        <image id="image2" xlinkHref={ProfileImage2} width="20" height="20" />
        <image id="image3" xlinkHref={ProfileImage3} width="20" height="20" />
      </defs>
    </svg>

                      </div>
                      
                   </div> 
                  </div>
                  <div className="bg-white rounded-lg flex w-[222px] h-[40px] justify-center items-center space-x-2">

                            
              <button className="flex  items-center justify-center text-base text-gray-500 border-2 rounded-md px-4 py-2 my-5 mr-2 w-[97px] h-[40px] ">
               <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-1'>
<path d="M6.1064 7.74666C6.0864 7.74666 6.07307 7.74666 6.05307 7.74666C6.01973 7.73999 5.97307 7.73999 5.93307 7.74666C3.99973 7.68666 2.53973 6.16666 2.53973 4.29333C2.53973 2.38666 4.09307 0.833328 5.99973 0.833328C7.9064 0.833328 9.45973 2.38666 9.45973 4.29333C9.45307 6.16666 7.9864 7.68666 6.1264 7.74666C6.11973 7.74666 6.11307 7.74666 6.1064 7.74666ZM5.99973 1.83333C4.6464 1.83333 3.53973 2.93999 3.53973 4.29333C3.53973 5.62666 4.57973 6.69999 5.9064 6.74666C5.9464 6.73999 6.03307 6.73999 6.11973 6.74666C7.4264 6.68666 8.45307 5.61333 8.45973 4.29333C8.45973 2.93999 7.35307 1.83333 5.99973 1.83333Z" fill="#787486"/>
<path d="M11.0264 7.83334C11.0064 7.83334 10.9864 7.83334 10.9664 7.82667C10.6931 7.85334 10.4131 7.66001 10.3864 7.38667C10.3597 7.11334 10.5264 6.86667 10.7997 6.83334C10.8797 6.82667 10.9664 6.82667 11.0397 6.82667C12.0131 6.77334 12.7731 5.97334 12.7731 4.99334C12.7731 3.98001 11.9531 3.16 10.9397 3.16C10.6664 3.16667 10.4397 2.94001 10.4397 2.66667C10.4397 2.39334 10.6664 2.16667 10.9397 2.16667C12.4997 2.16667 13.7731 3.44001 13.7731 5.00001C13.7731 6.53334 12.5731 7.77334 11.0464 7.83334C11.0397 7.83334 11.0331 7.83334 11.0264 7.83334Z" fill="#787486"/>
<path d="M6.11307 15.0333C4.80641 15.0333 3.49307 14.7 2.49974 14.0333C1.57307 13.42 1.06641 12.58 1.06641 11.6667C1.06641 10.7533 1.57307 9.90667 2.49974 9.28667C4.49974 7.96001 7.73974 7.96001 9.72641 9.28667C10.6464 9.90001 11.1597 10.74 11.1597 11.6533C11.1597 12.5667 10.6531 13.4133 9.72641 14.0333C8.72641 14.7 7.41974 15.0333 6.11307 15.0333ZM3.05307 10.1267C2.41307 10.5533 2.06641 11.1 2.06641 11.6733C2.06641 12.24 2.41974 12.7867 3.05307 13.2067C4.71307 14.32 7.51307 14.32 9.17307 13.2067C9.81307 12.78 10.1597 12.2333 10.1597 11.66C10.1597 11.0933 9.80641 10.5467 9.17307 10.1267C7.51307 9.02 4.71307 9.02 3.05307 10.1267Z" fill="#787486"/>
<path d="M12.2264 13.8333C11.9931 13.8333 11.7864 13.6733 11.7397 13.4333C11.6864 13.16 11.8597 12.9 12.1264 12.84C12.5464 12.7533 12.9331 12.5867 13.2331 12.3533C13.6131 12.0667 13.8197 11.7067 13.8197 11.3267C13.8197 10.9467 13.6131 10.5867 13.2397 10.3067C12.9464 10.08 12.5797 9.92 12.1464 9.82C11.8797 9.76 11.7064 9.49333 11.7664 9.22C11.8264 8.95333 12.0931 8.78 12.3664 8.84C12.9397 8.96666 13.4397 9.19333 13.8464 9.50666C14.4664 9.97333 14.8197 10.6333 14.8197 11.3267C14.8197 12.02 14.4597 12.68 13.8397 13.1533C13.4264 13.4733 12.9064 13.7067 12.3331 13.82C12.2931 13.8333 12.2597 13.8333 12.2264 13.8333Z" fill="#787486"/>
</svg> Share </button> 
                       {/* Hamburger Icon */}
            
                    <svg width="2" height="29" viewBox="0 0 2 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 0.5V28.5" stroke="#787486"/>
</svg>

                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="40" rx="6" fill="#5030E5"/>
<path d="M25.925 21.125L14.075 21.125C12.95 21.125 12.5 21.6 12.5 22.8L12.5 25.825C12.5 27.025 12.95 27.5 14.075 27.5L25.925 27.5C27.05 27.5 27.5 27.025 27.5 25.825L27.5 22.8C27.5 21.6 27.05 21.125 25.925 21.125Z" fill="white"/>
<path d="M25.925 12.5L14.075 12.5C12.95 12.5 12.5 12.975 12.5 14.175L12.5 17.2C12.5 18.3917 12.95 18.875 14.075 18.875L25.925 18.875C27.05 18.875 27.5 18.4 27.5 17.2L27.5 14.175C27.5 12.975 27.05 12.5 25.925 12.5Z" fill="white"/>
</svg>

                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.1949 7.99994C16.5756 7.99994 17.6949 6.88065 17.6949 5.49994C17.6949 4.11923 16.5756 2.99994 15.1949 2.99994C13.8142 2.99994 12.6949 4.11923 12.6949 5.49994C12.6949 6.88065 13.8142 7.99994 15.1949 7.99994Z" stroke="#787486" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.50001 7.99994C6.88072 7.99994 8 6.88065 8 5.49994C8 4.11923 6.88072 2.99994 5.50001 2.99994C4.11929 2.99994 3 4.11923 3 5.49994C3 6.88065 4.11929 7.99994 5.50001 7.99994Z" stroke="#787486" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.1949 17.9999C16.5756 17.9999 17.6949 16.8807 17.6949 15.4999C17.6949 14.1192 16.5756 12.9999 15.1949 12.9999C13.8142 12.9999 12.6949 14.1192 12.6949 15.4999C12.6949 16.8807 13.8142 17.9999 15.1949 17.9999Z" stroke="#787486" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.50001 17.9999C6.88072 17.9999 8 16.8807 8 15.4999C8 14.1192 6.88072 12.9999 5.50001 12.9999C4.11929 12.9999 3 14.1192 3 15.4999C3 16.8807 4.11929 17.9999 5.50001 17.9999Z" stroke="#787486" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    
                    
</div>
 </div>
</div>
          
            </div>
      

  

           
          </div>
               <hr className="w-[1200px] h-0.3 border border-gray-300 mt-8 mb-8" />  
 <div className="flex justify-between">
      {/* To Do */}
      <div
        className="w-[354px] h-[525px] bg-gray-100 rounded-lg p-3 mr-2 shadow"
        onDragOver={event => handleDragOver(event)}
        onDrop={event => handleDrop(event, 'todo')}
      >
       <div className="flex items-center mb-4">
  <div className="w-[8px] h-[8px] rounded-full bg-violet-600 mr-3 items-center mt-1"></div>
                <h2 className="mr-2 flex items-center">Done
                <div className="ml-2 w-[20px] h-[20px] rounded-full bg-gray-300 flex items-center justify-center">
      <span className="text-gray-700 text-sm">{todoItems.length}</span>
                  </div>
                </h2>
  <div className="ml-auto flex items-center">
    
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.2" d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill="#5030E5"/>
<path d="M16 11.25H12.75V8C12.75 7.59 12.41 7.25 12 7.25C11.59 7.25 11.25 7.59 11.25 8V11.25H8C7.59 11.25 7.25 11.59 7.25 12C7.25 12.41 7.59 12.75 8 12.75H11.25V16C11.25 16.41 11.59 16.75 12 16.75C12.41 16.75 12.75 16.41 12.75 16V12.75H16C16.41 12.75 16.75 12.41 16.75 12C16.75 11.59 16.41 11.25 16 11.25Z" fill="#5030E5"/>
</svg>

  </div>
                
              </div>
              
  <hr className="w-[314px] h-[1px] border-2 border-violet-600 mb-4" />
        {/* Nested Divs */}
        {todoItems.map(item => (
          <div
            key={item.id}
            className="bg-white rounded-lg p-2 mb-2 shadow w-[314px] h-[147px]"
            draggable
            onDragStart={event => handleDragStart(event, item.id, 'todo')}
          >
            <div className='flex items-center'>
  <p className="text-orange-500 border-2 w-[36px] h-[23px] flex items-center justify-center rounded-md bg-orange-50">
    {item.text1}
  </p>
  <div className="ml-auto">
            <svg width="15" height="4" viewBox="0 0 15 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.44318 3.16477C2.03409 3.16477 1.68371 3.02083 1.39205 2.73295C1.10417 2.44508 0.962121 2.09659 0.965909 1.6875C0.962121 1.28598 1.10417 0.943182 1.39205 0.659091C1.68371 0.371212 2.03409 0.227273 2.44318 0.227273C2.82955 0.227273 3.17045 0.371212 3.46591 0.659091C3.76515 0.943182 3.91667 1.28598 3.92045 1.6875C3.91667 1.96023 3.8447 2.20833 3.70455 2.43182C3.56818 2.6553 3.38826 2.83333 3.16477 2.96591C2.94508 3.09848 2.70455 3.16477 2.44318 3.16477ZM7.78131 3.16477C7.37222 3.16477 7.02184 3.02083 6.73017 2.73295C6.44229 2.44508 6.30025 2.09659 6.30403 1.6875C6.30025 1.28598 6.44229 0.943182 6.73017 0.659091C7.02184 0.371212 7.37222 0.227273 7.78131 0.227273C8.16767 0.227273 8.50858 0.371212 8.80403 0.659091C9.10328 0.943182 9.25479 1.28598 9.25858 1.6875C9.25479 1.96023 9.18282 2.20833 9.04267 2.43182C8.90631 2.6553 8.72638 2.83333 8.5029 2.96591C8.2832 3.09848 8.04267 3.16477 7.78131 3.16477ZM13.1194 3.16477C12.7103 3.16477 12.36 3.02083 12.0683 2.73295C11.7804 2.44508 11.6384 2.09659 11.6422 1.6875C11.6384 1.28598 11.7804 0.943182 12.0683 0.659091C12.36 0.371212 12.7103 0.227273 13.1194 0.227273C13.5058 0.227273 13.8467 0.371212 14.1422 0.659091C14.4414 0.943182 14.5929 1.28598 14.5967 1.6875C14.5929 1.96023 14.5209 2.20833 14.3808 2.43182C14.2444 2.6553 14.0645 2.83333 13.841 2.96591C13.6213 3.09848 13.3808 3.16477 13.1194 3.16477Z" fill="#0D062D"/>
</svg>
</div>
       </div>
            
            

            <p className="text-black text-xl">{item.text2}</p>
            <p className="text-gray-400 text-xs mt-2">{item.description}</p>


            <div className='flex items-center mt-2'>
             <svg width="73" height="28" viewBox="0 0 158 38" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <circle cx="19" cy="19" r="18.5" fill="url(#pattern0)" stroke="white"/>
      <circle cx="49" cy="19" r="18.5" fill="url(#pattern1)" stroke="white"/>
      <circle cx="79" cy="19" r="18.5" fill="url(#pattern2)" stroke="white"/>
     
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0" transform="scale(0.05)"/>
        </pattern>
        <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image1" transform="scale(0.05)"/>
        </pattern>
        
        <image id="image0" xlinkHref={ProfileImage} width="20" height="20" />
        <image id="image1" xlinkHref={ProfileImage1} width="20" height="20" />
       
      </defs>
              </svg> 
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-1 ml-1'>
<path d="M8.00001 15.2067C7.54001 15.2067 7.10668 14.9733 6.80001 14.5667L5.80001 13.2333C5.78001 13.2067 5.70001 13.1733 5.66668 13.1667H5.33334C2.55334 13.1667 0.833344 12.4133 0.833344 8.66667V5.33334C0.833344 2.38667 2.38668 0.833336 5.33334 0.833336H10.6667C13.6133 0.833336 15.1667 2.38667 15.1667 5.33334V8.66667C15.1667 11.6133 13.6133 13.1667 10.6667 13.1667H10.3333C10.28 13.1667 10.2333 13.1933 10.2 13.2333L9.20001 14.5667C8.89334 14.9733 8.46001 15.2067 8.00001 15.2067ZM5.33334 1.83334C2.94668 1.83334 1.83334 2.94667 1.83334 5.33334V8.66667C1.83334 11.68 2.86668 12.1667 5.33334 12.1667H5.66668C6.00668 12.1667 6.39334 12.36 6.60001 12.6333L7.60001 13.9667C7.83334 14.2733 8.16668 14.2733 8.40001 13.9667L9.40001 12.6333C9.62001 12.34 9.96668 12.1667 10.3333 12.1667H10.6667C13.0533 12.1667 14.1667 11.0533 14.1667 8.66667V5.33334C14.1667 2.94667 13.0533 1.83334 10.6667 1.83334H5.33334Z" fill="#787486"/>
<path d="M8.00001 8C7.62668 8 7.33334 7.7 7.33334 7.33333C7.33334 6.96666 7.63334 6.66666 8.00001 6.66666C8.36668 6.66666 8.66668 6.96666 8.66668 7.33333C8.66668 7.7 8.37334 8 8.00001 8Z" fill="#787486"/>
<path d="M10.6667 8C10.2933 8 10 7.7 10 7.33333C10 6.96666 10.3 6.66666 10.6667 6.66666C11.0333 6.66666 11.3333 6.96666 11.3333 7.33333C11.3333 7.7 11.04 8 10.6667 8Z" fill="#787486"/>
<path d="M5.33332 8C4.95999 8 4.66666 7.7 4.66666 7.33333C4.66666 6.96666 4.96666 6.66666 5.33332 6.66666C5.69999 6.66666 5.99999 6.96666 5.99999 7.33333C5.99999 7.7 5.70666 8 5.33332 8Z" fill="#787486"/>
</svg>

              <h3 className="text-sm text-gray-500 mr-1 ">12 comments</h3>
            
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg " className='mr-1 ml-1'>
<path d="M14.3334 7.33334V11.3333C14.3334 14 13.6667 14.6667 11.0001 14.6667H4.33341C1.66674 14.6667 1.00008 14 1.00008 11.3333V4.66667C1.00008 2 1.66674 1.33334 4.33341 1.33334H5.33341C6.33341 1.33334 6.55341 1.62667 6.93341 2.13334L7.93341 3.46667C8.18674 3.8 8.33341 4 9.00008 4H11.0001C13.6667 4 14.3334 4.66667 14.3334 7.33334Z" stroke="#787486" stroke-miterlimit="10"/>
<path d="M5.33333 1.33334H11.3333C12.6667 1.33334 13.3333 2 13.3333 3.33334V4.25334" stroke="#787486" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.33333 10H6" stroke="#787486" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 <h3 className="text-sm text-gray-500 mr-1 ">12 files</h3>
              
            </div>
            
          </div>
        ))}
      </div>

      {/* In Progress */}
    <div
        className="w-[354px] h-[525px] bg-gray-100 rounded-lg p-3 mx-2 shadow"
        onDragOver={event => handleDragOver(event)}
        onDrop={event => handleDrop(event, 'inProgress')}
      >
        <div className="flex items-center mb-4">
  <div className="w-[8px] h-[8px] rounded-full bg-orange-400 mr-3 items-center mt-1"></div>
                <h2 className="mr-2 flex items-center">Done
                <div className="ml-2 w-[20px] h-[20px] rounded-full bg-gray-300 flex items-center justify-center">
      <span className="text-gray-700 text-sm">{inProgressItems.length}</span>
                  </div>
                </h2>
 
</div>
  <hr className="w-[314px] h-[1px] border-2 border-orange-500 mb-4" />
        <div className="mt-4">
          {/* Nested Divs */}
          {inProgressItems.map(item => (
            <div
              key={item.id}
              className="bg-white rounded-lg p-2 mb-1 shadow w-[314px] h-[208px]"
              draggable
              onDragStart={event => handleDragStart(event, item.id, 'inProgress')}
            >
                <div className='flex items-center'>
  <p className="text-orange-500 border-2 w-[36px] h-[23px] flex items-center justify-center rounded-md bg-orange-50">
    {item.text1}
  </p>
  <div className="ml-auto">
            <svg width="15" height="4" viewBox="0 0 15 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.44318 3.16477C2.03409 3.16477 1.68371 3.02083 1.39205 2.73295C1.10417 2.44508 0.962121 2.09659 0.965909 1.6875C0.962121 1.28598 1.10417 0.943182 1.39205 0.659091C1.68371 0.371212 2.03409 0.227273 2.44318 0.227273C2.82955 0.227273 3.17045 0.371212 3.46591 0.659091C3.76515 0.943182 3.91667 1.28598 3.92045 1.6875C3.91667 1.96023 3.8447 2.20833 3.70455 2.43182C3.56818 2.6553 3.38826 2.83333 3.16477 2.96591C2.94508 3.09848 2.70455 3.16477 2.44318 3.16477ZM7.78131 3.16477C7.37222 3.16477 7.02184 3.02083 6.73017 2.73295C6.44229 2.44508 6.30025 2.09659 6.30403 1.6875C6.30025 1.28598 6.44229 0.943182 6.73017 0.659091C7.02184 0.371212 7.37222 0.227273 7.78131 0.227273C8.16767 0.227273 8.50858 0.371212 8.80403 0.659091C9.10328 0.943182 9.25479 1.28598 9.25858 1.6875C9.25479 1.96023 9.18282 2.20833 9.04267 2.43182C8.90631 2.6553 8.72638 2.83333 8.5029 2.96591C8.2832 3.09848 8.04267 3.16477 7.78131 3.16477ZM13.1194 3.16477C12.7103 3.16477 12.36 3.02083 12.0683 2.73295C11.7804 2.44508 11.6384 2.09659 11.6422 1.6875C11.6384 1.28598 11.7804 0.943182 12.0683 0.659091C12.36 0.371212 12.7103 0.227273 13.1194 0.227273C13.5058 0.227273 13.8467 0.371212 14.1422 0.659091C14.4414 0.943182 14.5929 1.28598 14.5967 1.6875C14.5929 1.96023 14.5209 2.20833 14.3808 2.43182C14.2444 2.6553 14.0645 2.83333 13.841 2.96591C13.6213 3.09848 13.3808 3.16477 13.1194 3.16477Z" fill="#0D062D"/>
</svg>
</div>
       </div>
              <p className="text-black text-xl">{item.text2}</p>
              <img src={item.imageUrl} alt="Task Image" className="w-[281px]  h-[100px]" />
<div className='flex items-center mt-2'>
             <svg width="73" height="28" viewBox="0 0 158 38" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <circle cx="19" cy="19" r="18.5" fill="url(#pattern0)" stroke="white"/>
      <circle cx="49" cy="19" r="18.5" fill="url(#pattern1)" stroke="white"/>
      <circle cx="79" cy="19" r="18.5" fill="url(#pattern2)" stroke="white"/>
     
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0" transform="scale(0.05)"/>
        </pattern>
        <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image1" transform="scale(0.05)"/>
        </pattern>
        
        <image id="image0" xlinkHref={ProfileImage} width="20" height="20" />
        <image id="image1" xlinkHref={ProfileImage1} width="20" height="20" />
       
      </defs>
              </svg> 
             <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-1 ml-1'>
<path d="M8 15.2067C7.54 15.2067 7.10667 14.9733 6.8 14.5667L5.8 13.2333C5.78 13.2067 5.7 13.1733 5.66667 13.1667H5.33334C2.55334 13.1667 0.833336 12.4133 0.833336 8.66666V5.33333C0.833336 2.38666 2.38667 0.833328 5.33334 0.833328H10.6667C13.6133 0.833328 15.1667 2.38666 15.1667 5.33333V8.66666C15.1667 11.6133 13.6133 13.1667 10.6667 13.1667H10.3333C10.28 13.1667 10.2333 13.1933 10.2 13.2333L9.2 14.5667C8.89334 14.9733 8.46 15.2067 8 15.2067ZM5.33334 1.83333C2.94667 1.83333 1.83334 2.94666 1.83334 5.33333V8.66666C1.83334 11.68 2.86667 12.1667 5.33334 12.1667H5.66667C6.00667 12.1667 6.39334 12.36 6.6 12.6333L7.6 13.9667C7.83334 14.2733 8.16667 14.2733 8.4 13.9667L9.4 12.6333C9.62 12.34 9.96667 12.1667 10.3333 12.1667H10.6667C13.0533 12.1667 14.1667 11.0533 14.1667 8.66666V5.33333C14.1667 2.94666 13.0533 1.83333 10.6667 1.83333H5.33334Z" fill="#787486"/>
<path d="M8 8.00001C7.62667 8.00001 7.33334 7.70001 7.33334 7.33334C7.33334 6.96667 7.63334 6.66667 8 6.66667C8.36667 6.66667 8.66667 6.96667 8.66667 7.33334C8.66667 7.70001 8.37334 8.00001 8 8.00001Z" fill="#787486"/>
<path d="M10.6667 8.00001C10.2933 8.00001 10 7.70001 10 7.33334C10 6.96667 10.3 6.66667 10.6667 6.66667C11.0333 6.66667 11.3333 6.96667 11.3333 7.33334C11.3333 7.70001 11.04 8.00001 10.6667 8.00001Z" fill="#787486"/>
<path d="M5.33333 8.00001C4.96 8.00001 4.66666 7.70001 4.66666 7.33334C4.66666 6.96667 4.96666 6.66667 5.33333 6.66667C5.7 6.66667 6 6.96667 6 7.33334C6 7.70001 5.70666 8.00001 5.33333 8.00001Z" fill="#787486"/>
</svg>


              <h3 className="text-sm text-gray-500 mr-1 ">12 comments</h3>
            
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg " className='mr-1 ml-1'>
<path d="M14.3334 7.33334V11.3333C14.3334 14 13.6667 14.6667 11.0001 14.6667H4.33341C1.66674 14.6667 1.00008 14 1.00008 11.3333V4.66667C1.00008 2 1.66674 1.33334 4.33341 1.33334H5.33341C6.33341 1.33334 6.55341 1.62667 6.93341 2.13334L7.93341 3.46667C8.18674 3.8 8.33341 4 9.00008 4H11.0001C13.6667 4 14.3334 4.66667 14.3334 7.33334Z" stroke="#787486" stroke-miterlimit="10"/>
<path d="M5.33333 1.33334H11.3333C12.6667 1.33334 13.3333 2 13.3333 3.33334V4.25334" stroke="#787486" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.33333 10H6" stroke="#787486" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 <h3 className="text-sm text-gray-500 mr-1 ">15 files</h3>
              
            </div>
              
            </div>
            
                
          
            
          ))}
              </div>
              
      </div>

      {/* Done */}

      <div
        className="w-[354px] h-[525px] bg-gray-100 rounded-lg p-3 ml-2 shadow"
        onDragOver={event => handleDragOver(event)}
        onDrop={event => handleDrop(event, 'done')}
      >
       <div className="flex items-center mb-4">
  <div className="w-[8px] h-[8px] rounded-full bg-blue-400 mr-3 items-center mt-1"></div>
                <h2 className="mr-2 flex items-center">Done
                <div className="ml-2 w-[20px] h-[20px] rounded-full bg-gray-300 flex items-center justify-center">
      <span className="text-gray-700 text-sm">{doneItems.length}</span>
                  </div>
                </h2>
 
</div>
  <hr className="w-[314px] h-[1px] border-2 border-green-500 mb-4" />

        {/* Nested Divs */}
        {doneItems.map(item => (
          <div
            key={item.id}
            className="bg-white rounded-lg p-2 mb-2 shadow w-[314px] h-[201px]"
            draggable
            onDragStart={event => handleDragStart(event, item.id, 'done')}
          >
              <div className='flex items-center'>
<p className="text-green-500 border-2 w-[86px] h-[23px] flex items-center justify-center rounded-md bg-orange-50">
  {item.text1}
  </p>
  <div className="ml-auto">
            <svg width="15" height="4" viewBox="0 0 15 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.44318 3.16477C2.03409 3.16477 1.68371 3.02083 1.39205 2.73295C1.10417 2.44508 0.962121 2.09659 0.965909 1.6875C0.962121 1.28598 1.10417 0.943182 1.39205 0.659091C1.68371 0.371212 2.03409 0.227273 2.44318 0.227273C2.82955 0.227273 3.17045 0.371212 3.46591 0.659091C3.76515 0.943182 3.91667 1.28598 3.92045 1.6875C3.91667 1.96023 3.8447 2.20833 3.70455 2.43182C3.56818 2.6553 3.38826 2.83333 3.16477 2.96591C2.94508 3.09848 2.70455 3.16477 2.44318 3.16477ZM7.78131 3.16477C7.37222 3.16477 7.02184 3.02083 6.73017 2.73295C6.44229 2.44508 6.30025 2.09659 6.30403 1.6875C6.30025 1.28598 6.44229 0.943182 6.73017 0.659091C7.02184 0.371212 7.37222 0.227273 7.78131 0.227273C8.16767 0.227273 8.50858 0.371212 8.80403 0.659091C9.10328 0.943182 9.25479 1.28598 9.25858 1.6875C9.25479 1.96023 9.18282 2.20833 9.04267 2.43182C8.90631 2.6553 8.72638 2.83333 8.5029 2.96591C8.2832 3.09848 8.04267 3.16477 7.78131 3.16477ZM13.1194 3.16477C12.7103 3.16477 12.36 3.02083 12.0683 2.73295C11.7804 2.44508 11.6384 2.09659 11.6422 1.6875C11.6384 1.28598 11.7804 0.943182 12.0683 0.659091C12.36 0.371212 12.7103 0.227273 13.1194 0.227273C13.5058 0.227273 13.8467 0.371212 14.1422 0.659091C14.4414 0.943182 14.5929 1.28598 14.5967 1.6875C14.5929 1.96023 14.5209 2.20833 14.3808 2.43182C14.2444 2.6553 14.0645 2.83333 13.841 2.96591C13.6213 3.09848 13.3808 3.16477 13.1194 3.16477Z" fill="#0D062D"/>
</svg>
</div>
       </div>
           
            <p className="text-black text-xl">{item.text2}</p>
            <p className="text-gray-400 text-xs mt-2">{item.description}</p>

               {item.imageUrl && (
  <img src={item.imageUrl} alt="Task Image" className="w-[281px] h-[100px] pb-6" />
)}

            <div className='flex items-center mt-1'>
             <svg width="73" height="28" viewBox="0 0 158 38" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <circle cx="19" cy="19" r="18.5" fill="url(#pattern0)" stroke="white"/>
      <circle cx="49" cy="19" r="18.5" fill="url(#pattern1)" stroke="white"/>
      <circle cx="79" cy="19" r="18.5" fill="url(#pattern2)" stroke="white"/>
     
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0" transform="scale(0.05)"/>
        </pattern>
        <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image1" transform="scale(0.05)"/>
        </pattern>
        
        <image id="image0" xlinkHref={ProfileImage} width="20" height="20" />
        <image id="image1" xlinkHref={ProfileImage1} width="20" height="20" />
       
      </defs>
              </svg> 
             <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-1 ml-1'>
<path d="M8 15.2067C7.54 15.2067 7.10667 14.9733 6.8 14.5667L5.8 13.2333C5.78 13.2067 5.7 13.1733 5.66667 13.1667H5.33334C2.55334 13.1667 0.833336 12.4133 0.833336 8.66666V5.33333C0.833336 2.38666 2.38667 0.833328 5.33334 0.833328H10.6667C13.6133 0.833328 15.1667 2.38666 15.1667 5.33333V8.66666C15.1667 11.6133 13.6133 13.1667 10.6667 13.1667H10.3333C10.28 13.1667 10.2333 13.1933 10.2 13.2333L9.2 14.5667C8.89334 14.9733 8.46 15.2067 8 15.2067ZM5.33334 1.83333C2.94667 1.83333 1.83334 2.94666 1.83334 5.33333V8.66666C1.83334 11.68 2.86667 12.1667 5.33334 12.1667H5.66667C6.00667 12.1667 6.39334 12.36 6.6 12.6333L7.6 13.9667C7.83334 14.2733 8.16667 14.2733 8.4 13.9667L9.4 12.6333C9.62 12.34 9.96667 12.1667 10.3333 12.1667H10.6667C13.0533 12.1667 14.1667 11.0533 14.1667 8.66666V5.33333C14.1667 2.94666 13.0533 1.83333 10.6667 1.83333H5.33334Z" fill="#787486"/>
<path d="M8 8.00001C7.62667 8.00001 7.33334 7.70001 7.33334 7.33334C7.33334 6.96667 7.63334 6.66667 8 6.66667C8.36667 6.66667 8.66667 6.96667 8.66667 7.33334C8.66667 7.70001 8.37334 8.00001 8 8.00001Z" fill="#787486"/>
<path d="M10.6667 8.00001C10.2933 8.00001 10 7.70001 10 7.33334C10 6.96667 10.3 6.66667 10.6667 6.66667C11.0333 6.66667 11.3333 6.96667 11.3333 7.33334C11.3333 7.70001 11.04 8.00001 10.6667 8.00001Z" fill="#787486"/>
<path d="M5.33333 8.00001C4.96 8.00001 4.66666 7.70001 4.66666 7.33334C4.66666 6.96667 4.96666 6.66667 5.33333 6.66667C5.7 6.66667 6 6.96667 6 7.33334C6 7.70001 5.70666 8.00001 5.33333 8.00001Z" fill="#787486"/>
</svg>

              <h3 className="text-sm text-gray-500 mr-1 ">12 comments</h3>
            
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg " className='mr-1 ml-1'>
<path d="M14.3334 7.33334V11.3333C14.3334 14 13.6667 14.6667 11.0001 14.6667H4.33341C1.66674 14.6667 1.00008 14 1.00008 11.3333V4.66667C1.00008 2 1.66674 1.33334 4.33341 1.33334H5.33341C6.33341 1.33334 6.55341 1.62667 6.93341 2.13334L7.93341 3.46667C8.18674 3.8 8.33341 4 9.00008 4H11.0001C13.6667 4 14.3334 4.66667 14.3334 7.33334Z" stroke="#787486" stroke-miterlimit="10"/>
<path d="M5.33333 1.33334H11.3333C12.6667 1.33334 13.3333 2 13.3333 3.33334V4.25334" stroke="#787486" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.33333 10H6" stroke="#787486" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 <h3 className="text-sm text-gray-500 mr-1 ">10 files</h3>
              
            </div>
          </div>
        ))}
      </div>
    </div>
        </div>
        

      </div>

    </div>      );
};

export default App;
