'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useFormStore, { FormData } from '../store/useFormStore';

// Step 1: Personal Information
export const Step1 = () => {
  const { formData, updateFormData, nextStep } = useFormStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ defaultValues: formData });

  const onSubmit = (data: Partial<FormData>) => {
    updateFormData(data);
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h2 className="text-xl font-bold text-gray-800">Step 1: Personal Information</h2>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
        <input
          {...register('fullName', { required: 'Full Name is required' })}
          placeholder="John Doe"
          className="w-full border border-gray-300 rounded-md p-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: { value: /^\S+@\S+\.\S+$/i, message: 'Invalid email address' },
          })}
          placeholder="john@example.com"
          className="w-full border border-gray-300 rounded-md p-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number (Optional)</label>
        <input
          {...register('phone')}
          placeholder="+1 234 567 890"
          className="w-full border border-gray-300 rounded-md p-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 cursor-pointer transition"
      >
        Next Step
      </button>
    </form>
  );
};

// Step 2: Address Details
export const Step2 = () => {
  const { formData, updateFormData, nextStep, prevStep } = useFormStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ defaultValues: formData });

  const onSubmit = (data: Partial<FormData>) => {
    updateFormData(data);
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h2 className="text-xl font-bold text-gray-800">Step 2: Address Details</h2>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Street Address *</label>
        <input
          {...register('street', { required: 'Street Address is required' })}
          placeholder="123 Main St"
          className="w-full border border-gray-300 rounded-md p-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.street && <p className="text-red-500 text-xs mt-1">{errors.street.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
        <input
          {...register('city', { required: 'City is required' })}
          placeholder="New York"
          className="w-full border border-gray-300 rounded-md p-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Zip Code *</label>
        <input
          {...register('zip', {
            required: 'Zip Code is required',
            pattern: { value: /^[0-9]+$/, message: 'Zip Code must be numeric' },
          })}
          placeholder="10001"
          className="w-full border border-gray-300 rounded-md p-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.zip && <p className="text-red-500 text-xs mt-1">{errors.zip.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Country *</label>
        <select
          {...register('country', { required: 'Please select a country' })}
          className="w-full border border-gray-300 rounded-md p-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
        >
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="USA">United States</option>
          <option value="UK">United Kingdom</option>
          <option value="Canada">Canada</option>
        </select>
        {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country.message}</p>}
      </div>

      <div className="flex justify-between gap-4">
        <button
          type="button"
          onClick={prevStep}
          className="w-1/2 bg-gray-200 text-gray-700 font-semibold py-2 rounded-md hover:bg-gray-300 cursor-pointer transition"
        >
          Back
        </button>
        <button
          type="submit"
          className="w-1/2 bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 cursor-pointer transition"
        >
          Next Step
        </button>
      </div>
    </form>
  );
};

// Step 3: Account Credentials
export const Step3 = () => {
  const { formData, updateFormData, nextStep, prevStep } = useFormStore();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({ defaultValues: formData });

  const onSubmit = (data: Partial<FormData>) => {
    updateFormData(data);
    nextStep();
  };

  const password = watch('password');

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h2 className="text-xl font-bold text-gray-800">Step 3: Account Credentials</h2>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Username *</label>
        <input
          {...register('username', { required: 'Username is required' })}
          placeholder="johndoe99"
          className="w-full border border-gray-300 rounded-md p-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Password *</label>
        <input
          type="password"
          {...register('password', {
            required: 'Password is required',
            minLength: { value: 8, message: 'Password must be at least 8 characters' },
          })}
          placeholder="••••••••"
          className="w-full border border-gray-300 rounded-md p-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password *</label>
        <input
          type="password"
          {...register('confirmPassword', {
            required: 'Please confirm your password',
            validate: (value) => value === password || 'Passwords do not match',
          })}
          placeholder="••••••••"
          className="w-full border border-gray-300 rounded-md p-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>
        )}
      </div>

      <div className="flex justify-between gap-4">
        <button
          type="button"
          onClick={prevStep}
          className="w-1/2 bg-gray-200 text-gray-700 font-semibold py-2 rounded-md hover:bg-gray-300 cursor-pointer transition"
        >
          Back
        </button>
        <button
          type="submit"
          className="w-1/2 bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 cursor-pointer transition"
        >
          Review Summary
        </button>
      </div>
    </form>
  );
};

// Step 4: Confirmation Summary with Custom Dialog Modal
export const Step4 = () => {
  const { formData, prevStep, setStep, resetForm } = useFormStore();
  const [isOpen, setIsOpen] = useState(false);

  const handleFinalSubmit = () => {
    console.log('Final Form Data Submitted:', formData);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    resetForm();
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-800">Step 4: Confirmation Summary</h2>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-3 text-sm text-gray-700">
        <div className="flex justify-between border-b pb-2">
          <span className="font-semibold text-gray-900">Personal Info</span>
          <button onClick={() => setStep(1)} className="text-blue-600 hover:underline text-xs cursor-pointer">
            Edit
          </button>
        </div>
        <p><strong>Name:</strong> {formData.fullName}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Phone:</strong> {formData.phone || 'N/A'}</p>

        <div className="flex justify-between border-b pb-2 pt-2">
          <span className="font-semibold text-gray-900">Address Details</span>
          <button onClick={() => setStep(2)} className="text-blue-600 hover:underline text-xs cursor-pointer">
            Edit
          </button>
        </div>
        <p><strong>Street:</strong> {formData.street}</p>
        <p><strong>City/Zip:</strong> {formData.city}, {formData.zip}</p>
        <p><strong>Country:</strong> {formData.country}</p>

        <div className="flex justify-between border-b pb-2 pt-2">
          <span className="font-semibold text-gray-900">Account Credentials</span>
          <button onClick={() => setStep(3)} className="text-blue-600 hover:underline text-xs cursor-pointer">
            Edit
          </button>
        </div>
        <p><strong>Username:</strong> {formData.username}</p>
      </div>

      <div className="flex justify-between gap-4">
        <button
          type="button"
          onClick={prevStep}
          className="w-1/2 bg-gray-200 text-gray-700 font-semibold py-2 rounded-md hover:bg-gray-300 cursor-pointer transition"
        >
          Back
        </button>
        <button
          type="button"
          onClick={handleFinalSubmit}
          className="w-1/2 bg-green-600 text-white font-semibold py-2 rounded-md hover:bg-green-700 cursor-pointer transition"
        >
          Submit Registration
        </button>
      </div>

      {/* Success Dialog Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-sm w-full p-6 shadow-2xl text-center space-y-4">
            <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
              ✓
            </div>
            <h3 className="text-lg font-bold text-gray-900">Registration Successful!</h3>
            <p className="text-sm text-gray-600">
              Your details have been saved successfully. Checked console for submitted payload.
            </p>
            <button
              onClick={handleCloseModal}
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 cursor-pointer transition"
            >
              Start New Registration
            </button>
          </div>
        </div>
      )}
    </div>
  );
};