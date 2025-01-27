export const getChallenge = async (challengeId) => {
  return {
    id: 1,
    title: "Palindrome Checker",
    tags: ["coding"],
    description: "random description",
    submissions: [
      {
        id: "1",
        user: {
          name: "gkibria",
        },

        description: "Easy solve with python.",
        code: "print('hello world!')",
        language: "python",
        comments: [],
      },
      {
        id: "2",
        user: {
          name: "mehedi",
        },
        description: "Implemented with java",
        code: "System.console.printLine('hello, worl'!)",
        language: "python",
        comments: [],
      },
      {
        id: "3",
        user: {
          name: "talha",
        },
        description: "Implemented with javascript",
        code: "console.log('hello world!')",
        language: "python",
        comments: [],
      },
    ],
    hints: {
      title: "What is palindrome",
      description: "A palindrome reads the same backward as forward.",
    },
  };
};
