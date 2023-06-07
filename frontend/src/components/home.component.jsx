import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from './header';
import SideBar from './sidebar';
import ViewActivities from './activities/view-activities.component';
import ViewCommunities from './community/view-communities.component';
import ActivityDetails from './activities/activity.component';
import BeneficiaryForm from './beneficiary/form.component';
import SessionForm from './sessions/form.component';
import AttendanceForm from './attendance/form.component';
import ViewLocations from './locations/viewLocations';
import Dashboard from './dashboard/dashboard.component';
import ActivityForm from './activities/form.component'
import CommunityForm from './community/form.component'

const Home = () =>{

	const navigate = useNavigate();
	
    return (
        <>
        <Header />
        <div className='outer-container'>
            <SideBar />
            <div className='inner-container'>
            <Routes>
                <Route exact path="/" element={<Dashboard />} />
                <Route exact path="/dashboard" element={<Dashboard />} />
                <Route exact path="/beneficiary/add" element={<BeneficiaryForm />} />
                <Route exact path="/sessions/add" element={<SessionForm />} />
                <Route exact path="/attendance/add" element={<AttendanceForm />} />
                <Route exact path="/activities/view/add" element={<ActivityForm />} />
                <Route exact path="/activities/view" element={<ViewActivities />} />
                <Route exact path="/activities/view/:name" element={<ActivityDetails />} />
                <Route exact path="/communities/view/add" element={<CommunityForm />}/>
                <Route exact path="/communities/view" element={<ViewCommunities />} />
                <Route exact path="/locations/view" element={<ViewLocations />} />
                <Route exact path="*" element={<Dashboard />} />
            </Routes>
            </div>
        </div>
        </>
    )
    
}

export default Home;