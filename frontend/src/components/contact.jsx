import { useLayoutEffect, useState } from "react";
import cIcon from "../assets/email.png";

function Contact() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form data before sending
        if (!formData.name || !formData.email || !formData.message) {
            alert("Please fill in all required fields.");
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData) // Send form data as JSON
            });

            if (response.ok) {
                alert("Message sent successfully!");
            } else {
                // If the server responds with a status other than 200 OK
                const errorData = await response.json();  // Assuming the backend sends a JSON response with error details
                alert(`Error: ${errorData.message || "Something went wrong. Please try again."}`);
            }
        } catch (error) {
            console.error("Error:", error);

            // Check if the error is a network or connection issue
            if (error.message.includes("NetworkError") || error.message.includes("Failed to fetch")) {
                alert("Network error: Could not send the message. Please check your internet connection and try again.");
            } else {
                alert("Something went wrong. Please try again.");
            }
        }

        // Clear form after submission
        setFormData({
            name: "",
            email: "",
            phone: "",
            message: ""
        });
    };

    return (
        <div className="px-7 md:px-36 min-h-screen flex justify-center items-center">
            <div className="pt-[70px] pb-14 md:pb-8 w-full">
                <div className="md:flex justify-center items-center gap-3 mt-4 hidden">
                    <h2 className="font-bold text-4xl text-center">Contact</h2>
                    <img className="w-9 h-8 pt-1" src={cIcon} alt="" />
                </div>

                <div className="md:flex justify-center items-center bg-gradient-to-br from-[#0f0f0f] to-[#11192b] w-full mt-10 md:mt-5 border border-gray-900 rounded-tr-[40px] rounded-bl-[40px]">
                    <div className="md:w-[30%] bg-white/5 py-7 md:py-9 px-7 rounded-tr-[40px] rounded-bl-[40px]">
                        <h3 className="text-[22px] font-semibold text-[#12E8BA]">Get In Touch</h3>
                        <p className="mt-3 tracking-wider text-justify text-gray-300/80">
                            Looking to hire, collaborate, or just share ideas? Fill out the form - I'll get back to you shortly. Let's create something great together!
                        </p>
                        <div className="w-fit my-8 md:my-16 flex flex-col gap-4 font-medium">
                            <a href="tel:+916374341607" className="flex gap-2 items-center cursor-pointer hover:text-[#eabf15eb]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>
                                <h4>Phone</h4>
                            </a>
                            <a href="mailto:chozhan136@gmail.com" className="flex gap-2 items-center cursor-pointer hover:text-[#eabf15eb]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>
                                <h4>Gmail</h4>
                            </a>
                            <a href="https://www.linkedin.com/in/sundharacholan" target="_blank" className="flex gap-2 items-center cursor-pointer hover:text-[#eabf15eb]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                                </svg>
                                <h4>Linkedin</h4>
                            </a>
                        </div>
                    </div>

                    {/* Contact form */}
                    <form onSubmit={handleSubmit} className="w-full md:w-[70%] flex flex-col px-7 md:px-24 pt-16">
                        <label className="font-medium text-white flex" htmlFor="">Full Name<p className="text-red-400 pl-1">*</p></label>
                        <input className="bg-transparent text-gray-300/90 border-b border-gray-700 focus:outline-none pt-[5px] pb-[3px] mb-4" type="text" name="name" value={formData.name} onChange={handleInputChange} required />

                        <div className="w-full md:flex my-6 md:my-5">
                            <div className="flex flex-col w-full">
                                <label className="font-medium text-white flex" htmlFor="">Email<p className="text-red-400 pl-1">*</p></label>
                                <input className="bg-transparent text-gray-300/90 border-b border-gray-700 focus:outline-none pt-[5px] pb-[3px] md:mr-5 mb-4" type="email" name="email" value={formData.email} onChange={handleInputChange} required />
                            </div>

                            <div className="flex flex-col w-full text-white mt-5 md:mt-0">
                                <label className="font-medium" htmlFor="">Phone No.</label>
                                <input className="bg-transparent text-gray-300/90 border-b border-gray-700 focus:outline-none pt-[5px] pb-[3px] mb-4" type="text" name="phone" value={formData.phone} onChange={handleInputChange} />
                            </div>
                        </div>

                        <label className="font-medium text-white flex mt-2 md:mt-0" htmlFor="">Your Message<p className="text-red-400 pl-1">*</p></label>
                        <textarea rows={2} className="bg-transparent text-gray-300/90 border-b border-gray-700 focus:outline-none pt-[5px] pb-[3px] mb-4" type="textarea" name="message" value={formData.message} onChange={handleInputChange} required></textarea>

                        <div className="mx-auto mb-9">
                            <button type="submit" className="bg-[#eabf15eb] text-black mt-5 py-2 px-4 font-semibold rounded-lg hover:bg-[#facc15c8]">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
