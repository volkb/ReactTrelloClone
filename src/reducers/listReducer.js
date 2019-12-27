const initialState = [
    {
        title: "Initial Title",
        id: 0,
        cards: [
            {
                id: 1,
                text: "Sample Text for ID 0."
            },
            {
                id: 2,
                text: "Sample Text for ID 1."
            }

        ]
    },
    {
        title: "Initial Title 2",
        id: 3,
        cards: [
            {
                id: 4,
                text: "Sample Text for ID 4."
            },
            {
                id: 5,
                text: "Sample Text for ID 5."
            },
            {
                id: 6,
                text: "Sample Text for ID 6."
            }

        ]
    }
];

const listReducer = (state = initialState, action) => {
  switch (action.type) {
      default:
          return state;
  }
};

export default listReducer;