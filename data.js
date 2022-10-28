const nodes = {
  sg: {
    USER: [
      {
        id: "1",
      },
      {
        id: "11",
      },
    ],
    WEB: [
      {
        id: "2",
      },
      {
        id: "222",
      },
      {
        id: "22",
      },
    ],
    APP: [
      {
        id: "3",
      },
    ],
    MIDDLEWARE: [
      {
        id: "4",
      },
    ],
    DATA: [
      {
        id: "5",
      },
    ],
    OUTER: [
      {
        id: "6",
      },
    ],
  },
  stg: {
    USER: [
      {
        id: "stg1",
      },
      {
        id: "stg11",
      },
    ],
    WEB: [
      {
        id: "stg2",
      },
      {
        id: "stg222",
      },
      {
        id: "stg22",
      },
    ],
    APP: [
      {
        id: "stg3",
      },
    ],
    MIDDLEWARE: [
      {
        id: "stg4",
      },
    ],
    DATA: [
      {
        id: "stg5",
      },
    ],
    OUTER: [
      {
        id: "stg6",
      },
    ],
  },
};
var links = [
  {
    source: "1",
    target: "2",
  },
  {
    source: "2",
    target: "3",
  },
];
function a() {
  return nodes;
}
