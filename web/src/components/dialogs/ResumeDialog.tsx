"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./ResumeDialog.module.css";

const ResumeDialog = () => {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dialogRef.current &&
        !dialogRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (open) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div className={styles.container} ref={dialogRef}>
      {/* Trigger button */}
      <button
        className={styles.downloadBtn}
        onClick={() => setOpen((prev) => !prev)}
      >
        Download Resume
      </button>

      {/* Dialog */}
      <div
        className={`${styles.dialog} ${
          open ? styles.dialogOpen : styles.dialogClosed
        }`}
      >
        <a href="/files/Resume En.pdf" download className={styles.option}>
          <Image
            src="/icons/Eng.svg"
            alt="English Flag"
            width={22}
            height={22}
          />
          <div>
            <p className={styles.language}>English</p>
            <p className={styles.pronunciation}>/ˈɪŋɡlɪʃ/</p>
          </div>
        </a>

        <a href="/files/Resume Es.pdf" download className={styles.option}>
          <Image
            src="/icons/Esp.svg"
            alt="Spanish Flag"
            width={22}
            height={22}
          />
          <div>
            <p className={styles.language}>Español</p>
            <p className={styles.pronunciation}>/espaˈɲol/</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ResumeDialog;
