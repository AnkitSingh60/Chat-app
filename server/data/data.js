const chats = [
    {
      isGroupChat: false,
      users: [
        {
          name: "John Bro",
          email: "john@gmail.com",
        },
        {
          name: "Ankit",
          email: "ankit@gmail.com",
        },
      ],
      _id: "617a077e18c25468bc7c4dd4",
      chatName: "John Bro",
    },
    {
      isGroupChat: false,
      users: [
        {
          name: "Guest User",
          email: "guest@gmail.com",
        },
        {
          name: "Ankit",
          email: "ankit@gmail.com",
        },
      ],
      _id: "617a077e18c25468b27c4dd4",
      chatName: "Guest User",
    },
    {
      isGroupChat: false,
      users: [
        {
          name: "Anthony",
          email: "anthony@gmail.com",
        },
        {
          name: "Ankit",
          email: "ankit@gmail.com",
        },
      ],
      _id: "617a077e18c2d468bc7c4dd4",
      chatName: "Anthony",
    },
    {
      isGroupChat: true,
      users: [
        {
          name: "John Bro",
          email: "jon@gmail.com",
        },
        {
          name: "Ankit",
          email: "ankit@gmail.com",
        },
        {
          name: "Guest User",
          email: "guest@gmail.com",
        },
      ],
      _id: "617a518c4081150716472c78",
      chatName: "Friends",
      groupAdmin: {
        name: "Guest User",
        email: "guest@gmail.com",
      },
    },
    {
      isGroupChat: false,
      users: [
        {
          name: "Jane Bro",
          email: "jane@gmail.com",
        },
        {
          name: "Ankit",
          email: "ankit@gmail.com",
        },
      ],
      _id: "617a077e18c25468bc7cfdd4",
      chatName: "Jane Bro",
    },
    {
      isGroupChat: true,
      users: [
        {
          name: "John Bro",
          email: "jon@gmail.com",
        },
        {
          name: "Ankit",
          email: "ankit@gmail.com",
        },
        {
          name: "Guest User",
          email: "guest@gmail.com",
        },
      ],
      _id: "617a518c4081150016472c78",
      chatName: "Chill Zone",
      groupAdmin: {
        name: "Guest User",
        email: "guest@gmail.com",
      },
    },
  ];

  module.exports =chats;