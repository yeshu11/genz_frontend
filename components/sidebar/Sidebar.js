"use client";
import React from "react";
import {
  Box,
  Flex,
  Drawer,
  DrawerBody,
  Icon,
  useColorModeValue,
  DrawerOverlay,
  useDisclosure,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { IoMenuOutline } from "react-icons/io5";

const Scrollbars = dynamic(
  () => import("react-custom-scrollbars-2").then((mod) => mod.Scrollbars),
  { ssr: true }
);

function Sidebar() {
  let sidebarBg = useColorModeValue("white", "gray.900");
  let shadow = useColorModeValue(
    "14px 17px 40px 4px rgba(112, 144, 176, 0.08)",
    "unset"
  );

  return (
    <Box display={{ sm: "none", xl: "block" }} position="fixed" minH="100%">
      <Box
        bg={sidebarBg}
        transition="0.2s linear"
        w="300px"
        h="100vh"
        minH="100%"
        overflowX="hidden"
        boxShadow={shadow}
        p={5}
      >
        <h1 className="text-2xl font-bold text-center text-yellow-400">
          Admin Panel
        </h1>
        <Scrollbars universal={true}>
          <ul className="mt-6 space-y-4">
            <li>
              <Link
                href="/admin/jobs"
                className="block py-2 px-4 rounded hover:bg-gray-700"
              >
                Job Management
              </Link>
            </li>
            <li>
              <Link
                href="/admin/resume-techwise"
                className="block py-2 px-4 rounded hover:bg-gray-700"
              >
                Resume Techwise
              </Link>
            </li>
            <li>
              <Link
                href="/admin/open-resumes"
                className="block py-2 px-4 rounded hover:bg-gray-700"
              >
                Open Resumes
              </Link>
            </li>
            <li>
              <Link
                href="/admin/deleted-jobs"
                className="block py-2 px-4 rounded hover:bg-gray-700"
              >
                Deleted Job’s CV
              </Link>
            </li>
            <li>
              <Link
                href="/admin/create-job"
                className="block py-2 px-4 bg-blue-600 text-white text-center rounded hover:bg-blue-700 transition"
              >
                + Create Job
              </Link>
            </li>
          </ul>
        </Scrollbars>
      </Box>
    </Box>
  );
}

export function SidebarResponsive() {
  let sidebarBg = useColorModeValue("white", "gray.900");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Flex display={{ sm: "flex", xl: "none" }} alignItems="center">
      <Flex ref={btnRef} w="max-content" h="max-content" onClick={onOpen}>
        <Icon
          as={IoMenuOutline}
          color="gray.400"
          my="auto"
          w="20px"
          h="20px"
          me="10px"
          _hover={{ cursor: "pointer" }}
        />
      </Flex>
      <Drawer isOpen={isOpen} onClose={onClose} placement="left" finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent w="285px" maxW="285px" bg={sidebarBg}>
          <DrawerCloseButton zIndex="3" onClick={onClose} />
          <DrawerBody maxW="285px" px="0rem" pb="0">
            <Scrollbars autoHide universal={true}>
              <Sidebar />
            </Scrollbars>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}

export default Sidebar;
