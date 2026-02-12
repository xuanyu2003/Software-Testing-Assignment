import { describe, test, expect, vi } from "vitest";
import request from "supertest";
import express from "express";

vi.mock("../controllers/dogController", () => {
  return {
    getDogImage: vi.fn((req: any, res: any) => {
      return res.status(500).json({
        success: false,
        error: "Failed to fetch dog image: Network error",
      });
    }),
  };
});

import dogRoutes from "../routes/dogRoutes";

describe("dogRoutes.ts - negative test", () => {
  test("GET /api/dogs/random should return 500 and error JSON", async () => {
    const app = express();
    app.use("/api/dogs", dogRoutes);

    const response = await request(app).get("/api/dogs/random");

    expect(response.status).toBe(500);
    expect(response.body.success).toBe(false);
    expect(response.body.error).toBe("Failed to fetch dog image: Network error");
  });
});