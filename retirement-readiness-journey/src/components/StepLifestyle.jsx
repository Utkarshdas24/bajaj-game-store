import React from "react";
import { cn } from "../utils/cn";

const StepLifestyle = ({ step, selections, onSelect, stepIndex = 2 }) => {
    const currentSelection = selections?.[step.id];

    return (
        <div
            className="flex flex-col items-center justify-start w-full"
        >

            <div className="relative z-10 w-full max-w-md px-6 py-4 flex flex-col items-center">

                {/* Step Badge */}
                <div className="mb-6">
                    <div className="px-6 py-2 bg-blue-500 text-white rounded-full text-sm font-semibold shadow-md">
                        Step {stepIndex} of 5
                    </div>
                </div>

                {/* Title */}
                <h2 className="text-3xl font-extrabold text-slate-900 text-center mb-3">
                    {step.title}
                </h2>

                {/* Description */}
                <p className="text-center text-slate-600 mb-6">
                    {step.description}
                </p>

                {/* Progress Bar */}
                <div className="w-full mb-10">
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-blue-500 rounded-full transition-all"
                            style={{ width: `${(stepIndex / 5) * 100}%` }}
                        />
                    </div>
                </div>

                {/* Options */}
                <div className="flex flex-col gap-5 w-full">
                    {step.options.map((option) => {
                        const isSelected = currentSelection === option.id;

                        return (
                            <button
                                key={option.id}
                                onClick={() => onSelect(step.id, option.id)}
                                className={cn(
                                    "flex items-center p-4 rounded-2xl transition-all duration-300 text-left",
                                    "bg-white/90 backdrop-blur-xl shadow-lg hover:shadow-xl hover:-translate-y-1",
                                    isSelected
                                        ? "ring-2 ring-blue-500"
                                        : "hover:bg-white"
                                )}
                            >
                                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-slate-50/50 rounded-lg flex items-center justify-center p-2 shadow-inner mr-4 flex-shrink-0">
                                    <img
                                        src={option.image}
                                        alt={option.label}
                                        className="max-h-full max-w-full object-contain"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-slate-900 leading-tight">
                                        {option.label}
                                    </h3>
                                    <p className="text-sm text-slate-500 mt-1">
                                        {option.sublabel}
                                    </p>
                                </div>

                                <div className={cn(
                                    "ml-2 w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-colors border-2",
                                    isSelected
                                        ? "bg-blue-500 border-blue-500 text-white shadow-sm"
                                        : "bg-slate-50 border-slate-100 text-slate-300"
                                )}>
                                    {isSelected ? <span className="text-[10px] font-bold">✓</span> : <span className="text-[10px]">→</span>}
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default StepLifestyle;
