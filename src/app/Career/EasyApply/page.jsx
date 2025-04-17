"use client";

import EasyApply from "@/app/Career/EasyApply/EasyApply";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

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
