import * as basket from "./basket";
import { INCREASE, DECREASE } from "./constants";
import { deliveryCost } from "./config";
import { priceFormatter } from "./formatter";

describe("basket utilities", () => {
  describe("add items to the basket", () => {
    let initialBasket = [];

    beforeEach(() => {
      initialBasket = [
        {
          name: "Jeans",
          code: "J01",
          price: 3295,
          qty: 2
        }
      ];
    });

    it("adds item", () => {
      const product = {
        name: "Blouse",
        code: "B01",
        price: 2495,
        qty: 1
      };
      const b = basket.addToBasket(initialBasket, product);
      expect(b).toContainEqual(product);
      expect(b.length).toBe(2);
    });
  });

  describe("update quantities in the basket", () => {
    let initialBasket = [];

    beforeEach(() => {
      initialBasket = [
        {
          name: "Jeans",
          code: "J01",
          price: 3295,
          qty: 2
        }
      ];
    });

    it("increases item qty", () => {
      const update = {
        code: "J01",
        action: INCREASE
      };
      const b = basket.updateBasket(initialBasket, update);
      expect(b[0].qty).toBe(3);
    });

    it("decreases item qty", () => {
      const update = {
        code: "J01",
        action: DECREASE
      };
      const b = basket.updateBasket(initialBasket, update);
      expect(b[0].qty).toBe(1);
    });
  });

  describe("remove item from basket", () => {
    let initialBasket = [];

    beforeEach(() => {
      initialBasket = [
        {
          name: "Jeans",
          code: "J01",
          price: 3295,
          qty: 1
        }
      ];
    });

    it("should remove item from basket", () => {
      const code = "J01";
      const b = basket.removeFromBasket(initialBasket, code);
      expect(b.length).toBe(0);
    });

    it("should remove item when qty is 1 and qty is decreased", () => {
      const update = {
        code: "J01",
        action: DECREASE
      };
      const b = basket.updateBasket(initialBasket, update);
      expect(b.length).toBe(0);
    });
  });

  describe("basket totals", () => {
    let initialBasket = [
      {
        name: "Jeans",
        code: "J01",
        price: 3295,
        qty: 2
      },
      {
        name: "Blouse",
        code: "B01",
        price: 2495,
        qty: 1
      }
    ];

    it("gives the order total", () => {
      const total = basket.getBasketTotal(initialBasket);
      expect(total).toBe(9085);
    });

    it("gives the total amout of items", () => {
      const total = basket.getBasketQty(initialBasket);
      expect(total).toBe(3);
    });
  });

  describe("delivery cost", () => {
    let initialBasket = [];

    beforeEach(() => {
      initialBasket = [
        {
          name: "Jeans",
          code: "J01",
          price: 3295,
          qty: 2
        }
      ];
    });

    it("shows correct delivery cost for an order under 50", () => {
      const total = 49;
      const cost = basket.getDeliveryCost(total);
      expect(cost).toBe(deliveryCost);
    });

    it("shows free delivery cost for an order over 50", () => {
      const total = 50;
      const cost = basket.getDeliveryCost(total);
      expect(cost).toBe(0);
    });
  });

  describe("basket with specific products", () => {
    it("has S01 and B01", () => {
      const initialBasket = [
        {
          name: "Blouse",
          code: "B01",
          price: 2495,
          qty: 1
        },
        {
          name: "Socks",
          code: "S01",
          price: 795,
          qty: 1
        }
      ];
      const total = basket.getBasketTotal(initialBasket);
      const cost = basket.getDeliveryCost(priceFormatter(total));
      expect(total).toBe(3290);
      expect(cost).toBe(deliveryCost);
    });

    it("has J01 and B01", () => {
      const initialBasket = [
        {
          name: "Jeans",
          code: "J01",
          price: 3295,
          qty: 1
        },
        {
          name: "Blouse",
          code: "B01",
          price: 2495,
          qty: 1
        }
      ];
      const total = basket.getBasketTotal(initialBasket);
      const cost = basket.getDeliveryCost(priceFormatter(total));
      expect(total).toBe(5790);
      expect(cost).toBe(0);
    });
  });
});
