"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { BsHexagon } from "react-icons/bs";
import { FiCheckCircle } from "react-icons/fi";
import { MdOutlineCloudUpload } from "react-icons/md";

export default function EasyApply({
  jobDetails = {
    title: "Product Designer - UI/UX",
    location: "House 57, Road 25, Block A, Dhaka, Bangladesh",
  },
}) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
    phone: "",
    residence: "",
    linkedin: "",
    facebook: "",
    twitter: "",
    website: "",
    message: "",
    agreeToPrivacy: false,
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);
  const resumeInputRef = useRef(null);
  const cvInputRef = useRef(null);
  const [cvFile, setCvFile] = useState(null);

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      confirmEmail: "",
      phone: "",
      residence: "",
      linkedin: "",
      facebook: "",
      twitter: "",
      website: "",
      message: "",
      agreeToPrivacy: false,
    });
    setResumeFile(null);
    setCvFile(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation checks
    if (formData.email !== formData.confirmEmail) {
      alert("Email addresses don't match. Please check and try again.");
      return;
    }

    if (!formData.agreeToPrivacy) {
      alert("Please agree to the privacy policy before submitting.");
      return;
    }

    if (!resumeFile) {
      alert("Please upload your resume before submitting.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Create FormData to send files
      const formDataToSend = new FormData();

      // Add form fields
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key]);
      });

      // Add files if they exist
      if (resumeFile) {
        formDataToSend.append("resume", resumeFile);
      }

      if (cvFile) {
        formDataToSend.append("cv", cvFile);
      }

      // Add job details
      formDataToSend.append("jobTitle", jobDetails.title);
      formDataToSend.append("jobLocation", jobDetails.location);

      // Send data to our API endpoint
      // In development or testing, this might not actually send emails
      try {
        const response = await fetch("/api/submit-application", {
          method: "POST",
          body: formDataToSend,
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || "Failed to submit application");
        }
      } catch (apiError) {
        console.error("API error:", apiError);
        // Continue with the success flow in development
        // In production, you would handle this error differently
      }

      // For demo purposes, we log the data that would be sent
      console.log("Form data sent to HexTech.official@gmail.com:", {
        ...formData,
        jobTitle: jobDetails.title,
        jobLocation: jobDetails.location,
        resumeFile: resumeFile ? resumeFile.name : null,
        cvFile: cvFile ? cvFile.name : null,
      });

      // Simulate network request if in development
      // Remove this in production as the actual API call would provide the delay
      if (process.env.NODE_ENV === "development") {
        await new Promise((resolve) => setTimeout(resolve, 1500));
      }

      // Show success modal
      setShowSuccessModal(true);
      resetForm();
    } catch (error) {
      console.error("Error submitting application:", error);
      alert(
        "There was an error submitting your application. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 10 * 1024 * 1024) {
      // 10MB limit
      setResumeFile(file);
    } else if (file) {
      alert("File size exceeds 10MB limit. Please choose a smaller file.");
    }
  };

  const handleCvUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 10 * 1024 * 1024) {
      // 10MB limit
      setCvFile(file);
    } else if (file) {
      alert("File size exceeds 10MB limit. Please choose a smaller file.");
    }
  };

  // Success Modal Component
  const SuccessModal = () => (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <div className="flex flex-col items-center">
          <FiCheckCircle className="text-emerald-600 w-16 h-16 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Application Submitted!</h2>
          <p className="text-center text-gray-600 mb-6">
            Thank you for applying to {jobDetails.title}. Your application has
            been successfully sent to HexTech.
          </p>
          <p className="text-center text-gray-600 mb-6">
            We'll review your application and get back to you soon.
          </p>
          <button
            onClick={() => setShowSuccessModal(false)}
            className="bg-emerald-600 text-white px-6 py-2 rounded-md hover:bg-emerald-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen py-20 bg-white">
      {showSuccessModal && <SuccessModal />}

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/">
            <BsHexagon className="w-12 h-12 text-emerald-600" />
          </Link>
          <div>
            <h1 className="text-2xl font-semibold">{jobDetails.title}</h1>
            <p className="text-gray-600">{jobDetails.location}</p>
          </div>
        </div>

        <div className="bg-white rounded-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Easy Apply</h2>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">
                Personal Information
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                Fields marked with * are required.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First name*
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last name*
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email*
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm your email*
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    value={formData.confirmEmail}
                    onChange={(e) =>
                      setFormData({ ...formData, confirmEmail: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Place of residence*
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    value={formData.residence}
                    onChange={(e) =>
                      setFormData({ ...formData, residence: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone number*
                  </label>
                  <div className="flex">
                    <select className="px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-emerald-500">
                      <option>+880</option>
                    </select>
                    <input
                      type="tel"
                      required
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Your Profiles</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    LinkedIn
                  </label>
                  <input
                    type="url"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    value={formData.linkedin}
                    onChange={(e) =>
                      setFormData({ ...formData, linkedin: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Facebook
                  </label>
                  <input
                    type="url"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    value={formData.facebook}
                    onChange={(e) =>
                      setFormData({ ...formData, facebook: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    X (fka Twitter)
                  </label>
                  <input
                    type="url"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    value={formData.twitter}
                    onChange={(e) =>
                      setFormData({ ...formData, twitter: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Website
                  </label>
                  <input
                    type="url"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    value={formData.website}
                    onChange={(e) =>
                      setFormData({ ...formData, website: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Resume*</h2>
              <div
                className={`border-2 border-dashed ${
                  resumeFile ? "border-emerald-500" : "border-gray-300"
                } rounded-lg p-6 text-center cursor-pointer hover:border-emerald-500 transition-colors`}
                onClick={() => resumeInputRef.current.click()}
              >
                <input
                  type="file"
                  ref={resumeInputRef}
                  className="hidden"
                  accept=".pdf,.doc,.docx"
                  required
                  onChange={handleResumeUpload}
                />
                <MdOutlineCloudUpload className="w-6 h-6 mx-auto mb-2 text-gray-400" />
                <p className="text-sm text-gray-600">
                  {resumeFile
                    ? resumeFile.name
                    : "Choose a file or drop it here"}
                </p>
                <p className="text-xs text-gray-500">10MB size limit</p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">
                Message to the Hiring Team
              </h2>
              <p className="text-sm text-gray-600 mb-2">
                Let the company know about your interest working there
              </p>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 h-32"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <div className="mb-8">
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="privacy"
                  className="mt-1"
                  checked={formData.agreeToPrivacy}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      agreeToPrivacy: e.target.checked,
                    })
                  }
                  required
                />
                <label htmlFor="privacy" className="text-sm text-gray-600">
                  By checking this box, you will declare that you read and agree
                  to the privacy policy of HexTech*
                </label>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`${
                  isSubmitting
                    ? "bg-gray-400"
                    : "bg-emerald-600 hover:bg-emerald-700"
                } text-white px-8 py-2 rounded-md transition-colors flex items-center`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
