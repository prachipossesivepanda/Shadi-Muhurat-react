import React from "react";

const Profile = () => {
  return (
    <div className="bg-[#FAF3EC] py-10 px-4 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-gray-500 text-sm uppercase">BROWSE</h2>
        <h1 className="text-2xl md:text-3xl font-semibold mt-2">
          <span className="text-red-600">Matrimonial</span> Profiles by
        </h1>

        {/* Categories */}
        <div className="mt-2 flex flex-wrap  pl-[1.042vw] justify-center gap-6 text-gray-600 text-lg">
          <span className="bg-[#E3CBBE] px-4 py-2 rounded-full text-[#C1645C]">
            Mother Tongue
          </span>
          {["Caste", "Religion", "City", "Occupation", "State", "NRI", "College"].map((category, index) => (
            <span key={index} className="cursor-pointer text-[#8997A0] hover:text-red-500">
              {category}
            </span>
          ))}
        </div>

        {/* Language List */}
        <div className="mt-6 text-gray-500 flex flex-wrap justify-center gap-3 text-sm md:text-base">
          {[
            "Bihari", "Bengali", "Hindi", "Gujarati", "Kannada", "Malayalam",
            "Marathi", "Oriya", "Punjabi", "Rajasthani", "Tamil", "Telugu",
            "Hindi UP", "Hindi MP", "Konkani", "Himachali", "Haraynvi",
            "Assamese", "Kashmiri", "Sikkim Nepali", "Tulu"
          ].map((language, index, array) => (
            <span key={index} className="cursor-pointer text-[#BAB8BA]">
              {language} {index !== array.length - 1 && <span className="mx-1">|</span>}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
