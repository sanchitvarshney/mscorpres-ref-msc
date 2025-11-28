"use client";

import React from "react";

import styled from "styled-components";

import { IoMdCheckmarkCircle } from "react-icons/io";

import { FaXmark } from "react-icons/fa6";

interface SuccessAlertCardProps {
  message: string;
  setAlert: (value: boolean) => void;
}

const SuccessAlertCard: React.FC<SuccessAlertCardProps> = ({
  message,
  setAlert,
}) => {
  return (
    <Card>
      <div>
        <FaXmark className="close" onClick={() => setAlert(false)} />
        <IoMdCheckmarkCircle className="success" />
        <h3>Success</h3>
        <p>{message}</p>
        <button onClick={() => setAlert(false)}>Ok</button>
      </div>
    </Card>
  );
};

const Card = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  div {
    width: 300px;

    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px;
    position: relative;
    background-color: #fff;
    .success {
      color: #00b900;
      font-size: 50px;
    }
    button {
      width: 100%;
      font-size: 17px;
      background-color: #00b900;
      color: #fff;
      text-align: center;
      padding: 10px 0;
      border: none;
      outline: none;
      border-radius: 10px;
      cursor: pointer;
    }
    p {
      text-align: center;
      font-size: 15px;
      color: #464646;
    }
    h3 {
      color: #464646;
      font-size: 25px;
      text-align: center;
    }
    .close {
      font-size: 25px;
      color: #7a7a7a;
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
    }
  }
`;

export default SuccessAlertCard;
