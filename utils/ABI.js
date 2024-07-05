export const abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "diplomaId",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "studentId",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "diplomaName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "graduationYear",
        type: "string",
      },
    ],
    name: "DiplomaRegistered",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_studentId",
        type: "string",
      },
      {
        internalType: "string",
        name: "_diplomaName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_graduationYear",
        type: "string",
      },
    ],
    name: "registerDiploma",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_studentId",
        type: "string",
      },
      {
        internalType: "string",
        name: "_firstName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_lastName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_sex",
        type: "string",
      },
      {
        internalType: "string",
        name: "_birthDate",
        type: "string",
      },
    ],
    name: "registerStudent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "studentId",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "firstName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "lastName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "sex",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "birthDate",
        type: "string",
      },
    ],
    name: "StudentRegistered",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "diplomas",
    outputs: [
      {
        internalType: "string",
        name: "diplomaId",
        type: "string",
      },
      {
        internalType: "string",
        name: "studentId",
        type: "string",
      },
      {
        internalType: "string",
        name: "diplomaName",
        type: "string",
      },
      {
        internalType: "string",
        name: "graduationYear",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_studentId",
        type: "string",
      },
    ],
    name: "getDiplomasForStudent",
    outputs: [
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "students",
    outputs: [
      {
        internalType: "string",
        name: "firstName",
        type: "string",
      },
      {
        internalType: "string",
        name: "lastName",
        type: "string",
      },
      {
        internalType: "string",
        name: "sex",
        type: "string",
      },
      {
        internalType: "string",
        name: "birthDate",
        type: "string",
      },
      {
        internalType: "bool",
        name: "isRegistered",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
