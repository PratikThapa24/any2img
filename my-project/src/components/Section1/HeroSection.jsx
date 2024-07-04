import React from "react";
import Button from "../Button";
import PanToolAltIcon from "@mui/icons-material/PanToolAlt";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import StarIcon from "@mui/icons-material/Star";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

function Section1() {
  return (
    <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 lg:items-start px-8 py-8 lg:py-20">
      {/* Section Row 1 */}
      <div className="flex flex-col gap-7 text-gray-300">
        {/* Column 1 Where the h1 goes */}
        <div className="flex flex-col">
          <h1 className="text-8xl font-extrabold mb-4 animate-pulse">
            Ditch the Spreadsheet
          </h1>
          <h2 className="text-6xl font-extrabold text-yellow-500 mb-4">
            One Click is All it Takes!
          </h2>
        </div>
        {/* Column where the paragraph goes */}
        <div className="text-lg opacity-85 leading-relaxed">
          <p>
            JobLogify simplifies your job hunt by logging all your applications
          </p>
          <span>in one place. No more spreadsheets or manual tracking!</span>
        </div>
        <div>
          <Button value="Get Started" />
        </div>
        <div className="flex flex-row gap-5">
          <div>
            <AvatarGroup total={300}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
              <Avatar
                alt="Trevor Henderson"
                src="/static/images/avatar/5.jpg"
              />
            </AvatarGroup>
          </div>
          <div className="flex flex-col">
            <div>
              <StarIcon style={{ color: "#F59E0B" }} />
              <StarIcon style={{ color: "#F59E0B" }} />
              <StarIcon style={{ color: "#F59E0B" }} />
              <StarIcon style={{ color: "#F59E0B" }} />
              <StarIcon />
            </div>
            <span>300+ job seekers log applications faster with JobLogify</span>
          </div>
        </div>
      </div>

      {/* Section Row 2 */}
      <div className="flex relative items-center justify-center">
        <div className="hover-scale-up items-center justify-center">
          <AddCircleOutlineIcon
            style={{ fontSize: "300px", color: "#F59E0B" }}
          />
        </div>
        <div className="">
          <PanToolAltIcon
            style={{
              fontSize: "300px",
              color: "#D1D5DB",
              position: "absolute",
              top: "90%",
              left: "90%",
              transform: "translate(-50%, -50%) rotate(-45deg)",
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Section1;
