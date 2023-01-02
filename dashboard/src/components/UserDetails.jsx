import React from "react";
import { BsFillCartFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

function UserDetails() {
  return (
    <div className="w-full  mt-2">
      <div className="bg-white rounded-md px-2 h-10 flex items-center justify-between">
        <h2 className="text-md font-semibold">Karthik's details</h2>
        <div className="flex gap-x-2">
          <button
            type="button"
            className="text-sm text-white bg-slate-900 px-4 py-1 rounded-md"
          >
            View Properties
          </button>
          <button
            type="button"
            className="text-sm border-2 border-slate-900 px-4 py-1 rounded-md"
          >
            View Orders
          </button>
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <button
          type="button"
          className="bg-white px-4 py-[2px] flex items-center rounded-md gap-x-1"
        >
          <BsFillCartFill />
          <p className="font-semibold">Cart</p>
        </button>

        <button
          type="button"
          className="bg-white px-4 py-[2px] flex items-center rounded-md gap-x-1"
        >
          <FiEdit />
          <p className="font-semibold">Cart</p>
        </button>
      </div>

      <div className=" w-full bg-white mt-3 overflow-hidden rounded-md flex">
        {/* Side  */}
        <div className="flex flex-col w-1/5 lg:w-2/12 items-center px-2 my-2">
          <img
            src="images/keanu.jpg"
            alt=""
            className="object-cover aspect-square roun rounded-md"
          />

          <div className="text-center mt-2">
            <div className="text-3xl font-bold">02</div>
            <p className="text-xs">Total Properties</p>
          </div>
          <div className=" text-center mt-2">
            <div className="text-3xl font-bold">5.3Cr</div>
            <p className="text-xs">Net Worth</p>
          </div>
          <div className=" text-center mt-2">
            <div className="text-3xl font-bold">65%</div>
            <p className="text-xs">Profile Completion status</p>
          </div>
        </div>
        <div className="grid grid-cols-6 w-full mt-2">
          <TextInput title="Client Id" />
          <TextInput title="Client Id" />
          <TextInput title="Client Id" />
          <div className="col-span-3 px-2">
            <p className="text-xs">Address</p>
            <textarea name="" id="" className="w-full border-2 rounded-md" />
          </div>
          <div className="col-span-3 px-2">
            <p className="text-xs">Address</p>
            <textarea name="" id="" className="w-full border-2 rounded-md" />
          </div>

          <TextInput title="DOB" />
          <TextInput title="Contact" />
          <TextInput title="Email" />
          <TextInput title="Occupation" />
          <TextInput title="Gender" />
          <TextInput title="Pin Code" />
          <TextInput title="City" />
          <TextInput title="State" />
          <TextInput title="Country" />
        </div>
      </div>

      <div className="bg-white rounded-md mt-3 p-3">
        <h3 className="font-semibold ">Investor Profile</h3>
        <div className="grid grid-cols-6 w-full mt-2">
          <TextInput title="Client Id" />
          <TextInput title="Client Id" />
          <TextInput title="Client Id" />
          <TextInput title="DOB" />
          <TextInput title="Contact" />
          <TextInput title="Email" />
          <TextInput title="Email" />
          <TextInput title="Email" />
        </div>
      </div>

      <div className="bg-white rounded-md mt-3 p-3">
        <h3 className="font-semibold ">Partner Relationship</h3>
        <div className="grid grid-cols-6 w-full mt-2">
          <TextInput title="Bank/WMC" />
          <TextInput title="Unique promo code" />
        </div>
      </div>

      <div className="bg-white rounded-md mt-3 p-3">
        <h3 className="font-semibold ">Referral Details</h3>
        <div className="grid grid-cols-6 w-full mt-2">
          <TextInput title="Referred by" />
          <TextInput title="Organisation" />
          <TextInput title="Email" />
        </div>
      </div>

      <div className="bg-white rounded-md mt-3 p-3">
        <h3 className="font-semibold ">Documents</h3>
        <div className="grid grid-cols-6 w-full mt-2">
          <TextInput title="Referred by" />
          <TextInput title="Organisation" />
          <TextInput title="Email" />
        </div>
      </div>
    </div>
  );
}

function TextInput({ title }) {
  return (
    <div className="px-2 h-14 w-full col-span-2">
      <p className="text-xs font-semibold">{title}</p>
      <input
        type="text"
        className="w-full border-2 rounded-md"
        name="clientId"
        id="clientId"
      />
    </div>
  );
}

export default UserDetails;
