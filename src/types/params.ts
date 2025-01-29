
export type ChallengeIdParam ={
    challengeId : String
}

export type ParamsWithChallengeId = { params : ChallengeIdParam}

export interface NextProp<Params>{
    params : Params;
    searchParams : any;
 
} 