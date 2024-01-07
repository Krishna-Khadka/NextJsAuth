"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Avatar from "./avatar.jpg";
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
// import { useRouter } from "next/navigation";

const ProfileLayout = ({ id }) => {
  // const router = useRouter()
  const [user, setUser] = useState(null);

  // let mytoken = localStorage.getItem("tokens");
  // if(!mytoken){
  //   router.push('/sign-in')
  // }

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("tokens");
        const headers = {
          Authorization: 'Bearer ${token}',
        };
        const response = await axios.get(`http://127.0.0.1:8000/api/user/${id}`, {headers});
        setUser(response.data.user);

      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
    console.log('Exiting useEffect');
  }, []);

  if (!user) {
    return (
    <div>Loading...</div>
    );
  }


  return (
    <>
      <div className="w-[1200px]">
        <div className="text-center pr-36">
          <h1 className="text-white text-5xl font-bold ">Profile</h1>
          <p className="text-gray-200 text-xl font-semibold py-3">
            I am a creative Web Developer
          </p>
        </div>
        <div className="detail grid grid-cols-3 gap-4 mt-16">
          <div className="detail-left">
            <h3 className="text-white text-2xl font-semibold">About me</h3>
            <p className="text-gray-100 text-[1rem] font-medium m-4 ml-0 pr-5 leading-7">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
              distinctio minus doloremque consectetur error nostrum laborum fuga
              enim at nesciunt, soluta dicta sapiente? Nesciunt perferendis
              incidunt veritatis doloribus dignissimos a!
            </p>
          </div>
          <div className="detail-mid">
            <Image
              src={Avatar}
              className=""
              alt="user-profile"
              style={{
                width: "250px",
                height: "250px",
                objectFit: "cover",
                borderRadius: "50%",
              }}
            />
          </div>
          <div className="detail-right">
            <h3 className="text-white text-2xl font-semibold">Details</h3>
            <div className="mb-3 mt-4">
              <h6 className="text-white text-[1rem] font-semibold">Name: </h6>
              <p className="text-gray-100 text-[1rem] font-semibold">
                {user.name}
              </p>
            </div>
            <div className="mb-3">
              <h6 className="text-white text-[1rem] font-semibold">Email: </h6>
              <p className="text-gray-100 text-[1rem] font-semibold">
                {user.email}
              </p>
            </div>
            <div className="mb-3">
              <h6 className="text-white text-[1rem] font-semibold">
                Address:{" "}
              </h6>
              <p className="text-gray-100 text-[1rem] font-semibold">
                {user.address}
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-start mt-3">
              <FaFacebook className="text-[1.3rem] text-white" />
              <FaLinkedin className="text-[1.4rem] text-white mx-4" />
              <FaInstagram className="text-[1.3rem] text-white" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileLayout;
