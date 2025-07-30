"use client";

import React from 'react';
import { WidgetAboutDoctor } from '../components/WidgetAboutDoctor'

export default function Home() {
  return (
    <main className="min-h-screen">
      <WidgetAboutDoctor
        aboutText="love guru"
        education={[
        {
                "college": "iit",
                "activity": "love god"
        },
        {
                "college": "st",
                "activity": "Fellowship in Preventive Medicine"
        }
]}
        hospitals={[
        "hp"
]}
        certificates={[
        "test"
]}
        languages={[
        "Hindi"
]}
        className=""
      />
    </main>
  );
}