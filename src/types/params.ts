export type ChallengeIdParam = {
  challengeId: string;
};

export type ParamsWithChallengeId = { params: ChallengeIdParam };

export interface NextProp<Params> {
  params: Params;
  searchParams: any;
}
