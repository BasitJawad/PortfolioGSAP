import React from "react";
import "./Contactme.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useForm, ValidationError } from "@formspree/react";
import toast, { Toaster } from 'react-hot-toast';

gsap.registerPlugin(ScrollTrigger);

const ContactMe = () => {
  const [state, handleSubmit] = useForm("xldrdloo");

  const handleAlert = () => {
   
    handleSubmit(e)
      .then(() => {
        if (state.succeeded) {
            return(

                toast("Message has been sent to your email", {
                    position: "top-center",
                    duration: 4000,
                    icon: '📩'
                })
            )
        } else {
            return (

                toast("There is a problem", {
                    position: "top-center",
                    duration: 4000,
                    icon: '⚡'
                })
            )
        }
      });
  };

  useGSAP(() => {
    const tl5 = gsap.timeline({
      scrollTrigger: {
        trigger: ".contactme",
        markers: true,
        start: "top 10%",
        end: " bottom center",
        scrub: 3,
      },
    });
    tl5
      .from(".conta", {
        opacity: 0,
        y: 40,
        duration: 0.5,
        ease: "power2",
      })
      .from(".ContactForm .FormTable tr > *", {
        opacity: 0,
        y: 40,
        duration: 2,
        ease: "power2",
        rotateZ: 270,
        stagger: 0.4,
      });
  });

  return (
    <div className="contactme h-screen">
      <Toaster />
      <div className="contactHeading flex justify-center">
        <h1 className="conta text-[#FD6F00] text-4xl font-bold">
          Contact Me
        </h1>
      </div>

      <div className="contactFormDiv relative">
        <form
          action="https://formspree.io/f/xldrdloo"
          onSubmit={handleAlert}
          method="POST"
          className="ContactForm absolute"
        >
          <table style={{ width: "100%", height: "100%" }} className="FormTable">
            <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    name="name"
                    inputMode="text"
                    required
                    placeholder="Type your name here!"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="Type your email here!"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="tel"
                    pattern="[0-9]*"
                    name="phone"
                    inputMode="numeric"
                    required
                    placeholder="Type your phone number here!"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    cols="30"
                    required
                    placeholder="Type your message here"
                  ></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </td>
              </tr>
              <tr>
                <td className="flex justify-center">
                  <button
                    type="submit"
                    className="FormButton bg-yellow-500 p-5 w-fit rounded-xl"
                    disabled={state.submitting}
                  >
                    Send Message
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
