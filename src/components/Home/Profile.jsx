import React from "react";

const Profile = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 font-sans">
      {/* Mother Tongue Section */}
      <div className="mb-8">

        <div className="flex flex-wrap gap-2 text-gray-800">
          {[
            "Bihari", "Bengali", "Hindi Delhi", "Hindi", 
            "Gujarati", "Kamada", "Malayalam", "Marathi",
            "Oriya", "Punjabi", "Rajasthani", "Tamil", "Telugu",
            "Hindi UP", "Hindi MP", "Konkani", "Himachali",
            "Haryanvi", "Assamese", "Kashmiri", "Sikkim Nepali", "Tulu"
          ].map((tongue, index) => (
            <span key={index} className="inline-block">
              {tongue}
              {index < 21 && <span className="mx-2">|</span>}
            </span>
          ))}
        </div>
      </div>

      {/* Browse Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">BROWSE</h2>
        <h1 className="text-3xl font-bold text-gray-800">Matrimonial Profiles by</h1>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3 pr-6 font-medium text-gray-700">Mother Tongue</th>
              <th className="text-left py-3 pr-6 font-medium text-gray-700">Caste</th>
              <th className="text-left py-3 pr-6 font-medium text-gray-700">Religion</th>
              <th className="text-left py-3 pr-6 font-medium text-gray-700">City</th>
              <th className="text-left py-3 pr-6 font-medium text-gray-700">Occupation</th>
              <th className="text-left py-3 pr-6 font-medium text-gray-700">State</th>
              <th className="text-left py-3 pr-6 font-medium text-gray-700">NRI</th>
              <th className="text-left py-3 pr-6 font-medium text-gray-700">College</th>
            </tr>
          </thead>
          <tbody>
            {/* First Row */}
            <tr className="border-b">
              <td className="py-3 pr-6">
                <div className="flex flex-wrap gap-x-2 items-center">
                  {["Bihari", "Bengali", "Hindi Delhi", "Hindi", "Gujarati", "Kamada", "Malayalam", "Marathi", "Oriya", "Punjabi", "Rajasthani", "Tamil", "Telugu"].map((item, index) => (
                    <React.Fragment key={index}>
                      <span className="text-gray-800">{item}</span>
                      {index < 12 && <span className="text-gray-400">|</span>}
                    </React.Fragment>
                  ))}
                </div>
              </td>
              <td className="py-3 pr-6 text-gray-500">-</td>
              <td className="py-3 pr-6 text-gray-500">-</td>
              <td className="py-3 pr-6 text-gray-500">-</td>
              <td className="py-3 pr-6 text-gray-500">-</td>
              <td className="py-3 pr-6 text-gray-500">-</td>
              <td className="py-3 pr-6 text-gray-500">-</td>
              <td className="py-3 pr-6 text-gray-500">-</td>
            </tr>
            
            {/* Second Row */}
            <tr>
              <td className="py-3 pr-6">
                <div className="flex flex-wrap gap-x-2 items-center">
                  {["Hindi UP", "Hindi MP", "Konkani", "Himachali", "Haryanvi", "Assamese", "Kashmiri", "Sikkim Nepali", "Tulu"].map((item, index) => (
                    <React.Fragment key={index}>
                      <span className="text-gray-800">{item}</span>
                      {index < 8 && <span className="text-gray-400">|</span>}
                    </React.Fragment>
                  ))}
                </div>
              </td>
              <td className="py-3 pr-6 text-gray-500">-</td>
              <td className="py-3 pr-6 text-gray-500">-</td>
              <td className="py-3 pr-6 text-gray-500">-</td>
              <td className="py-3 pr-6 text-gray-500">-</td>
              <td className="py-3 pr-6 text-gray-500">-</td>
              <td className="py-3 pr-6 text-gray-500">-</td>
              <td className="py-3 pr-6 text-gray-500">-</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="mt-4 text-right text-sm text-gray-500">
        1920-4.15
      </div>
    </div>
  );
};

export default Profile;