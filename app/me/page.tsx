import React from "react";
import Image from "next/image";
// constants
import { TECHSTACK } from "@/constants";
// assets
import profile from "@/public/profile.jpg";

export default function AboutMe() {
  return (
    <div className="min-h-[100vh] h-fit flex flex-col mt-10 bg-custom-background-100 max-w-7xl mx-auto">
      <h1 className="font-heading text-4xl">About me</h1>
      <div className="relative flex">
        <div className="mr-10 pt-8">
          <h2 className="font-raleway font-bold text-xl">Introduction:</h2>
          <p className="text-custom-text-200 font-paragraph text-base pt-1">
            Hello! I&apos;m Lakhan, an enthusiastic creator in the realm of digital
            innovation. My journey into the world of app development commenced
            in 2020, during my pursuit of a B.Tech in computer science. Since
            then, I&apos;ve been captivated by the endless possibilities that the
            internet offers.
          </p>
          <h2 className="font-raleway font-bold text-xl mt-6">
            Evolution in App Development:
          </h2>
          <p className="text-custom-text-200 font-paragraph text-base pt-1">
            My fascination with programming languages led me to delve into
            native Android Development initially. However, my quest for
            innovation led me to explore newer avenues, ultimately leading me to
            embrace Flutter as my primary platform for app development.
          </p>
          <h2 className="font-raleway font-bold text-xl mt-6">
            Professional Engagements:
          </h2>
          <ol className="text-custom-text-200 font-paragraph text-base pt-2 list-decimal pl-4 marker:text-custom-text-100">
            <li>
              <ul className="list-disc marker:text-custom-primary-200">
                <p className="font-raleway font-bold text-base text-custom-text-100">
                  Topall Ed-Tech Platform:
                </p>
                <li className="ml-4 pt-1">
                  During my second year, I contributed significantly to the
                  development of the Topall ed-tech platform during my tenure at
                  a company. With over 60% of the coding attributed to my
                  efforts, the app garnered remarkable success, boasting over 1
                  Lakh downloads on the Play Store.
                </li>
              </ul>
            </li>
            <li>
              <ul className="list-disc mt-4 marker:text-custom-primary-200">
                <p className="font-raleway font-bold text-base text-custom-text-100">
                  Plane Mobile App:
                </p>
                <li className="ml-4 pt-1">
                  Joining Plane in August 2023, I dedicated six months to
                  enhancing its mobile app. Our collaborative efforts resulted
                  in the decision to open-source the app, fostering transparency
                  and community engagement. You can find the project on GitHub,
                  a testament to our commitment to the developer community
                </li>
              </ul>
            </li>
          </ol>
          <h2 className="font-raleway font-bold text-xl mt-6">
            Transition to Web Development:
          </h2>
          <p className="text-custom-text-200 font-paragraph text-base pt-1">
            Inspired by the intricacies of app development, I transitioned to
            web development to ensure the stability and success of Plane&apos;s web
            application for its inaugural release. My journey began with
            React.js and progressed to Next.js, granting me invaluable insights
            into the nuances of web development.
          </p>
          <h2 className="font-raleway font-bold text-xl mt-6">
            Professional Growth and Adaptability:
          </h2>
          <p className="text-custom-text-200 font-paragraph tracking text-base pt-1">
            My tenure at Plane not only honed my technical acumen but also
            ignited a profound passion for web development. Each day presented
            novel challenges, enriching my understanding of web foundations and
            nurturing my fervor for continuous learning.
          </p>
          <h2 className="font-raleway font-bold text-xl mt-6">
            Intrinsic Qualities:
          </h2>
          <p className="text-custom-text-200 font-paragraph text-base pt-1">
            I pride myself on being a fast learner, constantly seeking to
            broaden my horizons by embracing emerging technologies. A staunch
            advocate for collaboration, I thrive in team environments, relishing
            the opportunity to contribute, learn, and grow alongside my peers.
            My innate desire to assist others underscores my commitment to
            fostering a culture of mutual support and knowledge-sharing.
          </p>
          <h2 className="font-raleway font-bold text-xl mt-6">
            Future Aspirations:
          </h2>
          <p className="text-custom-text-200 font-paragraph tracking text-base pt-1">
            As I continue to evolve, I am committed to expanding my repertoire
            of skills, particularly in backend development, to create innovative
            solutions that transcend conventional boundaries.
          </p>
          <div className="bg-custom-border-200 h-[1px] my-6" />
          <p className="text-custom-text-200 font-paragraph text-base">
            Here are a few technologies I’ve been working with recently:
          </p>
          <div className="flex mb-12 pt-2">
            <ul className="flex justify-left gap-x-4 flex-wrap">
              {TECHSTACK.map((techstack) => (
                <div key={techstack.path} className="p-2 bg-custom-background-200 shadow-sm  rounded-xl my-2">
                  <Image
                    src={techstack.path}
                    alt={techstack.title}
                    height={30}
                    width={30}
                    className="object-cover rounded-full"
                  />
                </div>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-5 md:mx-0 h-80 w-fit flex-shrink-0 mx-10">
          <Image
            src={profile}
            alt="Avatar"
            height={0}
            width={0}
            sizes="100vw"
            className="h-96 w-96 object-cover flex-shrink-0 rounded-full mx-10"
          />
        </div>
      </div>
    </div>
  );
}
