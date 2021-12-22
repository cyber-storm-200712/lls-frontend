import Head from "next/head";

import Header from "../components/Header";
import SectionSeparator from "../components/SectionSeparator";
import SectionSeparator2 from "../components/SectionSeparator2";
import AppSection from "../components/AppSection";
import ScreenshotSection from "../components/ScreenshotSection";
import TestSection from "../components/TestSection";

export default function Home() {
  return (
    <div className="container-wrapper">
      <Header />
      <SectionSeparator />
      <AppSection />
      <SectionSeparator2 />
      <ScreenshotSection />
      <SectionSeparator />
      <TestSection />
    </div>
  );
}
