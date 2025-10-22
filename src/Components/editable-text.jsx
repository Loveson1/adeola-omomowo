
import { useState } from "react";
;

// naming convention


const Edit = () => {
  // mock user data
  const user = {
    name: "James Alfred",
    phone: "09012345678",
    location: "Abuja, Nigeria",
    email: "james@gmail.com",
     dob: "",
  };



  const infos = [
    { key: "name", label: "Full Name: ", editable: true },
    { key: "email", label: "Email Address:", editable: false },
    { key: "phone", label: "Contact:", editable: true },
    { key: "location", label: "Location:", editable: true },
     { key: "dob", label: "Date of Birth:", editable: true },
  ];

  

  const [editingInfo, setEditingInfo] = useState(null); // state for handling editing

  const [formData, setFormData] = useState(user); //state for changing users data

  // function for changing users data
  function handleChange(key, value) {
    setFormData((prev) => ({ ...prev, [key]: value }));
  }

  // function for saving data
  function updateInputFieldValue() {
    setEditingInfo(null);
  }
  return (
    <div>
     
      {/* details edit my information */}
      <div className="my-12">
        {infos.map((info) => (
          <div
            key={info.key}
            className="gap-2 flex w-full justify-between py-3 px-6 border-b-[1px] border-b-gray-200 rounded-[8px] "
          >
            <div className="flex  max-sm:flex-col">
              <p className="font-medium max-sm:text-sm">{info.label}</p>
              {editingInfo === info.key ? (
                <input
                  className="max-sm:text-sm"
                  value={formData[info.key]}
                  onChange={(e) => handleChange(info.key, e.target.value)}
                  autoFocus
                />
              ) : (
                <p className="text-left max-sm:text-sm ml-5">{formData[info.key]}</p>
              )}
            </div>
            <div>
              {/* 1st condition = if button is editable let it work */}
              {info.editable ? (
                <>
                  {/* 2nd condition = if edit button is clicked chnage to save */}
                  {editingInfo === info.key ? (
                    <button
                      className="max-sm:text-xs text-sm text-white rounded-[7px] bg-blue-500 px-3 py-1 "
                      onClick={updateInputFieldValue}
                    >
                      save
                    </button>
                  ) : (
                    <button
                      onClick={() => setEditingInfo(info.key)}
                      className="flex text-iq max-sm:text-sm "
                    >
                      Edit
                     
                    </button>
                  )}
                </>
              ) : (
                <button
                  disabled
                  className="max-sm:text-sm opacity-30 cursor-not-allowed flex text-iq "
                >
                  Edit
                 
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

        </div>
  );
};

export default Edit;
