'use client';

import useFormStore from '../store/useFormStore';
import { Step1, Step2, Step3, Step4 } from '../components/FormSteps';

export default function Home() {
  const step = useFormStore((state) => state.step);

  const stepsList = [
    { id: 1, title: 'Personal' },
    { id: 2, title: 'Address' },
    { id: 3, title: 'Credentials' },
    { id: 4, title: 'Confirm' },
  ];

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-lg p-6 md:p-8">
        
        {/* Progress Step Indicator */}
        <div className="mb-8 flex justify-between items-center">
          {stepsList.map((item) => {
            const isActive = step === item.id;
            const isCompleted = step > item.id;

            return (
              <div key={item.id} className="flex flex-col items-center flex-1">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm transition ${
                    isCompleted
                      ? 'bg-green-500 text-white'
                      : isActive
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {isCompleted ? '✓' : item.id}
                </div>
                <span className={`text-xs mt-1 ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-400'}`}>
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>

        {/* Dynamic Form Step Rendering */}
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        {step === 3 && <Step3 />}
        {step === 4 && <Step4 />}

      </div>
    </main>
  );
}