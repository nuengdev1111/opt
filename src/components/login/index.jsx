"use client";
import {useState} from "react";
// import { redirect } from "next/navigation";
import styles from "./login.module.scss";
import ButtonUI from "../../components/ui/button";
import {
  Box,
  // Button,
  Card,
  TextField,
  Link,
  Typography,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { FaSignInAlt } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { permanentRedirect, redirect } from "next/navigation";

const selectType = [
  {
    name: "ผู้ใช้งานเว็บบอร์ด",
    value: "0",
  },
  {
    name: "ร้านค้า O-top",
    value: "1",
  },
];

export default function LoginForm({ data }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  return (
    <Box className="mt-4 flex justify-center">
      <Card variant="outlined" sx={{ maxWidth: 600, width: "100%" }}>
        <Box sx={{ p: { xs: 2, md: 5 } }}>
          <Typography className="text-center pb-10" variant="h5">
            <strong>เข้าสู่ระบบ</strong>
          </Typography>

          <div className="pb-4">
            <Typography>ประเภทการใช้งาน</Typography>
            <Select
              name="type"
              value=""
              size="small"
              sx={{ width: "100%" }}
              onChange={() => {}}
              required
            >
              {selectType?.map(({ name, value }) => (
                <MenuItem key={name} value={value}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </div>

          <div className="pb-4">
            <Typography>ชื่อผู้ใช้งาน</Typography>
            <TextField fullWidth size="small" value="" name="name" />
          </div>

          <div className="pb-4">
            <Typography>รหัสผ่าน</Typography>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </IconButton>
                </InputAdornment>
              }
              size="small"
              sx={{ width: "100%" }}
            />
            <Link variant="overline" underline="hover" href="">
              ลืมรหัสผ่านใช่ไหม
            </Link>
          </div>

          {/* className, text, isIconStart, variant, width, iconStart, isIconEnd, iconEnd, submit */}
          <div className="text-center mt-4">
            <ButtonUI
              text="เข้าสู่ระบบ"
              color="warning"
              width="75"
              isBorderRadius={true}
              isIconStart={true}
              iconStart={<FaSignInAlt />}
              submit={() => {}}
            ></ButtonUI>

            <Typography className="py-4">หรือ</Typography>

            <ButtonUI
              className="pb-4"
              text="เข้าสู่ระบบด้วย Facebook"
              color="primary"
              width="75"
              isBorderRadius={true}
              isIconStart={true}
              iconStart={<FaFacebook />}
              submit={() => {}}
            ></ButtonUI>

            <ButtonUI
              className="pb-4"
              text="ดำเนินการต่อโดยใช้ Google"
              color="white"
              width="75"
              isBorderRadius={true}
              isIconStart={true}
              iconStart={<FcGoogle />}
              submit={() => {}}
            ></ButtonUI>
          </div>
        </Box>
      </Card>
    </Box>
  );
}
