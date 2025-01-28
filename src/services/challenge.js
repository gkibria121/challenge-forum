export const getChallenge = async (challengeId) => {
  const resp = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/challenges/${challengeId}`,
  );
  if (!resp.ok) throw new Error("Challenge not found");
  const data = await resp.json();
  console.log(data);
  return data;
};

export const getChallenges = async (params) => {
  const { page = 1, per_page = 10 } = params;
  console.log(page, per_page);
  const resp = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/challenges?_page=${page}&_per_page=${per_page}`,
  );

  if (!resp.ok) throw new Error("Challenge not found");
  const { data, pages, items } = await resp.json();

  return {
    data,
    totalPages: pages,
    totalItems: items,
    currentPage: parseInt(page),
  };
};
export const getSubmissions = async (challengeId) => {
  return [
    {
      id: 1,
      user: {
        name: "gkibria",
      },

      description: "Easy solve with python.",
      code: "print('hello world!')",
      language: "python",
      comments: [],
    },
    {
      id: 2,
      user: {
        name: "mehedi",
      },
      description: "Implemented with java",
      code: "System.console.printLine('hello, worl'!)",
      language: "python",
      comments: [],
    },
    {
      id: 3,
      user: {
        name: "talha",
      },
      description: "Implemented with javascript",
      code: "console.log('hello world!')",
      language: "python",
      comments: [],
    },
  ];
};
