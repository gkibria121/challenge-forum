export const getChallenge = async (challengeId) => {
  const resp = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/challenges/${challengeId}`,
  );
  if (!resp.ok) throw new Error("Challenge not found");
  const data = await resp.json();

  return data;
};

export const getChallenges = async (params) => {
  const { page = 1, per_page = 10 } = params;

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
export const addChallenge = async (newChallenge) => {
  const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/challenges`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newChallenge),
  });

  if (!resp.ok) {
    throw new Error("Something went wrong!");
  }

  const data = await resp.json();
  return data; // Return the response data
};

export const updateChallenge = async (id, updatedChallenge) => {
  const resp = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/challenges/${id}`,
    {
      method: "PUT", // Corrected: Move method outside headers
      headers: {
        "Content-Type": "application/json", // Inform server about the data format
      },
      body: JSON.stringify(updatedChallenge), // Convert newChallenge object to JSON string
    },
  );

  if (!resp.ok) {
    throw new Error("Something went wrong!");
  }

  const data = await resp.json();
  return data; // Return the response data
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
