"use client";

import { useState, useEffect } from "react";
import maypretecData from "../../../data/jobs/maypretec.json";
import pplusData from "../../../data/jobs/pplus.json";
import freelanceData from "../../../data/jobs/frelance.json";
import siecsaData from "../../../data/jobs/siecsa.json";
import JobModal from "../dialogs/JobsModal";

const experiences = [maypretecData, pplusData, freelanceData, siecsaData];

interface ExperienceProps {
  onOpenModal: (data: typeof maypretecData) => void;
}

export default function Experience ({ onOpenModal }: ExperienceProps){

    return(
        <div className="flex-1 space-y-4 bg-[#151515] p-6 rounded-2xl">
        <h3 className="text-lg font-bold mb-4 text-center">Experiences</h3>
        {experiences.map((exp, index) => (
            <div
            key={index}
            onClick={() => onOpenModal(exp)}
            className="bg-[#262626] rounded-lg p-4 flex justify-between items-start gap-4 transition-all duration-500 ease-in-out hover:shadow-[0_0_8px_4px_#5B2333] cursor-pointer"
            >
            <p className="text-sm text-gray-400 flex-shrink-0 w-24">{exp.dates}</p>
            <div className="flex flex-col">
                <h3 className="text-md font-bold">{exp.title}</h3>
                <p className="text-sm text-gray-400">{exp.subtitle}</p>
            </div>
            </div>
        ))}
        </div>
    );
}