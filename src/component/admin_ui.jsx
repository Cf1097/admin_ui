import React, { useEffect, useState } from "react";
const axios = require("axios");

function MembersList() {
  const [members, setMembers] = useState([]);
  const [searchMember, setSearchMember] = useState("");

  useEffect(() => {
    getMemberDetail();
  }, []);
  const url =
    "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";

  const getMemberDetail = () => {
    axios
      .get(url)
      .then((res) => {})
      .catch((err) => {
        console.log("error:", err);
      });
  };

  const deleteMemberDetail = () => {
    axios
      .get(url)
      .then((res) => {})
      .catch((err) => {
        console.log("error:", err);
      });
  };
  const editMemberDetail = () => {
    axios
      .get(url)
      .then((res) => {})
      .catch((err) => {
        console.log("error:", err);
      });
  };

  return <></>;
}
