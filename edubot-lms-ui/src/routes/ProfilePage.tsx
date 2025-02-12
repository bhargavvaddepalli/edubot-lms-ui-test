import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Pencil } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export const Route = createFileRoute("/ProfilePage")({
  component: () => {
    const [profileImage, setProfileImage] = useState("https://wallpapercave.com/wp/wp13004955.jpg");
    const [formData, setFormData] = useState({
      firstName: "Rahul",
      lastName: "Kumar",
      email: "Rahulkumar@gmail.com",
      phone: "+91 7352178373",
      languages: "English, Hindi",
      address: "Sirian Overseas Educare Pvt Ltd, Vijayawada, Andhra Pradesh",
      linkedin: "https://www.linkedin.com/feed/",
      github: "Githublink.com",
      hscSchool: "Kendriya Vidyalaya",
      hscSubjects: "Physics, Chemistry, Maths",
      hscYear: "2017-2021",
      university: "KLC Tech College",
      universitySpecialization: "Bachelor of Technology",
      universityYear: "2017-2021"
    });

    // Handle file upload
    const handleImageChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        setProfileImage(imageUrl);
      }
    };

    // Handle form field changes
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
      <div className="tw-md:p-10 tw-bg-gray-100 tw-min-h-screen ">
        {/* Navigation Bar */}
        <nav className="tw-flex  tw-items-center tw-space-x-2 tw-bg-white tw-text-black-600 tw-p-4 tw-border-b tw-shadow-sm">
          <a href="#" className="tw-font-bold tw-text-base tw-text-black">
            Profile
          </a>
          <div className="tw-flex tw-items-center tw-space-x-2 tw-text-sm tw-text-gray-500">
            <a href="#" className="hover:tw-text-black">Home</a>
            <span className="tw-text-gray-400">{">"}</span>
            <a href="#" className="hover:tw-text-black">Profile</a>
            <span className="tw-text-gray-400">{">"}</span>
            <a href="#" className="hover:tw-text-black">Settings</a>
            <span className="tw-text-gray-400">{">"}</span>
            <a href="#" className="hover:tw-text-black">My Profile</a>
          </div>
        </nav>

        {/* Profile Card */}
    <div className="tw-flex tw-flex-row  tw-bg-white tw-shadow-lg  tw-mt-3  tw-pb-10">
        <div className="tw-max-w-xs  tw-bg-white  tw-rounded-xl tw-p-6  tw-text-left  tw-mt-3">
          <h2 className="tw-text-lg tw-font-bold tw-mb-2 tw-text-black">My profile</h2>

          {/* Profile Picture Container */}
          <div className="tw-relative tw-inline-block">
            <img
              src={profileImage}
              alt="Profile"
              className="tw-w-24 tw-h-24 tw-rounded-full tw-border-2 tw-border-gray-300 tw-object-cover"
            />

            {/* Edit Icon */}
            <label className="tw-absolute tw-bottom-1 tw-right-1 tw-bg-blue-600 tw-text-white tw-rounded-full tw-p-1 tw-cursor-pointer">
              <Pencil size={16} />
              <input
                type="file"
                accept="image/*"
                className="tw-hidden"
                onChange={handleImageChange}
              />
            </label>
          </div>

          {/* User Details */}
          <h3 className="tw-text-xl tw-font-bold tw-text-black tw-mt-2">
            {formData.firstName} {formData.lastName}
          </h3>
          <p className="tw-text-gray-600 tw-text-sm">Data Researcher</p>
          <p className="tw-text-gray-600 tw-text-sm">
            Student ID: <span className="tw-font-medium">user1@123456</span>
          </p>

          {/* Change Password Link */}
          <a href="#" className="tw-text-blue-600 tw-font-semibold tw-mt-2 tw-inline-block">
            Change Password
          </a>
        </div>

        {/* Profile Form */}
        <div className="tw-max-w-lg  tw-mt-6 tw-bg-white  tw-border-2 tw-border-gray-300  tw-rounded-lg tw-p-6">
          <div className="tw-grid tw-grid-cols-2 tw-gap-4">
            <div>
              <label className="tw-block tw-font-medium">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="tw-w-full tw-border-2   tw-p-2 tw-rounded-md"
              />
            </div>
            <div>
              <label className="tw-block tw-font-medium">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="tw-w-full tw-border-2 tw-p-2 tw-rounded-md"
              />
            </div>
          </div>

          <div className="tw-mt-4">
            <label className="tw-block tw-font-medium">Email address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="tw-w-full tw-border-2 tw-p-2 tw-rounded-md"
            />
          </div>

          <div className="tw-mt-4">
            <label className="tw-block tw-font-medium">Phone no.</label>
            <PhoneInput
              country={"in"}
              value={formData.phone}
              onChange={(phone) => setFormData({ ...formData, phone })}
              inputClass="tw-w-full tw-border-2 tw-rounded-md tw-p-2"
            />
          </div>

          <div className="tw-mt-4">
            <label className="tw-block tw-font-medium">Language known</label>
            <input
              type="text"
              name="languages"
              value={formData.languages}
              onChange={handleChange}
              className="tw-w-full tw-border-2 tw-p-2 tw-rounded-md"
            />
          </div>

          <div className="tw-mt-4">
            <label className="tw-block tw-font-medium">Full Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows="3"
              className="tw-w-full tw-border-2 tw-p-2 tw-rounded-md"
            />
          </div>

          <div className="tw-mt-4">
            <label className="tw-block tw-font-medium">LinkedIn Profile link</label>
            <input
              type="url"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              className="tw-w-full tw-border-2 tw-p-2 tw-rounded-md"
            />
          </div>

          <div className="tw-mt-4">
            <label className="tw-block tw-font-medium">GitHub link</label>
            <input
              type="url"
              name="github"
              value={formData.github}
              onChange={handleChange}
              className="tw-w-full tw-border-2 tw-p-2 tw-rounded-md"
            />
          </div>
        </div>

        {/* Education Details */}
        <div>
        <div className="tw-max-w-lg tw-mx-auto tw-mt-6 tw-bg-white tw-rounded-lg tw-p-6 tw-border-2 tw-border-gray-300 tw-ml-6 tw-pr-20">
          <h3 className="tw-text-lg tw-font-bold tw-mb-4">Education</h3>

          <label className="tw-block tw-font-medium">Education - HSC</label>
          <input type="text" name="hscSchool" value={formData.hscSchool} onChange={handleChange} className="tw-w-full tw-border-2 tw-p-2 tw-rounded-md tw-mb-3" />
          
          

          <label className="tw-block tw-font-medium">Subject Specialization</label>
          <input type="text" name="hscSubjects" value={formData.hscSubjects} onChange={handleChange} className="tw-w-full tw-border-2 tw-p-2 tw-rounded-md tw-mb-3"/>
          

          <label className="tw-block tw-font-medium">Mention Year</label>
          <input type="text" name="hscYear" value={formData.hscYear} onChange={handleChange} className="tw-w-full tw-border-2 tw-p-2 tw-rounded-md tw-mb-3"/>

          <label className="tw-block tw-font-medium">Education - University</label>
          <input type="text" name="university" value={formData.university} onChange={handleChange} className="tw-w-full tw-border-2 tw-p-2 tw-rounded-md tw-mb-3"/>

          <label className="tw-block tw-font-medium">Subject Specialization</label>
          <input type="text" name="universitySpecialization" value={formData.universitySpecialization} onChange={handleChange} className="tw-w-full tw-border-2 tw-p-2 tw-rounded-md tw-mb-3"/>

          <label className="tw-block tw-font-medium">Mention Year</label>
          <input type="text" name="universityYear" value={formData.universityYear} onChange={handleChange} className="tw-w-full tw-border-2 tw-p-2 tw-rounded-md tw-mb-3"/>
          </div>
          <button className="tw-bg-blue-800 tw-text-white tw-font-bold tw-w-lg tw-p-3 tw-pl-6 tw-pr-6 tw-rounded-md tw-ml-60 tw-mt-4 tw-flex tw-items-center ">
            Update
          </button>
        </div>  
      </div>
      </div>
    );
  },
});
