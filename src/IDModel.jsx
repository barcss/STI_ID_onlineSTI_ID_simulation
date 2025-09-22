import stiLogo from "./assets/Systems_Technology_Institute.png";
import vita_educationem from "./assets/STI-VITA-EDUCATIONEM.png";
import { useState, useRef, useEffect } from "react";
import ImageCropper from "./ImageCropper";

const IDModel = () => {
  const [formData, setFormData] = useState({
    branch: "cubao",
    firstName: "FirstName",
    lastName: "LastName",
    middleInitial: "A",
  });
  const [stream, setStream] = useState(null);
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  const openCamera = async () => {
    try {
      // Ask user for camera access
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      setStream(mediaStream);
      // Attach the stream to the video element
      if (videoRef1.current) {
        videoRef1.current.srcObject = mediaStream;
      }
      if (videoRef2.current) videoRef2.current.srcObject = mediaStream.clone();
    } catch (err) {
      console.error(err);
    }
  };

  const closeCamera = () => {
    if (stream) {
      // Stop all tracks
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);

      // Clear the video refs
      if (videoRef1.current) videoRef1.current.srcObject = null;
      if (videoRef2.current) videoRef2.current.srcObject = null;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    console.log(`${name} changed to: ${value}`);
  };

  const [schoolYear, setSchoolYear] = useState({
    startYear: 2025,
    endYear: 2026,
  });

  const changeSchoolYear = (e) => {
    e.preventDefault();

    const data = e.target.value === "add" ? 1 : -1;
    setSchoolYear((prev) => ({
      startYear: prev.startYear + data,
      endYear: prev.endYear + data,
    }));
  };
  const [open, setOpen] = useState(false);
  const [onCam, setOnCam] = useState(false);
  const [image, setImage] = useState(
    "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*hXoDbQqNdbnH2zW4z9Ch5Q.jpeg"
  );
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleCrop = async () => {
    const croppedImage = await getCroppedImg(image, croppedAreaPixels);
    setImage(croppedImage); // replace with cropped version
  };

  const getCroppedImg = (imageSrc, pixelCrop) => {
    return new Promise((resolve) => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const image = new Image();
      image.crossOrigin = "anonymous";

      image.src = imageSrc;
      image.onload = () => {
        canvas.width = pixelCrop.width;
        canvas.height = pixelCrop.height;
        ctx.drawImage(
          image,
          pixelCrop.x,
          pixelCrop.y,
          pixelCrop.width,
          pixelCrop.height,
          0,
          0,
          pixelCrop.width,
          pixelCrop.height
        );
        resolve(canvas.toDataURL("image/jpeg")); // ✅ gives you a base64 string
      };
    });
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="p-2 bg-white w-screen sticky z-50 top-0 justify-end flex">
          <button onClick={() => setOpen(true)} className="black-btn">
            Change Details
          </button>
        </div>

        <div
          className={`fixed inset-0 bg-black opacity-25 z-80 transition-opacity ${
            open ? " opacity-50 visible" : " opacity-0 invisible"
          }`}
          onClick={() => setOpen(false)}
        ></div>
        <div
          className={`fixed overflow-y-auto  scroll-auto top-0 lg:w-3/12 md:w-6/12 w-9/12 z-90 transform transition-transform h-full bg-gray-200 p-3  ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* </div> */}
          {/* <div className={`w-3/12 h-full bg-gray-200 p-3 relative ${isHidden ? "w-0 hidden" : "w-3/12 "}`} > */}
          {/* <button className="absolute black-btn top-1/2 m-0 left-full" onClick={hideTab}>></button> */}
          <p>Change ID details</p>
          <div className="flex flex-col gap-3 mt-3">
            <input
              type="text"
              name="branch"
              placeholder="Branch"
              className="bg-white p-2 w-full rounded-sm block shadow-sm"
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="bg-white p-2 w-full rounded-sm block shadow-sm"
              onChange={handleChange}
            />
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="bg-white p-2 w-full rounded-sm block shadow-sm"
              onChange={handleChange}
            />
            <input
              type="text"
              name="middleInitial"
              maxLength={1}
              placeholder="Middle Initial"
              className=" bg-white p-2 w-full rounded-sm block shadow-sm"
              onChange={handleChange}
            />
            <div className="flex flex-col mt-4">
              <p>
                School Year:{" "}
                <span>
                  {" "}
                  {schoolYear.startYear}-{schoolYear.endYear}{" "}
                </span>
              </p>
              <div className="flex flex-row">
                <button
                  value="minus"
                  onClick={changeSchoolYear}
                  className="white-btn w-full"
                >
                  {" "}
                  previous year
                </button>
                <button
                  value="add"
                  onClick={changeSchoolYear}
                  className="white-btn w-full"
                >
                  {" "}
                  next year
                </button>
              </div>
            </div>
            <label htmlFor="img" className="white-btn text-center">
              Select image
            </label>
            <input
              id="img"
              hidden
              type="file"
              accept="img"
              onChange={handleImageChange}
            />
            <button
              className={`white-blue ${
                onCam ? "invisible hidden" : "visible block"
              }`}
              onClick={() => {
                openCamera(), setOnCam(true);
              }}
            >
              Use live camera
            </button>
            <button
              className={`white-blue ${
                onCam ? "visible block" : "invisible hidden"
              }`}
              onClick={() => {
                closeCamera(), setOnCam(false);
              }}
            >
              Close live camera
            </button>

            <div className="w-full mt-5 justify-center flex flex-col items-center">
              <ImageCropper
                image={image}
                onCropComplete={(croppedArea, croppedAreaPixels) => {
                  setCroppedAreaPixels(croppedAreaPixels); // ✅ updates state in IDModel
                }}
              />
            </div>
            <button onClick={handleCrop} className="white-btn">
              Crop
            </button>
          </div>
        </div>

        <div className="w-full   bg-gray-700 p-1 flex md:flex-row flex-col items-center justify-center gap-4">
          <div className="h-screen justify-center items-center flex ">
            <div
              id="SHS_ID"
              className="flex flex-col rounded-xl overflow-hidden w-[23rem] md:h-10/12 h-9/12"
            >
              <div className="bg-blue-600 p-2 flex justify-center">
                <img
                  src={stiLogo}
                  className="bg-yellow-300 py-1 px-2 rounded-sm h-[2.5rem]"
                />
              </div>
              <div className="bg-yellow-300 h-full relative flex flex-col items-center justify-center">
                <p className=" absolute left-0 rotate-90 origin-center opacity-30">
                  Fake ID
                </p>

                <p className="text-blue-600"> {formData.branch}</p>
                <p className="text-blue-600 text-2xl">Senior High School</p>
                <video
                  ref={videoRef1}
                  autoPlay
                  playsInline
                  className={`border rounded-lg bg-white mt-5 z-10 w-8/12 h-5/12 p-0 transform scale-x-[-1] object-cover ${
                    onCam ? "block visible" : "invisible hidden"
                  }`}
                />
                <img
                  src={image}
                  alt="img"
                  loading="lazy"
                  className={` rounded-lg bg-white mt-5 z-10 w-8/12 h-5/12 p-0 ${
                    onCam ? " invisible hidden" : "block visible"
                  }`}
                />
                <p className="leading-none text-2xl mt-5 z-10">
                  {formData.lastName}
                </p>
                <p className="leading-none text-sm z-10 mt-3">
                  {formData.firstName}{" "}
                  <span className="uppercase">{formData.middleInitial}</span>.
                </p>
                <div className="bg-green-500 p-2 mt-10 rounded-md z-10">
                  <p className="text-white font-bold">
                    SY{schoolYear.startYear}-{schoolYear.endYear}
                  </p>
                </div>
                <img
                  className="h-5/12 w-7/12 absolute bottom-[-1rem] right-[-3.5rem] invert opacity-30 z-0"
                  src={vita_educationem}
                />
              </div>
            </div>
          </div>

          <div className="h-screen  justify-center items-center flex ">
            <div
              id="COLLEGE_ID"
              className="flex flex-col rounded-xl overflow-hidden w-[23rem] md:h-10/12 h-9/12"
            >
              <div className="bg-yellow-300 p-2 flex justify-center">
                <img
                  src={stiLogo}
                  className=" py-1 px-2 rounded-sm h-[2.5rem]"
                />
              </div>
              <div className="bg-blue-600 h-full relative flex flex-col items-center justify-center">
                <p className=" absolute left-0 rotate-90 text-white origin-center opacity-30">
                  Fake ID
                </p>

                <p className="text-yellow-300 mb-8 mt-6"> {formData.branch}</p>
                <video
                  ref={videoRef2}
                  autoPlay
                  playsInline
                  className={`border rounded-lg bg-white mt-5 z-10 w-8/12 h-5/12 p-0 transform scale-x-[-1] object-cover ${
                    onCam ? "block visible" : "invisible hidden"
                  }`}
                />
                <img
                  src={image}
                  alt="img"
                  loading="lazy"
                  className={` rounded-lg bg-white mt-5 z-10 w-8/12 h-5/12 p-0 ${
                    onCam ? " invisible hidden" : "block visible"
                  }`}
                />

                <p className="leading-none text-2xl mt-5 z-10 text-white">
                  {formData.lastName}
                </p>
                <p className="leading-none mt-3 text-sm z-10 text-white">
                  {formData.firstName}{" "}
                  <span className="uppercase">{formData.middleInitial}</span>.
                </p>
                <div className="bg-green-500 p-2 mt-8 mb-4 rounded-md z-10">
                  <p className="text-white font-bold">
                    SY{schoolYear.startYear}-{schoolYear.endYear}
                  </p>
                  <p className="text-white text-xs text-center font-bold">
                    1st Term
                  </p>
                </div>
                <img
                  className="h-5/12 w-7/12 absolute bottom-[-1rem] right-[-3.5rem] invert opacity-30 z-0"
                  src={vita_educationem}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IDModel;
