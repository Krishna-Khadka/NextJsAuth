"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Avatar from "./avatar.jpg";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useRouter } from "next/navigation";
import axios from "axios";

const MyProfile = () => {

  // const router = useRouter();
  //     const user = localStorage.getItem("user");
  //     const newData = JSON.parse(user)
  //     console.log(newData);


  // const [user, setUser] = useState("");

  // useEffect(() => {
  //   console.log("inisde use Effect");
  //   const storedUser = localStorage.getItem("user");
  //   try {
  //     if (storedUser) {
  //       const parsedUser = JSON.parse(storedUser);
  //       setUser(parsedUser);
  //     } else {
  //       router.push("/sign-in")
  //     }
  //   } catch (error) {
  //     console.error("Error parsing user data:, error");
  //     router.push("/sign-in");
  //   }
  // }, []);

  const apiUrl = "http://192.168.100.190:8000/api/user";

  console.log(localStorage.getItem("token"));

  const [profileData, setProfileData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });

        console.log("Response", response.data.user);
        setProfileData(response.data.user); 
      } catch (error) {
        
        console.warn(error);
        console.error("Error fetching profile data:", error.message);
      }
    };

    fetchData();
  }, [apiUrl]);

  console.log(profileData);

  return (
    <>
      <div className="w-[1200px]">
        <div className="text-center pr-36">
          <h1 className="text-white text-5xl font-bold ">
            {profileData.name || 'Name Not Available'}
          </h1>
          <p className="text-gray-200 text-xl font-semibold py-3"></p>
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
              <p className="text-gray-100 text-[1rem] font-semibold">{profileData.name || 'Name not Available'}</p>
            </div>
            <div className="mb-3">
              <h6 className="text-white text-[1rem] font-semibold">Email: </h6>
              <p className="text-gray-100 text-[1rem] font-semibold">{profileData.email || 'Email Not Available'}</p>
            </div>
            <div className="mb-3">
              <h6 className="text-white text-[1rem] font-semibold">Phone:</h6>
              <p className="text-gray-100 text-[1rem] font-semibold">{profileData.phone || 'Phone Number not availabe'}</p>
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

export default MyProfile;
