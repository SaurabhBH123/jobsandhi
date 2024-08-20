// "use client";
// import React from "react";
// import * as Yup from "yup";
// import { Resolver, useForm } from "react-hook-form";
// import ErrorMsg from "../common/error-msg";
// import emailjs from "@emailjs/browser";
// import { notifyError, notifySuccess } from "@/utils/toast";

// // form data type
// type IFormData = {
//   name: string;
//   email: string;
//   subject?: string;
//   message: string;
// };

// // schema
// const schema = Yup.object().shape({
//   name: Yup.string().required().label("Name"),
//   email: Yup.string().required().email().label("Email"),
//   subject: Yup.string().label("Subject"),
//   message: Yup.string().required().label("Subject"),
// });
// // resolver
// const resolver: Resolver<IFormData> = async (values) => {
//   return {
//     values: values.name ? values : {},
//     errors: !values.name
//       ? {
//           name: {
//             type: "required",
//             message: "Name is required.",
//           },
//           email: {
//             type: "required",
//             message: "Email is required.",
//           },
//           message: {
//             type: "required",
//             message: "Message is required.",
//           },
//         }
//       : {},
//   };
// };
// const ContactForm = () => {
//   // react hook form
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm<IFormData>({ resolver });
//   // on submit
//   const onSubmit = (data: IFormData) => {
//     const templateParams = {
//       name: data.name,
//       email: data.email,
//       subject: data.subject,
//       message: data.message,
//     };
//     if (data) {
//       emailjs
//         .send(
//           'service_gnu2rla', 
//           'template_ilrquco', 
//           templateParams,
//           'tDbxqotWh8Z0dv0h6'
//         )
//         .then(
//           (response) => {
//             // console.log("SUCCESS!", response.status, response.text);
//             notifySuccess('Your message sent successfully');
//           },
//           (err) => {
//             // console.log("FAILED...", err);
//             notifyError(err?.text);
//           }
//         );
//     }

//     reset();
//   };
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div className="messages"></div>
//       <div className="row controls">
//         <div className="col-sm-6">
//           <div className="input-group-meta form-group mb-30">
//             <label htmlFor="">Name*</label>
//             <input
//               type="text"
//               placeholder="Your Name*"
//               {...register("name", { required: `Name is required!` })}
//               name="name"
//             />
//             <div className="help-block with-errors">
//               <ErrorMsg msg={errors.name?.message!} />
//             </div>
//           </div>
//         </div>
//         <div className="col-sm-6">
//           <div className="input-group-meta form-group mb-30">
//             <label htmlFor="">Email*</label>
//             <input
//               type="email"
//               placeholder="Email Address*"
//               {...register("email", { required: `Email is required!` })}
//               name="email"
//             />
//             <div className="help-block with-errors">
//               <ErrorMsg msg={errors.email?.message!} />
//             </div>
//           </div>
//         </div>
//         <div className="col-12">
//           <div className="input-group-meta form-group mb-35">
//             <label htmlFor="">Subject (optional)</label>
//             <input
//               {...register("subject", { required: false })}
//               type="text"
//               placeholder="Write about the subject here.."
//               name="subject"
//             />
//           </div>
//         </div>
//         <div className="col-12">
//           <div className="input-group-meta form-group mb-35">
//             <textarea
//               placeholder="Your message*"
//               {...register("message", { required: `Message is required!` })}
//               name="message"
//             />
//             <div className="help-block with-errors">
//               <ErrorMsg msg={errors.message?.message!} />
//             </div>
//           </div>
//         </div>
//         <div className="col-12">
//           <button className="btn-eleven fw-500 tran3s d-block">
//             Send Message
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default ContactForm;

"use client";
import React, { useState } from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from "@emailjs/browser";
import { notifyError, notifySuccess } from "@/utils/toast";

// Form data type
interface IFormData {
  name: string;
  email: string;
  mobile: string;
  location: string;
  linkedin: string;
  subject?: string;
  message: string;
  cv?: FileList;
}

// Schema for form validation
const schema = Yup.object().shape({
  name: Yup.string().required("Name is required!"),
  email: Yup.string().email("Invalid email format").required("Email is required!"),
  mobile: Yup.string().required("Mobile is required!"),
  location: Yup.string().required("Location is required!"),
  linkedin: Yup.string().url("Invalid LinkedIn URL").required("LinkedIn URL is required!"),
  // subject: Yup.string(),
  message: Yup.string().required("Message is required!"),
  // cv: Yup.mixed().nullable(),
});

// Cloudinary configuration
const uploadToCloudinary = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "b2wtmikc"); // Replace with your upload preset
  formData.append("resource_type", "raw");

  try {
    const response = await fetch("https://api.cloudinary.com/v1_1/dkoxxpnwz/upload", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    return data.secure_url;
  } catch (error) {
    console.error("Error uploading file:", error);
    throw new Error("File upload failed.");
  }
};

const ContactForm = () => {
  const [message, setMessage] = useState<string>("");

  // react-hook-form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
  });

  // Function to send email via EmailJS
  const sendEmail = async (templateParams: any) => {
    try {
      const response = await emailjs.send(
        "service_fctacnx",
        "template_y9z5crh",
        templateParams,
        "IDn3rt97cnVV3O0NX"
      );
      console.log(response);
      notifySuccess("Your message was sent successfully!");
      setMessage("Email sent successfully!");
    } catch (error) {
      console.error("Failed to send email:", error);
      notifyError("Failed to send email.");
      setMessage("Failed to send email.");
    }
  };

  // onSubmit function
  const onSubmit = async (data: IFormData) => {
    try {
      let cvLink = "";

      if (data.cv && data.cv.length > 0) {
        const file = data.cv[0];
        cvLink = await uploadToCloudinary(file);
      }

      const templateParams = {
        name: data.name,
        email: data.email,
        mobile: data.mobile,
        location: data.location,
        linkedin: data.linkedin,
        subject: data.subject || "No Subject",
        message: data.message,
        cv_link: cvLink || "No CV uploaded",
      };

      await sendEmail(templateParams);
      reset();
    } catch (error) {
      console.error("Failed to send email:", error);
      notifyError("Failed to send email.");
      setMessage("Failed to send email.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        {/* Render form fields dynamically */}
        {['name', 'email', 'mobile', 'location', 'linkedin', 'subject', 'message'].map((field) => (
          <div key={field} className="col-12">
            <div className="input-group-meta position-relative mb-25">
              <label>{field.charAt(0).toUpperCase() + field.slice(1)}{field !== 'subject' && field !== 'message' ? '*' : ''}</label>
              <input
                type={field === "email" ? "email" : field === "mobile" ? "tel" : field === "message" ? "textarea" : "text"}
                placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                {...register(field as keyof IFormData)}
              />
              <div className="help-block with-errors">
                {errors[field as keyof IFormData] && <p>{errors[field as keyof IFormData]?.message}</p>}
              </div>
            </div>
          </div>
        ))}
        <div className="col-12">
          <div className="input-group-meta position-relative mb-25">
            <label>CV</label>
            <input
              type="file"
              {...register('cv')}
            />
          </div>
        </div>
      </div>
      {message && <p>{message}</p>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
