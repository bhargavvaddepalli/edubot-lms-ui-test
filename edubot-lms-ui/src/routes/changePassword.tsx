import { useState } from "react";
import { X, EyeOff, Eye, CheckCircle } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";



export const Route = createFileRoute("/changePassword")({
    component: ChangePasswordPage,
  });
function ChangePasswordPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const togglePasswordVisibility = (field) => {
    setShowPassword(prev => ({ ...prev, [field]: !prev[field] }));
  };

  const validatePassword = (password) => {
    // At least 8 characters, one uppercase, one lowercase, one number, and one special character
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
  
    // Validate current password is not empty
    if (!passwordData.currentPassword) {
      newErrors.currentPassword = "Current password is required";
    }
  
    // Validate new password
    if (!passwordData.newPassword) {
      newErrors.newPassword = "New password is required"; // Fixed line
    } else if (!validatePassword(passwordData.newPassword)) {
      newErrors.newPassword = "Password must meet all requirements";
    }
  
    // Validate password confirmation
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
  
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
  
    // Show success popup
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    // Reset form after successful password change
    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    });
  };

  return (
    <div className="tw-md:p-10 tw-bg-gray-100 tw-min-h-screen">
      {showPopup && (
        <div className="tw-fixed tw-inset-0 tw-bg-black tw-bg-opacity-50 tw-flex tw-items-center tw-justify-center tw-z-50">
          <div className="tw-bg-white tw-rounded-lg tw-shadow-xl tw-p-8 tw-max-w-sm tw-w-full tw-mx-4 tw-text-center tw-relative">
            <button 
              onClick={closePopup} 
              className="tw-absolute tw-right-3 tw-top-3 tw-text-gray-500 hover:tw-text-gray-700"
            >
              <X size={16} />
            </button>
            <div className="tw-flex tw-justify-center tw-mb-3">
              <div className="tw-bg-green-100 tw-rounded-full tw-p-3">
                <CheckCircle size={40} className="tw-text-green-500" />
              </div>
            </div>
            <h2 className="tw-text-xl tw-font-bold tw-mb-2">Completed</h2>
            <p className="tw-text-gray-600 tw-mb-4 tw-text-sm">Your password has been updated successfully.</p>
            <button
              onClick={closePopup}
              className="tw-bg-blue-800 tw-text-white tw-font-bold tw-py-2 tw-px-4 tw-rounded-md tw-text-sm tw-w-full"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      <nav className="tw-flex tw-items-center tw-space-x-2 tw-bg-white tw-text-black-600 tw-p-4 tw-border-b tw-shadow-sm">
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
          <a href="#" className="hover:tw-text-black">Change Password</a>
        </div>
      </nav>

      <div className="tw-max-w-md tw-mx-auto tw-mt-10">
        <div className="tw-bg-white tw-rounded-lg tw-shadow-lg tw-p-6">
          <h2 className="tw-text-lg tw-font-bold tw-mb-4">Change Password</h2>
          <p className="tw-text-sm tw-text-gray-600 tw-mb-6">
            To change your password, please fill in the fields below.
            Your password must contain at least 8 characters. It must include at least one
            uppercase letter, one lowercase letter, one number and one special character.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="tw-mb-4">
              <label className="tw-block tw-font-medium tw-mb-1">Current Password</label>
              <div className="tw-relative">
                <input
                  type={showPassword.current ? "text" : "password"}
                  name="currentPassword"
                  value={passwordData.currentPassword}
                  onChange={handleChange}
                  className={`tw-w-full tw-border-2 ${errors.currentPassword ? 'tw-border-red-500' : 'tw-border-gray-300'} tw-p-2 tw-pr-10 tw-rounded-md`}
                />
                <button 
                  type="button"
                  onClick={() => togglePasswordVisibility('current')} 
                  className="tw-absolute tw-right-3 tw-top-2.5 tw-text-gray-400"
                >
                  {showPassword.current ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.currentPassword && <p className="tw-text-red-500 tw-text-xs tw-mt-1">{errors.currentPassword}</p>}
            </div>

            <div className="tw-mb-4">
              <label className="tw-block tw-font-medium tw-mb-1">New Password</label>
              <div className="tw-relative">
                <input
                  type={showPassword.new ? "text" : "password"}
                  name="newPassword"
                  value={passwordData.newPassword}
                  onChange={handleChange}
                  className={`tw-w-full tw-border-2 ${errors.newPassword ? 'tw-border-red-500' : 'tw-border-gray-300'} tw-p-2 tw-pr-10 tw-rounded-md`}
                />
                <button 
                  type="button"
                  onClick={() => togglePasswordVisibility('new')} 
                  className="tw-absolute tw-right-3 tw-top-2.5 tw-text-gray-400"
                >
                  {showPassword.new ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.newPassword && <p className="tw-text-red-500 tw-text-xs tw-mt-1">{errors.newPassword}</p>}
              
              <div className="tw-mt-2 tw-bg-gray-50 tw-p-3 tw-rounded-md tw-text-xs">
                <p className="tw-font-medium tw-mb-1">Password must contain:</p>
                <ul className="tw-space-y-1">
                  <li className={`tw-flex tw-items-center ${passwordData.newPassword.length >= 8 ? 'tw-text-green-600' : 'tw-text-gray-500'}`}>
                    <span className="tw-mr-1">•</span> At least 8 characters
                  </li>
                  <li className={`tw-flex tw-items-center ${/[A-Z]/.test(passwordData.newPassword) ? 'tw-text-green-600' : 'tw-text-gray-500'}`}>
                    <span className="tw-mr-1">•</span> One uppercase letter
                  </li>
                  <li className={`tw-flex tw-items-center ${/[a-z]/.test(passwordData.newPassword) ? 'tw-text-green-600' : 'tw-text-gray-500'}`}>
                    <span className="tw-mr-1">•</span> One lowercase letter
                  </li>
                  <li className={`tw-flex tw-items-center ${/\d/.test(passwordData.newPassword) ? 'tw-text-green-600' : 'tw-text-gray-500'}`}>
                    <span className="tw-mr-1">•</span> One number
                  </li>
                  <li className={`tw-flex tw-items-center ${/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(passwordData.newPassword) ? 'tw-text-green-600' : 'tw-text-gray-500'}`}>
                    <span className="tw-mr-1">•</span> One special character
                  </li>
                </ul>
              </div>
            </div>

            <div className="tw-mb-6">
              <label className="tw-block tw-font-medium tw-mb-1">Confirm Password</label>
              <div className="tw-relative">
                <input
                  type={showPassword.confirm ? "text" : "password"}
                  name="confirmPassword"
                  value={passwordData.confirmPassword}
                  onChange={handleChange}
                  className={`tw-w-full tw-border-2 ${errors.confirmPassword ? 'tw-border-red-500' : 'tw-border-gray-300'} tw-p-2 tw-pr-10 tw-rounded-md`}
                />
                <button 
                  type="button"
                  onClick={() => togglePasswordVisibility('confirm')} 
                  className="tw-absolute tw-right-3 tw-top-2.5 tw-text-gray-400"
                >
                  {showPassword.confirm ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.confirmPassword && <p className="tw-text-red-500 tw-text-xs tw-mt-1">{errors.confirmPassword}</p>}
            </div>

            <button
              type="submit"
              className="tw-bg-blue-800 tw-text-white tw-font-bold tw-py-2 tw-px-4 tw-rounded-md tw-w-full"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChangePasswordPage;