import React, { useState } from "react";
import InputType from "./InputType";
import { Link } from "react-router-dom";
import { handleLogin, handleRegister } from "../../../Services/authService";

const Form = ({ formType, submitBtn, formTitle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("donar");
  const [name, setName] = useState("");
  const [organisationName, setOrganisationName] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [website, setWebsite] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <form
        onSubmit={(e) => {
          if (formType === "login")
            return handleLogin(e, email, password, role);
          else if (formType === "register")
            return handleRegister(
              e,
              name,
              role,
              email,
              password,
              phone,
              organisationName,
              address,
              hospitalName,
              website
            );
        }}
      >
        <h1 className="text-2xl font-bold text-center mb-4">{formTitle}</h1>
        <hr className="mb-4" />
        <div className="flex flex-wrap gap-4 mb-4">
          <div className="flex items-center">
            <input
              type="radio"
              className="mr-2"
              name="role"
              id="donarRadio"
              value="donar"
              onChange={(e) => setRole(e.target.value)}
              defaultChecked
            />
            <label htmlFor="donarRadio" className="text-gray-700">
              Donar
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              className="mr-2"
              name="role"
              id="adminRadio"
              value="admin"
              onChange={(e) => setRole(e.target.value)}
            />
            <label htmlFor="adminRadio" className="text-gray-700">
              Admin
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              className="mr-2"
              name="role"
              id="hospitalRadio"
              value="hospital"
              onChange={(e) => setRole(e.target.value)}
            />
            <label htmlFor="hospitalRadio" className="text-gray-700">
              Hospital
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              className="mr-2"
              name="role"
              id="organisationRadio"
              value="organisation"
              onChange={(e) => setRole(e.target.value)}
            />
            <label htmlFor="organisationRadio" className="text-gray-700">
              Organisation
            </label>
          </div>
        </div>

        {(() => {
          switch (true) {
            case formType === "login":
              return (
                <>
                  <InputType
                    labelText="Email"
                    labelFor="forEmail"
                    inputType="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <InputType
                    labelText="Password"
                    labelFor="forPassword"
                    inputType="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </>
              );
            case formType === "register":
              return (
                <>
                  {(role === "admin" || role === "donar") && (
                    <InputType
                      labelText="Name"
                      labelFor="forName"
                      inputType="text"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  )}
                  {role === "organisation" && (
                    <InputType
                      labelText="Organisation Name"
                      labelFor="fororganisationName"
                      inputType="text"
                      name="organisationName"
                      value={organisationName}
                      onChange={(e) => setOrganisationName(e.target.value)}
                    />
                  )}
                  {role === "hospital" && (
                    <InputType
                      labelText="Hospital Name"
                      labelFor="forHospitalName"
                      inputType="text"
                      name="hospitalName"
                      value={hospitalName}
                      onChange={(e) => setHospitalName(e.target.value)}
                    />
                  )}
                  <InputType
                    labelText="Email"
                    labelFor="forEmail"
                    inputType="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <InputType
                    labelText="Password"
                    labelFor="forPassword"
                    inputType="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputType
                    labelText="Website"
                    labelFor="forWebsite"
                    inputType="text"
                    name="website"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                  <InputType
                    labelText="Address"
                    labelFor="forAddress"
                    inputType="text"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <InputType
                    labelText="Phone"
                    labelFor="forPhone"
                    inputType="text"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </>
              );
          }
        })()}

        <div className="flex justify-between items-center mt-4">
          {formType === "login" ? (
            <p className="text-gray-600">
              Not registered yet?
              <Link to="/register" className="text-blue-500 ml-1">
                Register here!
              </Link>
            </p>
          ) : (
            <p className="text-gray-600">
              Already a user?
              <Link to="/login" className="text-blue-500 ml-1">
                Login!
              </Link>
            </p>
          )}
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            type="submit"
          >
            {submitBtn}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
