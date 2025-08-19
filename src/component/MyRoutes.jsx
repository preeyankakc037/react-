/* 
localhost:5173 => This is Home page
localhost:5173/about => This is about page
localhost:5173/login => This is login page

 */

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Job from '../job';
import ReadAllSchool from './school/ReadAllSchool';
import SchoolDetails from './school/SchoolDetails';
import CreateSchool from './school/CreateSchool';
import UpdateSchool from './school/UpdateSchool';
import CreateCollege from './school/college/CreateCollege';
import CollegeDetails from './school/college/CollegeDetails';
import UpdateCollege from './school/college/UpdateCollege';


const MyRoutes = () => {
    return (
        <div>
            <h1>Routes</h1>
            <Routes>
                <Route path='/' element={<div>This is homepage</div>} />
                <Route path='/contact' element={<div>This is contact page.</div>} />
                <Route path='/login' element={<div>This is login page</div>} />
                <Route path='/about' element={<div>This is about page</div>} />
                <Route path='/job/:id' element={<Job></Job>}></Route>
                {/* localhost:5713/job/12345 */}
                {/* job is static and id is dynamic */}


                <Route path='/school' element={<ReadAllSchool></ReadAllSchool>}></Route>
                <Route path='/school/:id' element={<SchoolDetails></SchoolDetails>}></Route>
                <Route path='/school/create' element={<CreateSchool></CreateSchool>}></Route>
                <Route path='/school/update/:id' element={<UpdateSchool></UpdateSchool>}></Route>


                <Route path='/college/create' element={<CreateCollege></CreateCollege>}></Route>
                <Route path='/college/details' element={<CollegeDetails></CollegeDetails>}></Route>
                <Route path='/college/update' element={<UpdateCollege></UpdateCollege>}></Route>

                <Route path='*' element={<div>404 page not found</div>}></Route>
            </Routes>
        </div>
    );
};

export default MyRoutes;
