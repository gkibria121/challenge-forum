"use client";

import { useState } from "react";
import { useChallenges } from "../../../src/contexts/ChallengesContext";
import SubmissionCard from "./SubmissionCard";
import Comments from "./Comments";
import Description from "./Description";
import Hints from "./Hints";
import SubmissionEditor from "./SubmissionEditor";
import TabHeader from "./../../../src/components/TabHeader";
import { useRouter } from "next/navigation";

export default function Challenge({ challenge }) {
  const { updateChallenge } = useChallenges(); // Access updateChallenge from context
  const [activeSubmission, setActiveSubmission] = useState({});
  const [activeTab, setActiveTab] = useState("2");
  const [rating, setRating] = useState(10);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [submissions, setSubmissions] = useState(challenge?.submissions ?? []);
  const ratings = [2, 4, 6, 8, 10];
  const router = useRouter();

  const handleTabLinkClick = (tabId) => {
    setActiveTab(tabId);
  };

  const saveComment = (comment) => {
    setActiveSubmission((prev) => ({
      ...prev,
      comments: [...(prev.comments ?? []), comment],
    }));

    const updatedSubmissions = submissions.map((submission) =>
      submission.id !== activeSubmission.id
        ? submission
        : { ...submission, comments: [...(submission.comments ?? []), comment] }
    );

    setSubmissions(updatedSubmissions);

    // Persist changes to the challenge
    updateChallenge({
      ...challenge,
      submissions: updatedSubmissions,
    });
  };

  const handleSubmissionSave = (submission) => {
    const updatedSubmissions = [...submissions, submission];
    setSubmissions(updatedSubmissions);
    setIsSubmitting(false);

    // Persist changes to the challenge
    updateChallenge({
      ...challenge,
      submissions: updatedSubmissions,
    });
  };

  return (
    <main className="main">
      <div className="cf-container">
        <TabHeader
          activeTab={activeTab}
          onTabClick={handleTabLinkClick}
          isSubmitting={isSubmitting}
          setIsSubmitting={setIsSubmitting}
          setActivTab={setActiveTab}
          goTo={(link) => () => router.push(link)}
          tabs={[
            { id: "1", label: "Description" },
            { id: "2", label: "Submissions" },
            { id: "3", label: "Hints" },
          ]}
        >
          <button
            className={`btn btn--add ${isSubmitting ? "hidden" : ""}`}
            onClick={() => setIsSubmitting(true)}
          >
            Add
          </button>
          <button
            onClick={() => router.push("/challenges")}
            className="btn btn--back"
          >
            {String.fromCharCode(8592)} Back
          </button>
        </TabHeader>
        <div className="tabs">
          <div className="tabs__body">
            {activeTab === "1" && <Description challenge={challenge} />}
            {activeTab === "2" && (
              <div className="submissions">
                <div className="submissions__list">
                  {submissions.map((submission) => (
                    <SubmissionCard
                      key={submission.id}
                      {...submission}
                      submission={submission}
                      isActive={activeSubmission.id === submission.id}
                      onClick={setActiveSubmission}
                    />
                  ))}
                  {!submissions.length && "No submissions!"}
                </div>
                <div className="submission">
                  {isSubmitting ? (
                    <SubmissionEditor
                      onCancel={() => setIsSubmitting(false)}
                      onSave={handleSubmissionSave}
                    />
                  ) : (
                    <div className="submission__content">
                      {activeSubmission?.code}
                    </div>
                  )}
                  <Comments
                    comments={activeSubmission.comments ?? []}
                    saveComment={saveComment}
                    ratings={ratings}
                    handleRatingChange={(event) => {
                      const star = event.target.closest(".ratings__rating");
                      if (!star) return;
                      const isLeft = isClickOnLeftHalf(star, event);
                      const selectedRating = isLeft
                        ? +star.dataset.rating - 1
                        : +star.dataset.rating;
                      setRating(selectedRating);
                    }}
                  />
                </div>
              </div>
            )}
            {activeTab === "3" && <Hints challenge={challenge} />}
          </div>
        </div>
        {activeTab === "1" && (
          <div className="tabs__footer">
            <button className="btn btn--next">Previous</button>
            <button className="btn btn--prev">Next</button>
          </div>
        )}
      </div>
    </main>
  );
}
