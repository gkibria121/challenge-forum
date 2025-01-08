import { useRouter } from "next/navigation";

const TabHeader = ({ activeTab, onTabClick, isSubmitting, setIsSubmitting,setActivTab }) => {
  const router = useRouter();
  
  return (
    <div className="tabs__header" onClick={onTabClick}>
      <button
        className={`tab__link ${activeTab === "1" ? "tab__link--active" : ""}`}
        data-tab-id="1"
      >
        Description
      </button>
      <button
        className={`tab__link ${activeTab === "2" ? "tab__link--active" : ""}`}
        data-tab-id="2"
      >
        Submissions
      </button>
      <button
        className={`tab__link ${activeTab === "3" ? "tab__link--active" : ""}`}
        data-tab-id="3"
      >
        Hints
      </button>
      <button
        className={`btn btn--add ${isSubmitting ? "hidden" : ""}`}
        onClick={() =>  {setActivTab("2");  setIsSubmitting(true)}}
      >
        Add
      </button>
      <button 
        onClick={() => router.push("/challenges")} 
        className="btn btn--back"
      >
        {String.fromCharCode(8592)} Back
      </button>
    </div>
  );
};

export  default TabHeader;