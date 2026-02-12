import { describe, test, expect, vi } from "vitest";
import request from "supertest";
import express from "express";


vi.mock("../controllers/dogController", () => {
  return {
    getDogImage: vi.fn((req: any, res: any) => {
      return res.status(200).json({
        success: true,
        data: {
          imageUrl:
            "https://images.dog.ceo/breeds/stbernard/n02195258_15579.jpg",
          status: "success",
        },
      });
    }),
  };
});


import dogRoutes from "../routes/dogRoutes";

describe("dogRoutes.ts - positive test", () => {
  test("GET /api/dogs/random should return 200 and mocked JSON", async () => {
    const app = express();
    app.use("/api/dogs", dogRoutes);

    const response = await request(app).get("/api/dogs/random");

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);

    expect(response.body.data.imageUrl).toContain(
      "https://images.dog.ceo/breeds/stbernard"
    );
  });
});