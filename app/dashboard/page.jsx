import React from "react";
import Pagination from "@/components/ui/Pagination";
import Button from "@/components/ui/Button";
import Main from "@/components/ui/Main";
import ChallengesDashboard from "@/components/dashboard/ChallengesDashboard";
import { getChallenges } from "@/services/challenge";
export default async function ChallengesPage({ params, searchParams }) {
  const calculatedSearchParams = await searchParams;

  const page = parseInt(calculatedSearchParams.page) || 1;
  const per_page = parseInt(calculatedSearchParams.per_page) || 10;

  const { data, totalPages, currentPage } = await getChallenges({
    page,
    per_page,
  });
  return (
    <Main>
      <div className="relative mx-auto mt-8 min-h-[90%] w-[90vw] max-w-[120rem] rounded-2xl bg-white p-12 shadow-md">
        <div className="mb-4 flex items-center justify-between">
          <h4>All challenges</h4>

          <Button
            variant="success"
            href="/dashboard/challenges/add"
            isLink={true}
          >
            Add
          </Button>
        </div>
        <ChallengesDashboard challenges={data} />

        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </div>
    </Main>
  );
}
