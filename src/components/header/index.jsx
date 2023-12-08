"use client";
import React, { useState } from "react";
import {
  IconButton,
  FormControl,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import { FaHome, FaRocketchat, FaUserCircle, FaSearch } from "react-icons/fa";

const iconRount = [
  { icon: <FaHome size="25" />, name: "home", rounte: "" },
  { icon: <FaRocketchat size="25" />, name: "chat", rounte: "" },
  { icon: <FaUserCircle size="25" />, name: "user", rounte: "" },
];
export default function Header() {
  const [text, setText] = useState("");

  const handleSearch = (event) => {
    const { value } = event.target;
    setText(value);

    console.log("handleSearch", value);
  };
  const handleRounter = () => {
    console.log("handleRounter", event);
  };
  const submitSearch = () => {
    console.log("submitSearch", text);
    setText("");
  };

  return (
    <div className="flex justify-between">
      <div className="flex items-center">
        {iconRount.map(({ icon, name }) => {
          return (
            <IconButton key={name} onClick={() => handleRounter(name)}>
              {icon}
            </IconButton>
          );
        })}
      </div>
      <div>
        <FormControl sx={{ m: 1, width: "27ch" }} variant="outlined">
          <OutlinedInput
            id="search-input"
            type="text"
            size="small"
            placeholder="ค้นหาข้อมูล อบต. บางเสาธง"
            value={text}
            onChange={handleSearch}
            endAdornment={
              <InputAdornment position="end">
                <IconButton className="pr-4" onClick={submitSearch} edge="end">
                  <FaSearch />
                </IconButton>
              </InputAdornment>
            }
            sx={{
              "&.MuiInputBase-root": {
                borderRadius: "2rem",
              },
            }}
          />
        </FormControl>
      </div>
    </div>
  );
}
