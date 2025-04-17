"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import EasyApply from "@/app/career/EasyApply/EasyApply";

export default function EasyApplyPage() {
  const searchParams = useSearchParams();
  const [jobDetails, setJobDetails] = useState({
    title: "",
    location: "",
  });

  useEffect(() => {
    const title = searchParams.get("title") || "";
    const location = searchParams.get("location") || "";
    setJobDetails({ title, location });
  }, [searchParams]);

  return <EasyApply jobDetails={jobDetails} />;
}
