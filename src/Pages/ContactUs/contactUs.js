import React,{useState} from 'react'; 
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './contactUs.css';
import github from '../../Images/icons8-github.svg'
import linkedin from '../../Images/icons8-linkedin-circled.svg'

const ContactUs = () => {
    const technologies = [
        {
          type: "CMS",
          subcategories: [
            {
              name: "Devanshu Dalal",
              description:"I am a Passionate fresher pursuing B. Tech in Computer Science currently in third year. I always like to explore new technology and implement those things in projects. I also do DSA and always like to brainstorm to solve the coding questions.",              
              github: "https://github.com/devanshukd04",
              linkedin: "https://www.linkedin.com/in/devanshu-dalal-3042a1219/",
              year: "Third Year, Computer Engineering"
            }
          ]
        },
        {
          type: "Ecommerce",
          subcategories: [
            {
              name: "Tanishq Deshpande",
              description: "A Computer Science undergrad. I always like to explore new tools and technologies and use them to solve some challenging problem statements. Developing scalable applications to overcome complex challenges interests me. I like competitive coding and always try to come up with proper solutions for brainstorming questions.", 
              linkedin: "https://www.linkedin.com/in/tanishq-deshpande/",
              github: "https://github.com/tanishq252",
              year: "Third Year, Computer Engineering"
            }
          ]
        },
        {
          type: "Reverse proxies",
          subcategories: [
            {
              name: "Avinash Dhakne",
              description:
                "undergraduate student at Vishwakarma Institute of Technology with a passion for exploring the cutting-edge world of machine learning and new technologies. With a keen eye for detail and a hunger for knowledge, they are dedicated to discovering and implementing innovative solutions to complex problems in this exciting field.",
              linkedin: "https://www.linkedin.com/in/avinash-dhakne-a95909205/",
              github: "https://github.com/avinashdhakne",
              year: "Third Year, Computer Engineering"
            }
          ]
        },
        {
          type: "Web servers",
          subcategories: [
            {
              name: "Yash Gaherwar",
              description:
                "Undergraduate Student at Vishwakarma Institue of Technology. A Passionate Competitive Programmer and Aspiring Software Engineer. I am a Full Stack Development Enthusiast and always try to contribute new and Innovative ideas to the Tech Community.",
              github: "https://github.com/yashgaherwar",
              linkedin: "https://www.linkedin.com/in/yash-gaherwar-21a671208/",
              year: "Third Year, Computer Engineering"
            },
          ]
        },
      ];
      return (
        <>
        
        <div className="p-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {technologies.map((item, index) => {
              return (
                <div className="border p-5 rounded-sm" key={index}>
                  {item.subcategories.map((item, index) => {
                    return (
                      <div key={index}>
                        <div className="flex">
                        </div>
                        <div className="text-lg font-semibold mt-3">
                          {item.name}
                        </div>
                        <div className="text-sm mt-2">{item.description}</div>
                        <div className="text-sm mt-2 font-semibold">
                          {item.year}
                        </div>
                        <div className='icons'>
                        <div className="mt-4 flex">
                            <a href={item.github}><img src={github} className="im1"/></a>
                        </div>
                        <div className="mt-4 flex">
                            <a href={item.linkedin}><img src={linkedin} className="im2"/></a>
                        </div>
                        </div>
                      </div>
                    );
                  })}
                  
                </div>
              );
            })}
          </div>
        </div>
        </>
      );
}

export default ContactUs;