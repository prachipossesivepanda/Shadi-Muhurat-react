import React from "react";

import Rupees from "../../assets/images/Rupees.svg";
import Free from "../../assets/images/free.svg";
import Dollar from "../../assets/images/dollar.svg";
import Money from "../../assets/images/money.svg";

const Plan = () => {
    return (
        <section className="plan-section text-center px-4">
            <h2 className="text-2xl font-semibold mb-6">Choose The Perfect Plan</h2>

            {/* Plans */}
            <div className="plans-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="plan-card relative w-full sm:w-[350px] lg:w-[410px] h-auto bg-white shadow-lg rounded-lg">
                    <img src={Free} alt="Free" className="w-full h-auto" />
                    <button className="plan-btn absolute bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-orange-500 text-white rounded-lg">
                        Get Started Now
                    </button>
                </div>

                <div className="plan-card relative w-full sm:w-[350px] lg:w-[410px] h-auto bg-white shadow-lg rounded-lg">
                    <img src={Dollar} alt="$25" className="w-full h-auto" />
                    <button className="plan-btn absolute bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-orange-500 text-white rounded-lg">
                        Get Started Now
                    </button>
                </div>

                <div className="plan-card relative w-full sm:w-[350px] lg:w-[410px] h-auto bg-white shadow-lg rounded-lg">
                    <img src={Rupees} alt="₹75" className="w-full h-auto" />
                    <button className="plan-btn absolute bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-orange-500 text-white rounded-lg">
                        Get Started Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Plan;
