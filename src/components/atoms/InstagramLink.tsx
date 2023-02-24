import React from 'react';
import {ISocialIcon} from "@/interfaces";
import Link from "next/link";
import {socials} from "@/constants";

const InstagramLink = ({strokeColor}: ISocialIcon) => {
  return (
      <Link href={socials.tiktok} target="_blank">
          <svg width="22" height="22" viewBox="0 0 24 24" className={`${strokeColor} cursor-pointer`}  xmlns="http://www.w3.org/2000/svg">
            <path d="M4 8C4 6.93913 4.42143 5.92172 5.17157 5.17157C5.92172 4.42143 6.93913 4 8 4H16C17.0609 4 18.0783 4.42143 18.8284 5.17157C19.5786 5.92172 20 6.93913 20 8V16C20 17.0609 19.5786 18.0783 18.8284 18.8284C18.0783 19.5786 17.0609 20 16 20H8C6.93913 20 5.92172 19.5786 5.17157 18.8284C4.42143 18.0783 4 17.0609 4 16V8Z"  strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
            <path d="M9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12Z"  strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
          </svg>

      </Link>
  );
};

export default InstagramLink;