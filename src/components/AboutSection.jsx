"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import TabButton from "./TabButton";
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Link from '@mui/material/Link';
import ListItem from '@mui/material/ListItem';
import Collapse from '@mui/material/Collapse';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import styles from "./About.module.scss";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import {
  Link as RouterLink,
  Route,
  Routes,
  MemoryRouter,
  useLocation,
} from 'react-router-dom';



const breadcrumbNameMap = {
  '/inbox': 'แผนยุทธศาสตร์การพัฒนา',
  // '/inbox/important': 'Important',
  '/trash': 'แผนพัฒนา 3 ปี',
  '/spam': 'แผนการดำเนินงานประจำปี',
  // '/drafts': 'Drafts',
};

function LinkRouter(props) {
  return <Link {...props} component={RouterLink} />;
}


function Page() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <LinkRouter underline="hover" color="inherit" to="/">
        แผนพัฒนาท้องถิ่น
      </LinkRouter>
      {pathnames.map((value, index) => {
        // const last = index === pathnames.length - 1;
        // const to = `/${pathnames.slice(0, index + 1).join('/')}`;

        // return last ? (
        //   <Typography color="text.primary" key={to}>
        //     {breadcrumbNameMap[to]}
        //   </Typography>
        // ) : (
        //   <LinkRouter underline="hover" color="inherit" to={to} key={to}>
        //     {breadcrumbNameMap[to]}
        //   </LinkRouter>
        // );
      })}
    </Breadcrumbs>
  );
}

ListItemLink.propTypes = {
  open: PropTypes.bool,
  to: PropTypes.string.isRequired,
};



function ListItemLink(props) {
  const { to, open, ...other } = props;
  const primary = breadcrumbNameMap[to];

  let icon = null;
  // if (open != null) {
  //   icon = open ? <ExpandLess /> : <ExpandMore />;
  // }

  return (
    <li>
      <ListItem button component={RouterLink} to={to} {...other}>
        <ListItemText primary={primary} />
        {icon}
      </ListItem>
    </li>
  );
}

  

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  

  return (
    <section className="text-white flex  space-x-4 space-x-reverse ..." id="about">
       <MemoryRouter>
       {/* <MemoryRouter initialEntries={['/inbox']} initialIndex={0}> */}
      <Box sx={{ display: 'flex', flexDirection: 'column', width: 800, color: 'black' }}>
        <Routes>
          <Route path="*" element={<Page />} />
        </Routes>
        <Box
          sx={{
            bgcolor: 'background.paper',
            mt: 1,
          }}
          component="nav"
          aria-label="mailbox folders"
        >
          <List>
            <ListItemLink className="breadcrum" to="/inbox" open={open} onClick={handleClick} />
            {/* <ListItemLink className="breadcrum" to="/inbox" open={open} onClick={handleClick} /> */}
            <Collapse timeout="auto" unmountOnExit>
              <List disablePadding>
                <ListItemLink sx={{ pl: 4 }} to="/inbox" />
              </List>
            </Collapse>
            <ListItemLink to="/trash" />
            <ListItemLink to="/spam" />
          </List>
        </Box>
      </Box>
    </MemoryRouter>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
     
        <Image src="/images/about-image2.png" width={500} height={500} />
        
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg text-slate-950">
            (27 พ.ย. 66) กองสาธารณสุขและสิ่งแวดล้อม จัดโครงการอาสาสมัครท้องถิ่นรักษ์โลกด้านสิ่งแวดล้อม ณ ห้องประชุมชั้น 2 อบต.บางเสาธง โดยจัดกิจกรรมฝึกอบรมและให้ความรู้แก่ประชาชนชาวบางเสาธง จำนวน 80 คน เพื่อให้ประชาชนมีความรู้ ความเข้าใจในการอนุรักษ์ และเฝ้าระวังคุณภาพสิ่งแวดล้อม และได้ร่วมกันประดิษฐ์ “ผลิตภัณฑ์ไม้กวาดจากขวดพลาสติกรีไซเคิล" แข็งแรง ทนทาน สร้างรายได้ และเป็นมิตรต่อสิ่งแวดล้อม<br />
            <br />
            โอกาสนี้ขอขอบคุณนายธวัชชัย แจ่มศรี นักวิชาการอิสระ อดีต ผอ.กองสาธารณสุขและสิ่งแวดล้อม เทศบาลตำบลวานรนิวาส จ.สกลนคร ที่ให้เกียรติเป็นวิทยากรให้ความรู้ในโครงการฯ ดังกล่าว
            <br />
            <br />
            "บางเสาธงน่าอยู่ คู่คุณภาพชีวิตที่ดี "
            <br />
            <br />
            -------------------------------------
            <br />
            <br />
            องค์การบริหารส่วนตำบลบางเสาธง
          </p>
          {/* <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div> */}
          {/* <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
