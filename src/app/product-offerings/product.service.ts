import { Injectable } from "@angular/core";
@Injectable()
export class ProductDataService {
  constructor() {}
  Details = {
    p1: [
      {
        name: "Poly Rsi",
        id: 1
      },
      {
        name: "Poly Meta",
        id: 2
      },
      {
        name: "Poly Qu",
        id: 3
      }
    ],
    p2: [
      {
        name: "Sqq s",
        id: 4
      },
      {
        name: "Xut u",
        id: 4
      }
    ],
    p3: [
      {
        name: "Abc xyx",
        id: 6
      },
      {
        name: "Sag Bqe",
        id: 7
      },
      {
        name: "Cblt Io",
        id: 8
      },
      {
        name: "Gm Xen",
        id: 9
      }
    ]
  };
  SubProduct = {
    1: {
      name: "Poly Some XYZ",
      id: 1,
      refCategory: 1,
      steps: [
        {
          name: "alpha"
        },
        {
          name: "beta"
        },
        {
          name: "gamma"
        },
        {
          name: "delta"
        },
        {
          name: "phi"
        }
      ]
    },
    2: {
      name: "XYZ Some XYZ",
      id: 2,
      refCategory: 1,
      steps: [
        {
          name: "chi"
        },
        {
          name: "qui"
        },
        {
          name: "zeta"
        },
        {
          name: "theta"
        },
        {
          name: "epsilon"
        }
      ]
    },
    3: {
      name: "Yz Some XYZ",
      id: 3,
      refCategory: 1,
      steps: [
        {
          name: "chi"
        },
        {
          name: "qui"
        },
        {
          name: "zeta"
        },
        {
          name: "theta"
        },
        {
          name: "epsilon"
        }
      ]
    },
    4: {
      name: "XYZ Some XYZ",
      id: 2,
      refCategory: 1,
      steps: [
        {
          name: "chi"
        },
        {
          name: "qui"
        },
        {
          name: "zeta"
        },
        {
          name: "theta"
        },
        {
          name: "epsilon"
        }
      ]
    },
    5: {
      name: "XYZ Some XYZ",
      id: 2,
      refCategory: 1,
      steps: [
        {
          name: "chi"
        },
        {
          name: "qui"
        },
        {
          name: "zeta"
        },
        {
          name: "theta"
        },
        {
          name: "epsilon"
        }
      ]
    },
    6: {
      name: "XYZ Some XYZ",
      id: 2,
      refCategory: 1,
      steps: [
        {
          name: "chi"
        },
        {
          name: "qui"
        },
        {
          name: "zeta"
        },
        {
          name: "theta"
        },
        {
          name: "epsilon"
        }
      ]
    },
    7: {
      name: "XYZ Some XYZ",
      id: 2,
      refCategory: 1,
      steps: [
        {
          name: "chi"
        },
        {
          name: "qui"
        },
        {
          name: "zeta"
        },
        {
          name: "theta"
        },
        {
          name: "epsilon"
        }
      ]
    },
    8: {
      name: "XYZ Some XYZ",
      id: 2,
      refCategory: 1,
      steps: [
        {
          name: "chi"
        },
        {
          name: "qui"
        },
        {
          name: "zeta"
        },
        {
          name: "theta"
        },
        {
          name: "epsilon"
        }
      ]
    },
    9: {
      name: "XYZ Some XYZ",
      id: 2,
      refCategory: 1,
      steps: [
        {
          name: "chi"
        },
        {
          name: "qui"
        },
        {
          name: "zeta"
        },
        {
          name: "theta"
        },
        {
          name: "epsilon"
        }
      ]
    }
  };
  getProductListByProductId(id) {
    return this.Details[id];
  }
  getSubProductBySubId(id) {
    return this.SubProduct[id];
  }
}
