import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Pencil, X, CheckCircle, Upload } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { router } from '../main'  // Import the router

export const Route = createFileRoute("/ProfilePage")({
  component: ProfilePage,
});

function ProfilePage() {
  const [profileImage, setProfileImage] = useState("https://wallpapercave.com/wp/wp13004955.jpg");
  const [showPopup, setShowPopup] = useState(false);
  const [showImagePopup, setShowImagePopup] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [errors, setErrors] = useState({});
  
  const handleChangePassword = () => {
    router.navigate({ to: '/changePassword' }) // Correct way to navigate
  }
  
  const [formData, setFormData] = useState({
    firstName: "Rahul",
    lastName: "Kumar",
    email: "Rahulkumar@gmail.com",
    phone: "+91 7352178373",
    languages: "English, Hindi",
    address: "Sirian Overseas Educare Pvt Ltd, Vijayawada, Andhra Pradesh",
    linkedin: "https://www.linkedin.com/feed/",
    github: "https://www.github.com/feed/",
    hscSchool: "Kendriya Vidyalaya",
    hscSubjects: "Physics, Chemistry, Maths",
    hscYear: "2017-2021",
    university: "KLC Tech College",
    universitySpecialization: "Bachelor of Technology",
    universityYear: "2017-2021"
  });

  const handleImageClick = () => {
    setShowImagePopup(true);
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUploadImage = () => {
    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setProfileImage(imageUrl);
      setShowImagePopup(false);
      setSelectedFile(null);
    }
  };

  const closeImagePopup = () => {
    setShowImagePopup(false);
    setSelectedFile(null);
  };

  // Validate a single field
  const validateField = (name, value) => {
    // Check for empty values first
    if (!value || value.trim() === '') {
      return `${name} is required`;
    }

    // Name fields should not contain numbers
    if ((name === 'firstName' || name === 'lastName') && /\d/.test(value)) {
      return `${name} cannot contain numbers`;
    }
    
    // Email validation
    if (name === 'email' && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(value)) {
      return 'Invalid email format';
    }
    

    // LinkedIn validation
    if (name === 'linkedin' && !/^(https?:\/\/)?(www\.)?linkedin\.com\/.*$/i.test(value)) {
      return 'Invalid LinkedIn profile URL';
    }

    // GitHub validation
    if (name === 'github' && !/^(https?:\/\/)?(www\.)?github\.com\/.*$/i.test(value)) {
      return 'Invalid GitHub URL';
    }
    
    // Year validation (should be in format like 2017-2021 or just 2021)
    if ((name === 'hscYear' || name === 'universityYear') && 
        !/^\d{4}(-\d{4})?$/.test(value)) {
      return `${name} should be in YYYY or YYYY-YYYY format`;
    }

    return null;  // No error
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Clear the error for this field
    setErrors(prev => ({...prev, [name]: null}));
    
    // For name fields, reject the change immediately if it contains numbers
    if ((name === "firstName" || name === "lastName") && /\d/.test(value)) {
      setErrors(prev => ({...prev, [name]: `${name} cannot contain numbers`}));
      return; 
    }
    
    // For year fields, reject non-numeric input except for hyphen
    if ((name === "hscYear" || name === "universityYear") && 
        !/^[\d-]*$/.test(value)) {
      setErrors(prev => ({...prev, [name]: `${name} should only contain numbers and hyphens`}));
      return;
    }
    
    // Update the form data if validation passes
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Validate the new value
    const error = validateField(name, value);
    if (error) {
      setErrors(prev => ({...prev, [name]: error}));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate all fields
    let newErrors = {};
    let hasErrors = false;
    
    // Validate each field
    Object.entries(formData).forEach(([fieldName, fieldValue]) => {
      const error = validateField(fieldName, fieldValue);
      if (error) {
        newErrors[fieldName] = error;
        hasErrors = true;
      }
    });
    
    // If there are errors, update the errors state and don't submit
    if (hasErrors) {
      setErrors(newErrors);
      // Scroll to the first error
      const firstErrorField = document.querySelector(`[name="${Object.keys(newErrors)[0]}"]`);
      if (firstErrorField) firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
      
      return;
    }
    
    // If all validations pass, proceed with submission
    console.log("Form Data:", formData);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  // Helper function to render form field with error message
  const renderField = (label, name, type = "text", value, placeholder = "") => (
    <div className="tw-mt-3">
      <label className="tw-block tw-text-sm tw-font-medium tw-mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        className={`tw-w-full tw-border tw-p-2 tw-rounded-md tw-text-sm ${
          errors[name] ? "tw-border-red-500" : ""
        }`}
      />
      {errors[name] && (
        <p className="tw-text-red-500 tw-text-xs tw-mt-1">{errors[name]}</p>
      )}
    </div>
  );

  return (
    <div className="tw-bg-gray-100 tw-min-h-screen">
      {/* Success Popup */}
      {showPopup && (
        <div className="tw-fixed tw-inset-0 tw-bg-black tw-bg-opacity-50 tw-flex tw-items-center tw-justify-center tw-z-50">
          <div className="tw-bg-white tw-rounded-lg tw-shadow-xl tw-p-6 tw-max-w-sm tw-w-full tw-mx-4 tw-text-center tw-relative">
            <button 
              onClick={closePopup} 
              className="tw-absolute tw-right-3 tw-top-3 tw-text-gray-500 hover:tw-text-gray-700"
            >
              <X size={16} />
            </button>
            <div className="tw-flex tw-justify-center tw-mb-3">
              <div className="tw-bg-green-100 tw-rounded-full tw-p-3">
                <CheckCircle size={32} className="tw-text-green-500" />
              </div>
            </div>
            <h2 className="tw-text-xl tw-font-bold tw-mb-2">Completed</h2>
            <p className="tw-text-gray-600 tw-mb-4 tw-text-sm">Your details have been updated successfully.</p>
            <button
              onClick={closePopup}
              className="tw-bg-blue-800 tw-text-white tw-font-bold tw-py-2 tw-px-4 tw-rounded-md tw-text-sm tw-w-full"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {/* Image Upload Popup */}
      {showImagePopup && (
        <div className="tw-fixed tw-inset-0 tw-bg-black tw-bg-opacity-50 tw-flex tw-items-center tw-justify-center tw-z-50">
          <div className="tw-bg-white tw-rounded-lg tw-shadow-xl tw-p-4 tw-max-w-xs tw-w-full tw-mx-3 tw-relative">
            <button 
              onClick={closeImagePopup} 
              className="tw-absolute tw-right-2 tw-top-2 tw-text-gray-500 hover:tw-text-gray-700"
            >
              <X size={14} />
            </button>
            <h2 className="tw-text-base tw-font-bold tw-mb-2 tw-text-center">Upload Profile Image</h2>
            
            <div className="tw-border tw-border-dashed tw-border-gray-300 tw-rounded-lg tw-p-6 tw-flex tw-flex-col tw-items-center tw-justify-center tw-my-3">
              {selectedFile ? (
                <div className="tw-text-center">
                  <div className="tw-flex tw-justify-center tw-mb-2">
                    <img 
                      src={URL.createObjectURL(selectedFile)} 
                      alt="Preview" 
                      className="tw-h-20 tw-w-20 tw-object-cover tw-rounded-full"
                    />
                  </div>
                  <p className="tw-text-xs tw-text-gray-600">{selectedFile.name}</p>
                </div>
              ) : (
                <>
                  <div className="tw-mb-3 tw-bg-gray-100 tw-rounded-full tw-p-2">
                    <Upload size={20} className="tw-text-gray-500" />
                  </div>
                  <p className="tw-text-center tw-text-xs tw-text-gray-400 tw-mt-1">
                    Only .jpg format is allowed
                  </p>
                </>
              )}
              <input
                type="file"
                accept="image/jpeg"
                onChange={handleFileSelect}
                className="tw-hidden"
                id="profile-upload"
              />
              <label 
                htmlFor="profile-upload"
                className="tw-mt-2 tw-cursor-pointer tw-text-blue-700 tw-font-medium tw-text-xs"
              >
                {selectedFile ? "Change file" : "Browse file"}
              </label>
            </div>

            <div className="tw-flex tw-justify-between tw-gap-2 tw-mt-3">
              <button
                onClick={closeImagePopup}
                className="tw-bg-gray-100 tw-text-gray-800 tw-font-medium tw-py-1.5 tw-px-3 tw-rounded-md tw-text-xs tw-flex-1"
              >
                Cancel
              </button>
              <button
                onClick={handleUploadImage}
                disabled={!selectedFile}
                className={`tw-font-medium tw-py-1.5 tw-px-3 tw-rounded-md tw-text-xs tw-flex-1 ${
                  selectedFile 
                    ? "tw-bg-blue-800 tw-text-white" 
                    : "tw-bg-blue-200 tw-text-blue-400 tw-cursor-not-allowed"
                }`}
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="tw-flex tw-items-center tw-flex-wrap tw-space-x-1 tw-bg-white tw-text-black-600 tw-p-3 tw-border-b tw-shadow-sm">
        <a href="#" className="tw-font-bold tw-text-base tw-text-black">
          Profile
        </a>
        <div className="tw-flex tw-items-center tw-flex-wrap tw-space-x-1 tw-text-xs md:tw-text-sm tw-text-gray-500">
          <a href="#" className="hover:tw-text-black">Home</a>
          <span className="tw-text-gray-400">{">"}</span>
          <a href="#" className="hover:tw-text-black">Profile</a>
          <span className="tw-text-gray-400">{">"}</span>
          <a href="#" className="hover:tw-text-black">Settings</a>
          <span className="tw-text-gray-400">{">"}</span>
          <a href="#" className="hover:tw-text-black">My Profile</a>
        </div>
      </nav>

      <form onSubmit={handleSubmit} className="tw-p-3 md:tw-p-6">
        <div className="tw-bg-white tw-shadow-lg tw-rounded-lg tw-overflow-hidden">
          {/* Profile Header - Mobile View */}
          <div className="tw-block md:tw-hidden tw-bg-white tw-p-4 tw-text-center tw-border-b">
            <div className="tw-flex tw-justify-center tw-mb-2">
              <div className="tw-relative tw-inline-block">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="tw-w-24 tw-h-24 tw-rounded-full tw-border-2 tw-border-gray-300 tw-object-cover"
                />
                <button 
                  type="button"
                  onClick={handleImageClick}
                  className="tw-absolute tw-bottom-1 tw-right-1 tw-bg-blue-600 tw-text-white tw-rounded-full tw-p-1 tw-cursor-pointer"
                >
                  <Pencil size={16} />
                </button>
              </div>
            </div>
            <h3 className="tw-text-xl tw-font-bold tw-text-black">
              {formData.firstName} {formData.lastName}
            </h3>
            <p className="tw-text-gray-600 tw-text-sm">Data Researcher</p>
            <p className="tw-text-gray-600 tw-text-sm">
              Student ID: <span className="tw-font-medium">user1@123456</span>
            </p>
            <button 
              type="button"
              className="tw-text-blue-900 tw-font-bold tw-mt-2" 
              onClick={handleChangePassword}
            >
              Change Password
            </button>
          </div>

          <div className="tw-flex tw-flex-col md:tw-flex-row">
            {/* Profile Sidebar - Desktop View */}
            <div className="tw-hidden md:tw-block tw-w-64 tw-bg-white tw-p-6 tw-border-r">
              <h2 className="tw-text-lg tw-font-bold tw-mb-4 tw-text-black">My profile</h2>
              <div className="tw-relative tw-inline-block">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="tw-w-24 tw-h-24 tw-rounded-full tw-border-2 tw-border-gray-300 tw-object-cover"
                />
                <button 
                  type="button"
                  onClick={handleImageClick}
                  className="tw-absolute tw-bottom-1 tw-right-1 tw-bg-blue-600 tw-text-white tw-rounded-full tw-p-1 tw-cursor-pointer"
                >
                  <Pencil size={16} />
                </button>
              </div>

              <h3 className="tw-text-xl tw-font-bold tw-text-black tw-mt-2">
                {formData.firstName} {formData.lastName}
              </h3>
              <p className="tw-text-gray-600 tw-text-sm">Data Researcher</p>
              <p className="tw-text-gray-600 tw-text-sm">
                Student ID: <span className="tw-font-medium">user1@123456</span>
              </p>
              <button 
                type="button"
                className="tw-text-blue-900 tw-font-bold tw-mt-2" 
                onClick={handleChangePassword}
              >
                Change Password
              </button>
            </div>

            {/* Main Content Area */}
            <div className="tw-flex-1 tw-p-4">
              <div className="tw-flex tw-flex-col md:tw-flex-row tw-gap-4">
                {/* Personal Information */}
                <div className="tw-w-full md:tw-w-1/2 tw-bg-white tw-border tw-border-gray-300 tw-rounded-lg tw-p-4 tw-mb-4">
                  <h3 className="tw-text-lg tw-font-bold tw-mb-4">Personal Information</h3>
                  
                  <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-4">
                    <div>
                      <label className="tw-block tw-text-sm tw-font-medium tw-mb-1">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={`tw-w-full tw-border tw-p-2 tw-rounded-md tw-text-sm ${
                          errors.firstName ? "tw-border-red-500" : ""
                        }`}
                      />
                      {errors.firstName && (
                        <p className="tw-text-red-500 tw-text-xs tw-mt-1">{errors.firstName}</p>
                      )}
                    </div>
                    <div>
                      <label className="tw-block tw-text-sm tw-font-medium tw-mb-1">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={`tw-w-full tw-border tw-p-2 tw-rounded-md tw-text-sm ${
                          errors.lastName ? "tw-border-red-500" : ""
                        }`}
                      />
                      {errors.lastName && (
                        <p className="tw-text-red-500 tw-text-xs tw-mt-1">{errors.lastName}</p>
                      )}
                    </div>
                  </div>

                  <div className="tw-mt-3">
                    <label className="tw-block tw-text-sm tw-font-medium tw-mb-1">Email address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`tw-w-full tw-border tw-p-2 tw-rounded-md tw-text-sm ${
                        errors.email ? "tw-border-red-500" : ""
                      }`}
                    />
                    {errors.email && (
                      <p className="tw-text-red-500 tw-text-xs tw-mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div className="tw-mt-3">
                    <label className="tw-block tw-text-sm tw-font-medium tw-mb-1">Phone no.</label>
                    <PhoneInput
                      country={"in"}
                      value={formData.phone}
                      onChange={(phone) => {
                        setFormData((prev) => ({ ...prev, phone }));
                        setErrors(prev => ({...prev, phone: null}));
                        if (!phone) setErrors(prev => ({...prev, phone: "Phone number is required"}));
                      }}
                      inputClass={`tw-w-full tw-border tw-rounded-md tw-p-2 !tw-min-w-full tw-text-sm ${
                        errors.phone ? "tw-border-red-500" : ""
                      }`}
                      containerClass="tw-w-full"
                      buttonClass="tw-border"
                    />
                    {errors.phone && (
                      <p className="tw-text-red-500 tw-text-xs tw-mt-1">{errors.phone}</p>
                    )}
                  </div>

                  {renderField("Language known", "languages", "text", formData.languages)}
                  
                  <div className="tw-mt-3">
                    <label className="tw-block tw-text-sm tw-font-medium tw-mb-1">Full Address</label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      rows="3"
                      className={`tw-w-full tw-border tw-p-2 tw-rounded-md tw-text-sm ${
                        errors.address ? "tw-border-red-500" : ""
                      }`}
                    />
                    {errors.address && (
                      <p className="tw-text-red-500 tw-text-xs tw-mt-1">{errors.address}</p>
                    )}
                  </div>

                  {renderField("LinkedIn Profile link", "linkedin", "url", formData.linkedin)}
                  {renderField("GitHub link", "github", "url", formData.github)}
                </div>

                {/* Education */}
                <div className="tw-w-full md:tw-w-1/2 tw-bg-white tw-border tw-border-gray-300 tw-rounded-lg tw-p-4 tw-mb-4">
                  <h3 className="tw-text-lg tw-font-bold tw-mb-4">Education</h3>

                  {renderField("Education - HSC", "hscSchool", "text", formData.hscSchool)}
                  {renderField("Subject Specialization", "hscSubjects", "text", formData.hscSubjects)}
                  {renderField("Mention Year", "hscYear", "text", formData.hscYear, "YYYY-YYYY")}
                  {renderField("Education - University", "university", "text", formData.university)}
                  {renderField("Subject Specialization", "universitySpecialization", "text", formData.universitySpecialization)}
                  {renderField("Mention Year", "universityYear", "text", formData.universityYear, "YYYY-YYYY")}
                </div>
              </div>
              
              {/* Update Button */}
              <div className="tw-flex tw-justify-center md:tw-justify-end tw-mt-4">
                <button
                  type="submit"
                  className="tw-bg-blue-800 tw-text-white tw-font-bold tw-py-2 tw-px-6 tw-rounded-md"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}