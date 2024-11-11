export const filters = [
  {
    id: "color",
    name: "color",
    options: [
      { value: "white", label: "White" },
      { value: "being", label: "Being" },
      { value: "blue", label: "Blue" },
      { value: "green", label: "Green" },
      { value: "purpole", label: "Purpole" },
      { value: "yellow", label: "Yellow" },
    ],
  },
  {
    id: "size",
    name: "size",
    options: [
      { value: "S", label: "S" },
      { value: "M", label: "M" },
      { value: "L", label: "L" },
    ],
  },
];

export const singleFilter = [
  {
    id: "price",
    name: "price",
    options: [
      { value: "159-399", label: "$159 to $399" },
      { value: "399-999", label: "$399 to $999" },
      { value: "999-1999", label: "$999 to $1999" },
      { value: "1999-2999", label: "$1999 to $2999" },
      { value: "3999-4999", label: "$3999 to $4999" },
    ],
  },
  {
    id: "discount",
    name: "discount range",
    options: [
      { value: "10", label: "10% And Above" },
      { value: "20", label: "20% And Above" },
      { value: "30", label: "30% And Above" },
      { value: "40", label: "40% And Above" },
      { value: "50", label: "50% And Above" },
    ],
  },
];
