"use client"
import React, { useState } from "react";
import Challenge from "./Challenge"
import { useParams } from "next/navigation";
import { useChallenges } from "@/contexts/ChallengesContext";
function page() {
  const {id} = useParams()
  const {challenges} = useChallenges()
  const [currentChallenge,setCurrentChallenge] = useState(null);
  useState(()=>{
    setCurrentChallenge(challenges.find(challenge=> challenge.id ==id))
  },[challenges])
  if(currentChallenge)

    return  <Challenge challenge={currentChallenge}/>
  return "Challenge not found"
}

export default page;
