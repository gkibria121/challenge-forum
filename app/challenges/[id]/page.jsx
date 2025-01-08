"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import SubmissionCard from "./SubmissionCard";
import Comments from "./Comments";
import Description from "./Description";
import Hints from "./Hints";
import SubmissionEditor from "./SubmissionEditor";
import TabHeader from "./../../../src/components/TabHeader";
import { useRouter } from "next/navigation";
// Main Page Component
export default function Page() {
  const [isCommenting, setIsCommenting] = useState(false);
  const [activeSubmission, setActiveSubmission] = useState("");
  const [activeTab, setActiveTab] = useState("2");
  const [rating, setRating] = useState(10);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { id } = useParams();
  const ratings = [2, 4, 6, 8, 10];
  const router = useRouter();
  const handleTabLinkClick = (tabId) => {
    setActiveTab(tabId);
  };
  const isClickOnLeftHalf = (element, event) => {
    const rect = element.getBoundingClientRect();
    const midpoint = rect.left + rect.width / 2;
    return event.clientX < midpoint;
  };
  const updateRatingClasses = (selectedRating) => {
    const ratingsContainer = document.querySelector(".ratings");
    const ratingElements = Array.from(ratingsContainer.children);

    ratingElements.forEach((ratingEl) => {
      const ratingValue = +ratingEl.dataset.rating;
      let newClass;

      if (selectedRating >= ratingValue) {
        newClass = "ratings__rating ratings__rating--fill";
      } else if (selectedRating === ratingValue - 1) {
        newClass = "ratings__rating ratings__rating--half-fill";
      } else {
        newClass = "ratings__rating ratings__rating--empty";
      }

      ratingEl.className = newClass;
    });
  };

  const goTo = (link) => {
    console.log(link);

    return () => router.push(link);
  };

  const handleRatingChange = (event) => {
    const star = event.target.closest(".ratings__rating");
    if (!star) return;
    const isLeft = isClickOnLeftHalf(star, event);
    const selectedRating = isLeft
      ? +star.dataset.rating - 1
      : +star.dataset.rating;
    updateRatingClasses(selectedRating);
    setRating(selectedRating);
  };

  return (
    <main className="main">
      <div className="container">
        <TabHeader
          activeTab={activeTab}
          onTabClick={handleTabLinkClick}
          isSubmitting={isSubmitting}
          setIsSubmitting={setIsSubmitting}
          setActivTab={setActiveTab}
          goTo={goTo}
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
          <button onClick={goTo("/challenges")} className="btn btn--back">
            {String.fromCharCode(8592)} Back
          </button>
        </TabHeader>
        <div className="tabs">
          <div className="tabs__body">
            {activeTab === "1" && <Description />}

            {activeTab === "2" && (
              <div className="submissions">
                <div className="submissions__list">
                  {[
                    {
                      id: "1",
                      username: "gkibria",
                      description: "Easy solve with python.",
                    },
                    {
                      id: "2",
                      username: "mehedi",
                      description: "Implemented with java",
                    },
                    {
                      id: "3",
                      username: "talha",
                      description: "Implemented with javascript",
                    },
                  ].map((submission) => (
                    <SubmissionCard
                      key={submission.id}
                      {...submission}
                      isActive={activeSubmission === submission.id}
                      onClick={setActiveSubmission}
                    />
                  ))}
                </div>

                <div className="submission">
                  {isSubmitting ? (
                    <SubmissionEditor
                      onCancel={() => setIsSubmitting(false)}
                      onSave={() => setIsSubmitting(false)}
                    />
                  ) : (
                    <div className="submission__content">
                      this is a solution...
                    </div>
                  )}

                  <Comments
                    isCommenting={isCommenting}
                    setIsCommenting={setIsCommenting}
                    ratings={ratings}
                    handleRatingChange={handleRatingChange}
                  />
                </div>
              </div>
            )}

            {activeTab === "3" && <Hints />}
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
