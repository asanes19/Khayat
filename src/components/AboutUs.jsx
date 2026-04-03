import React from "react";

const AboutUs = () => {
  return (
    <div className="w-full bg-gray-50 py-12 px-6">
      <div className="flex justify-around gap-8">
        {/* Left Side - Text */}
        <div className="text-gray-800 w-[40%] max-w space-y-4">
          <h2 className="text-3xl font-bold text-[#041E60] mb-4">About Us</h2>
          <p>
            Founded in 1990 by a visionary entrepreneur, Example Group has
            evolved from a small local company into a diversified business group
            with a strong presence across multiple industries. For over three
            decades, the group has been guided by innovation, agility, and
            deeply rooted values, growing into a trusted partner across a wide
            portfolio of businesses that touch many aspects of people’s lives.
          </p>
          <p>
            Example Group is committed to creating meaningful impact every day
            through excellence, integrity, and long-term partnerships. Its
            ambition is to be one of the region’s defining business groups of
            the next decade. The company is privately owned, with{" "}
            <span className="font-semibold">60% held by Partner A</span> and{" "}
            <span className="font-semibold">40% by Partner B</span>.
          </p>
          <p>
            With a forward-looking vision, Example Group continues to expand its
            businesses while investing in innovation and sustainability.
            Anchored in its values, the group strives to build a lasting legacy
            that supports economic growth, strengthens communities, and inspires
            future generations.
          </p>
        </div>

        {/* Right Side - Images */}
        <div className="w-[50%] grid grid-cols-2 gap-4">
          <img
            src="https://imgs.search.brave.com/yLoX9KdlU8kc3P40OY-zivhtcbHX7PwZALIdEH2Q1Pk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODQ0/MDAwNDEyL3ZlY3Rv/ci9kZWZhdWx0LXBs/YWNlaG9sZGVyLW1h/bi5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9eEZnaTk1eXRi/Smd5TGtOMHVVREZB/NU00cC1RMXMyNVll/X001dTg2ZXZGYz0"
            alt="AKI Team"
            className="w-full h-full object-cover rounded-lg shadow"
          />
          <img
            src="https://imgs.search.brave.com/IMAm_vXrfDrFAmJ4p97QIoik1-JGB-Vr1YJLopld0I0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODQ0/MDAwNDU4L3ZlY3Rv/ci9kZWZhdWx0LXBs/YWNlaG9sZGVyLW1h/bi5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9dDJNQlczbG9V/eDlfMVU0dnlMdVRU/SVRvTGtiQUxYVEYx/d2hORGllZEsxbz0"
            alt="AKI Office"
            className="w-full h-full object-cover rounded-lg shadow"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
